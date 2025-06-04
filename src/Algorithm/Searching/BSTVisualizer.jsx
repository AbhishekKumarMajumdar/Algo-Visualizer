import React, { useState, useEffect } from "react";

// Define the Node structure
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Tree component
export default function BSTVisualizer() {
  const [root, setRoot] = useState(null);
  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [highlightPath, setHighlightPath] = useState([]);
  const [treeHeight, setTreeHeight] = useState(600);

  const calculateHeight = (node) => {
    if (!node) return 0;
    return 1 + Math.max(calculateHeight(node.left), calculateHeight(node.right));
  };

  useEffect(() => {
    const height = calculateHeight(root);
    setTreeHeight(height * 100);
  }, [root]);

  const insertNode = (node, value) => {
    if (!node) return new TreeNode(value);
    if (value < node.value) node.left = insertNode(node.left, value);
    else if (value > node.value) node.right = insertNode(node.right, value);
    return node;
  };

  const handleInsert = () => {
    const val = parseInt(input);
    if (!isNaN(val)) {
      const newRoot = insertNode(structuredClone(root), val);
      setRoot(newRoot);
      setInput("");
    }
  };

  const searchNodeWithAnimation = async (node, value, path = []) => {
    if (!node) {
      setSearchResult(`Value ${value} not found.`);
      return;
    }

    path.push(node.value);
    setHighlightPath([...path]);
    await new Promise((res) => setTimeout(res, 800));

    if (node.value === value) {
      setSearchResult(`Value ${value} found!`);
      return;
    }

    if (value < node.value) await searchNodeWithAnimation(node.left, value, path);
    else await searchNodeWithAnimation(node.right, value, path);
  };

  const handleSearch = () => {
    const val = parseInt(input);
    if (!isNaN(val)) {
      setHighlightPath([]);
      setSearchResult(null);
      searchNodeWithAnimation(root, val);
      setInput("");
    }
  };

  const renderTree = (node, x = 0, y = 0, level = 0, parentX = null, parentY = null) => {
    if (!node) return null;

    const offsetX = 40 * Math.pow(2, Math.max(2 - level, 0));
    const nodeX = x;
    const nodeY = y;

    const isHighlighted = highlightPath.includes(node.value);
    const fillColor = isHighlighted ? "#4ade80" : "#3b82f6";
    const strokeColor = isHighlighted ? "#166534" : "#1e40af";
    const textColor = "white";

    const line = parentX !== null ? (
      <line
        x1={parentX}
        y1={parentY + 20}
        x2={nodeX}
        y2={nodeY - 20}
        stroke={isHighlighted ? "#22c55e" : "#94a3b8"}
        strokeWidth="2"
      />
    ) : null;

    return (
      <g key={node.value}>
        {line}
        <circle cx={nodeX} cy={nodeY} r="20" fill={fillColor} stroke={strokeColor} strokeWidth="2" />
        <text x={nodeX} y={nodeY + 5} textAnchor="middle" fill={textColor} fontWeight="bold">
          {node.value}
        </text>
        {renderTree(node.left, x - offsetX, y + 100, level + 1, nodeX, nodeY)}
        {renderTree(node.right, x + offsetX, y + 100, level + 1, nodeX, nodeY)}
      </g>
    );
  };

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-xl md:text-2xl font-bold text-center mb-4">Binary Search Tree Visualizer</h1>

      <div className="flex flex-col items-center mb-6 w-full max-w-sm mx-auto">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border px-4 py-2 rounded w-full mb-3"
          placeholder="Enter value"
        />
        <div className="flex gap-2 w-full justify-center">
          <button
            onClick={handleInsert}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Insert
          </button>
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Search
          </button>
        </div>
      </div>

      {searchResult && (
        <div className="text-center mb-4 font-semibold text-gray-700">
          {searchResult}
        </div>
      )}

      <div className="w-full overflow-auto">
        <svg
          width="100%"
          height={treeHeight}
          viewBox={`0 0 1200 ${treeHeight}`}
          preserveAspectRatio="xMidYMin meet"
          className="mx-auto"
        >
          {renderTree(root, 600, 40)}
        </svg>
      </div>
      <div className="text-left max-w-3xl mx-auto">
  <h3 className="font-semibold">Definition:</h3>
  <p>
    A <strong>Binary Search Tree (BST)</strong> is a special type of binary tree where each node has at most two children,
    and the left child contains values less than the parent node, while the right child contains values greater than the parent node.
    This property makes searching operations efficient.
  </p>

  <h3 className="font-semibold my-4">Properties:</h3>
  <pre>
- Left Subtree &lt; Root<br/>
- Right Subtree &gt; Root<br/>
- No duplicate nodes (in standard BST)<br/>
  </pre>

  <h3 className="font-semibold my-4">Operations:</h3>
  <pre>
- <strong>Insert:</strong> Add a new value maintaining BST property.<br/>
- <strong>Delete:</strong> Remove a value and re-balance tree if needed.<br/>
- <strong>Search:</strong> Find if a value exists.<br/>
- <strong>Traversal:</strong> Inorder, Preorder, Postorder<br/>
  </pre>

  <h3 className="font-semibold my-4">Time Complexity:</h3>
  <pre>
- Best/Average Case (Balanced BST): O(log n)<br/>
- Worst Case (Skewed BST): O(n)<br/>
  </pre>

  <h3 className="font-semibold my-4">Use Cases:</h3>
  <pre>
- Searching and sorting<br/>
- Maintaining dynamic sorted data<br/>
- Implementing sets and maps<br/>
- Range queries and closest element search<br/>
  </pre>
</div>

    </div>
  );
}
