import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const codeSnippets = {
  python: `def heap_sort(arr):
    def heapify(arr, n, i):
        largest = i
        l = 2 * i + 1
        r = 2 * i + 2
        if l < n and arr[i] < arr[l]:
            largest = l
        if r < n and arr[largest] < arr[r]:
            largest = r
        if largest != i:
            arr[i], arr[largest] = arr[largest], arr[i]
            heapify(arr, n, largest)
    n = len(arr)
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)
    for i in range(n-1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        heapify(arr, i, 0)`,

  c: `void heapify(int arr[], int n, int i) {
    int largest = i;
    int l = 2 * i + 1;
    int r = 2 * i + 2;
    if (l < n && arr[l] > arr[largest])
        largest = l;
    if (r < n && arr[r] > arr[largest])
        largest = r;
    if (largest != i) {
        int temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        heapify(arr, n, largest);
    }
}
void heapSort(int arr[], int n) {
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);
    for (int i = n - 1; i > 0; i--) {
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, i, 0);
    }
}`,

  cpp: `void heapify(vector<int>& arr, int n, int i) {
    int largest = i;
    int l = 2 * i + 1;
    int r = 2 * i + 2;
    if (l < n && arr[l] > arr[largest])
        largest = l;
    if (r < n && arr[r] > arr[largest])
        largest = r;
    if (largest != i) {
        swap(arr[i], arr[largest]);
        heapify(arr, n, largest);
    }
}
void heapSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);
    for (int i = n - 1; i > 0; i--) {
        swap(arr[0], arr[i]);
        heapify(arr, i, 0);
    }
}`,

  java: `void heapify(int arr[], int n, int i) {
    int largest = i;
    int l = 2 * i + 1;
    int r = 2 * i + 2;
    if (l < n && arr[l] > arr[largest])
        largest = l;
    if (r < n && arr[r] > arr[largest])
        largest = r;
    if (largest != i) {
        int swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;
        heapify(arr, n, largest);
    }
}
void heapSort(int arr[]) {
    int n = arr.length;
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);
    for (int i = n - 1; i > 0; i--) {
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, i, 0);
    }
}`
};

const Arrow = ({ direction }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-red-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    style={{ transform: direction === 'down' ? 'rotate(90deg)' : 'rotate(-90deg)' }}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-4-4l4 4-4 4" />
  </svg>
);

const HeapSortVisualizer = () => {
  const [array, setArray] = useState([5, 3, 8, 4, 2]);
  const [isSorting, setIsSorting] = useState(false);
  const [language, setLanguage] = useState("cpp");
  const [inputValue, setInputValue] = useState("5,3,8,4,2");
  const [currentIndices, setCurrentIndices] = useState({ i: null, j: null });
  const [sortedIndices, setSortedIndices] = useState(new Set());
  const [swapInfo, setSwapInfo] = useState(null);
  const [sortSteps, setSortSteps] = useState([]);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const heapify = async (arr, n, i) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    setCurrentIndices({ i, j: null });
    await delay(300);

    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;

    if (largest !== i) {
      setSwapInfo({ from: i, to: largest });
      await delay(500);
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      setArray([...arr]);
      setSwapInfo(null);
      await delay(400);
      await heapify(arr, n, largest);
    }
  };

  const heapSort = async () => {
    setIsSorting(true);
    const arr = [...array];
    const n = arr.length;
    const sortedSet = new Set();

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      await heapify(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
      setSwapInfo({ from: 0, to: i });
      await delay(500);
      [arr[0], arr[i]] = [arr[i], arr[0]];
      setArray([...arr]);
      sortedSet.add(i);
      setSortedIndices(new Set(sortedSet));
      setSwapInfo(null);
      await delay(400);
      await heapify(arr, i, 0);
    }
    sortedSet.add(0);
    setSortedIndices(new Set(sortedSet));
    setIsSorting(false);
  };

  const generateArray = () => {
    if (isSorting) return;
    const newArr = Array.from({ length: 6 }, () => Math.floor(Math.random() * 20) + 1);
    setArray(newArr);
    setInputValue(newArr.join(","));
    setSortedIndices(new Set());
    setCurrentIndices({ i: null, j: null });
  };

  const handleInputChange = (e) => {
    if (isSorting) return;
    const val = e.target.value;
    setInputValue(val);
    const parts = val.split(",").map((x) => parseInt(x.trim()));
    if (parts.length > 0 && parts.every((num) => !isNaN(num))) {
      setArray(parts);
      setSortedIndices(new Set());
      setCurrentIndices({ i: null, j: null });
    }
  };

  return (
    <div className="px-6 py-10 max-w-5xl mx-auto text-center select-none">
      <h2 className="text-4xl font-black mb-10 text-[#1f2943]">
        Heap Sort <span className="text-[#8b7de9] font-extrabold">Visualizer</span>
      </h2>

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        disabled={isSorting}
        className="mb-6 px-4 py-2 border rounded w-full max-w-md mx-auto"
        placeholder="e.g. 5,3,8,4,2"
      />

      <div className="flex justify-center items-end gap-4 mb-6 min-h-28">
        {array.map((value, index) => {
          const isComparing = index === currentIndices.i || index === currentIndices.j;
          const isSortedPos = sortedIndices.has(index);

          return (
            <div key={index} className="relative flex flex-col items-center">
              <AnimatePresence>
                {swapInfo && (swapInfo.from === index || swapInfo.to === index) && (
                  <motion.div
                    key={`arrow-top-${index}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-1"
                  >
                    <Arrow direction="down" />
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                className="w-12 h-12 flex items-center justify-center rounded shadow text-white text-lg font-semibold"
                style={{
                  backgroundColor: isSortedPos
                    ? "#22c55e"
                    : isComparing
                    ? "#f87171"
                    : "#7c7ff7",
                }}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {value}
              </motion.div>

              <AnimatePresence>
                {swapInfo && (swapInfo.from === index || swapInfo.to === index) && (
                  <motion.div
                    key={`arrow-bottom-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-1"
                  >
                    <Arrow direction="up" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        <button
          onClick={heapSort}
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

      <div className="text-left max-w-3xl mx-auto">
        <h3 className="font-semibold">Definition:</h3>
        <p>
          Heap Sort is a comparison-based sorting technique based on a Binary Heap data structure. It's similar to selection sort where we first find the maximum element and place it at the end.
        </p>

        <h3 className="font-semibold my-4">Time Complexity:</h3>
        <pre>
- Best Case: O(n log n)<br/>
- Average Case: O(n log n)<br/>
- Worst Case: O(n log n)<br/>
        </pre>

        <h3 className="font-semibold mt-4">Code ({language.toUpperCase()}):</h3>
        <pre className="bg-gray-900 text-white p-4 rounded overflow-x-auto">
          <code>{codeSnippets[language]}</code>
        </pre>

        <label className="block mt-4">
          <span className="font-semibold">Select Language:</span>
          <select
            className="ml-2 px-3 py-1 border rounded"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            disabled={isSorting}
          >
            <option value="python">Python</option>
            <option value="c">C</option>
            <option value="cpp">C++</option>
            <option value="java">Java</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default HeapSortVisualizer;