import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Counter</h2>
      <div className="text-4xl font-bold mb-6 text-blue-600">{count}</div>
      <div className="flex gap-3">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          -
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Reset
        </button>
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;

/*
=== SOLUTION DOCUMENTATION ===

## 📝 Problem Understanding
**Goal**: Create a counter that can increment, decrement, and reset
**Core Features**: 
- [x] Display current count
- [x] Increment button (+1)
- [x] Decrement button (-1)
- [x] Reset button (back to 0)

**User Interactions**:
- [x] Click increment/decrement buttons
- [x] Click reset button

## 🧠 Approach Used
**State Management**:
```javascript
const [count, setCount] = useState(0) // Single number state
```

**Key Functions**:
```javascript
const increment = () => setCount(count + 1)
const decrement = () => setCount(count - 1)  
const reset = () => setCount(0)
```

## 🎯 Key Patterns Used
- [x] useState for state management
- [x] Event handling (onClick)
- [x] Function components
- [x] Conditional styling with Tailwind

## 🔄 Similar Components
**Builds to**: Toggle Button, Character Counter, Calculator
**Same patterns**: Any component with number state

## ⏱️ Implementation Stats
- **Time Taken**: 15 minutes
- **Difficulty** (1-10): 2/10
- **Attempts**: 1 try
- **Breakthrough Moment**: useState basics

## 💡 Key Learnings
**Patterns to Remember**:
```javascript
// Basic counter pattern - use everywhere
const [count, setCount] = useState(0)
const increment = () => setCount(count + 1)
const decrement = () => setCount(count - 1)
```

## 🎯 Interview Talking Points
**How I would explain this component**:
- "Simple state management with useState hook"
- "Three functions for the three operations"
- "Straightforward event handling on buttons"

**Questions I might get asked**:
- Q: "How would you add step size (increment by 5)?"
- A: "Add step parameter: setCount(count + step)"

- Q: "How would you prevent negative numbers?"
- A: "Add condition: setCount(Math.max(0, count - 1))"

## 🔄 Refactoring Ideas
- [ ] Add min/max limits
- [ ] Add step size option
- [ ] Add keyboard shortcuts
- [ ] Add animation effects

---
*Completed: [22/09/2025] | Review Date: [Date] | Confidence: 10/10*
*/