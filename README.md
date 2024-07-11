# Recursion Assignment

## Objectives

Create recursion algorithms to return the inputted amount of numbers in the Fibonacci sequence and to implement a merge sort algorithm to sort an unordered array of numbers.

### Key points:
- Use recursion to handle these problems.
- Make sure to set a base case.
- Ensure the correct recursion steps are added to divide and conquer the problem.

## fib.js

The Fibonacci Sequence is a numerical sequence where each number is the sum of the two numbers before it. E.g., 0, 1, 1, 2, 3, 5, 8, 13 are the first eight digits in the sequence. This was a little challenging to start and create a way to see how recursion works. Using the debug setting on VSCode to step through the function step by step helped in understanding how it calls the function repeatedly.

The recursion method looks much cleaner and more manageable, but compared to the `for...loop`, it has to call the function twice on every function call. This makes the stack very large and causes the function to run much slower than a `for...loop`.

## merge.js

Merge sort is a divide-and-conquer algorithm. It splits the problem in half on every function call and tackles them in smaller bits.
This sorting algorithm needs two functions: one for handling the breakdown of the array, and another for merging the array and sorting the numbers into the correct order. The `merge_sort` function recursively runs, halving the array on every function call, breaking the larger array into smaller ones. Once the array consists of only one number, the `merge` function runs and compares the `left` and `right` arrays, swapping elements if necessary.

The use of `.slice()` and `Math.floor()` was super valuable. Slice was used to copy portions of the array to new variables to break down the larger array, and flooring the `array.length` was crucial in finding the middle of the larger array.

## Problems Encountered
- How to find the middle of an uneven array.
- How to run the code in the terminal.
- Debugging code in VSCode.
- Making a copy of the array and choosing specific indexes.

## New Skills Acquired
- Using `Math.floor()` to handle uneven arrays.
- Using `node` to run JavaScript code in the terminal with `node <name-of-file.js>`.
- Using VSCode's run and debug feature and stepping through using `Node`.
- Using `slice()` to select specific portions of an array.

## Technologies Used
- JavaScript
- Node