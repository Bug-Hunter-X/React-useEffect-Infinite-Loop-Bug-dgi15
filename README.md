# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook.  The bug arises from an improperly defined dependency array, leading to an infinite rendering loop.

## Bug Description

The `useEffect` hook in `bug.js` is intended to log the current count to the console after each render. However, the dependency array `[]` (empty array) is missing the `count` variable.  This means the effect will run after every render, regardless of changes in state.  Because the effect calls `console.log`, this causes an infinite loop of rendering and logging.

## Solution

The solution, shown in `bugSolution.js`, involves correctly specifying `count` as a dependency within the dependency array. This ensures the effect only runs when the `count` value changes.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the infinite console logging in the browser's console.  (If you open `bugSolution.js`, you can compare how this is resolved).
