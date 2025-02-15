# React Native FlatList Performance with Search

This repository demonstrates a common performance issue in React Native when using FlatList with large datasets and a search filter.  The provided code creates a list of 10,000 items.  Searching through this list causes significant lag and unresponsiveness.

## Bug

The `bug.js` file contains the problematic code. The search functionality filters the data using the `filter` method on the entire dataset. This leads to performance degradation as the number of items increases.

## Solution

The `bugSolution.js` file offers a solution using React Native's `SectionList`.  `SectionList` is optimized for handling larger datasets and significantly improves the responsiveness of the search filter.  Alternative optimization strategies using pagination or Virtualization are also discussed in the solution.