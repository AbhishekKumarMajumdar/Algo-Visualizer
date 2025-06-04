import React, { useState } from "react";
import { motion } from "framer-motion";

const MergeSortVisualizer = () => {
  const [array, setArray] = useState([110, 541, 801, 854, 434, 410, 581, 763]);
  const [isSorting, setIsSorting] = useState(false);
  const [inputValue, setInputValue] = useState("110,541,801,854,434,410,581,763");
  const [treeLevels, setTreeLevels] = useState([]);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const handleInputChange = (e) => {
    if (isSorting) return;
    const val = e.target.value;
    setInputValue(val);
    const parts = val.split(",").map((x) => parseInt(x.trim()));
    if (parts.length > 0 && parts.every((num) => !isNaN(num))) {
      setArray(parts);
      setTreeLevels([]);
    }
  };

  const generateArray = () => {
    if (isSorting) return;
    const newArr = Array.from({ length: 8 }, () => Math.floor(Math.random() * 900 + 100));
    setArray(newArr);
    setInputValue(newArr.join(","));
    setTreeLevels([]);
  };

  const mergeSortTree = (arr) => {
    const splitLevels = [];
    const mergeLevels = [];

    const recurse = (subArr, leftIndex, level = 0) => {
      if (!splitLevels[level]) splitLevels[level] = [];
      splitLevels[level].push({ values: subArr.slice(), x: leftIndex });

      if (subArr.length <= 1) return subArr;

      const mid = Math.floor(subArr.length / 2);
      const left = recurse(subArr.slice(0, mid), leftIndex, level + 1);
      const right = recurse(subArr.slice(mid), leftIndex + mid, level + 1);

      const merged = [];
      let i = 0, j = 0;
      while (i < left.length && j < right.length) {
        if (left[i] < right[j]) merged.push(left[i++]);
        else merged.push(right[j++]);
      }
      merged.push(...left.slice(i), ...right.slice(j));

      if (!mergeLevels[level]) mergeLevels[level] = [];
      mergeLevels[level].push({ values: merged.slice(), x: leftIndex });

      return merged;
    };

    recurse(arr, 0);
    return [...splitLevels, ...mergeLevels.reverse()];
  };

  const handleStart = async () => {
    setIsSorting(true);
    const arr = [...array];
    const tree = mergeSortTree(arr);
    for (let i = 0; i < tree.length; i++) {
      setTreeLevels(tree.slice(0, i + 1));
      await delay(1200);
    }
    setIsSorting(false);
  };

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto text-center select-none">
      <h2 className="text-4xl font-black mb-10 text-[#1f2943]">
        Merge Sort <span className="text-[#8b7de9] font-extrabold">Visualizer</span>
      </h2>

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        disabled={isSorting}
        className="mb-6 px-4 py-2 border rounded w-full max-w-md mx-auto"
        placeholder="e.g. 110,541,801,854,434,410,581,763"
      />

      <div className="flex flex-col items-center space-y-10 mb-10">
  {treeLevels.map((level, levelIndex) => (
    <div
      key={levelIndex}
      className="flex justify-center items-center gap-6 flex-wrap"
    >

            <div className="flex justify-center items-center gap-6">
              {level.map((group, groupIndex) => (
                <div key={groupIndex} className="flex flex-col items-center">
                  <div className="flex">
                    {group.values.map((val, idx) => (
                      <motion.div
                        key={idx}
                        className="border border-gray-400 rounded-md w-12 h-12 flex items-center justify-center bg-[#7c7ff7] text-white font-semibold text-sm mx-0.5"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                      >
                        {val}
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex mt-1 text-xs text-gray-700">
                    {group.values.map((_, idx) => (
                      <div key={idx} className="w-12 text-center">
                        {group.x + idx}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        <button
          onClick={handleStart}
          disabled={isSorting}
          className="bg-gradient-to-br from-[#7c7ff7] to-[#5a5de0] text-white px-5 py-2 rounded hover:brightness-110 disabled:opacity-50"
        >
          Start Sorting
        </button>
        <button
          onClick={generateArray}
          disabled={isSorting}
          className="bg-gray-300 text-black px-5 py-2 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Generate Random Array
        </button>
      </div>

      <div className="text-left max-w-3xl mx-auto text-[#1f2943]">
        <h3 className="text-xl font-semibold mb-2 my-4">Tree-like Merge Sort Steps:</h3>
        <p className="mb-4">Each level shows the division followed by merging stages during the sort process.</p>

        <h3 className="font-semibold mt-4">Definition:</h3>
        <p>
          Merge Sort is a divide and conquer algorithm that splits the array into halves,
          recursively sorts each half, and then merges the sorted halves back together.
        </p>

        <h3 className="font-semibold my-4">Time Complexity:</h3>
        <pre>
- Best Case: O(n log n)<br/>
- Average Case: O(n log n)
- Worst Case: O(n log n)
        </pre>
      </div>
    </div>
  );
};

export default MergeSortVisualizer;
