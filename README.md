# Recursion Assignment

## Objectives

Creating a recursion algorithm to return the inputted amount of numbers in the fibonacci sequence and to create a merge sort algorithm to sort an unordered array of numbers into a sorted one.

### Key points:
- Using recursion to handles these problems.
- Making sure to set a Base case.
- ensure the correct recursion steps are added to divide and conquer the problem.

## fib.js

The Fibonacci Sequence, is a numerical sequence where each number is the sum of the two numbers before it. Eg. 0, 1, 1, 2, 3, 5, 8, 13 are the first eight digits in the sequence. This was a little challenging to start and and create way to see how recursion works and using the debug setting on VScode to step through the function step by step and see how it calls the function over and over again.

The recursion method looks so much cleaner and manageable but compared to the `for...loop` it has to call the function twice on every function call, making the stack very large and cause the function to run a lot slower than `for...loop`.

## merge.js

Merge sort is a way of dividing and conquering a problem. it will split the problem in halve on every function call and tackle them in smaller bits.
This sorting algorithm needs two functions, handling the break down of the array in one and then handling the merging of the array and sorting the numbers into the correct order. As you can see the `merge_sort` function recursively runs and halving the array on every function call, breaking the larger array into smaller ones and once the array ony consists of one number then the `merge` function will run and compare the `left` and `right` arrays and swap them around if necessary.

The use of `.slice()` and `Math.floor()` were super valuable to use slice to copy the portion of the array to a new variable to break the larger array down and flooring the `array.length` was crucial in finding the middle of the larger array.

## Problems Encountered
- How to find the middle of an uneven array.
- how to run the code in terminal.
- Debugging code in VScode.
- Making a copy of the array and choosing specific indexes

## New Skills Acquired
- Using `Math.floor()` to handle uneven arrays
- Using `node` to run the JavaScript code in the terminal with `node <name-of-file.js>`.
- Using VScode run and debug and stepping through using `Node`
- `slice()` was ideal taking in the start and end as parameters.

## Technologies Used
- JavaScript
- Node
