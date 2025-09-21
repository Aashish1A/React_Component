# Core Fundamentals - HIGHEST PRIORITY ⭐⭐⭐

**Start here first!** These 6 components form the foundation of React development and are most frequently asked in interviews.

## 🎯 Priority Implementation Order

### 1. Counter (15 min) - **MUST KNOW**

```jsx
// Key concepts: useState, event handling
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};
```

### 2. Toggle Button (15 min) - **MUST KNOW**

```jsx
// Key concepts: boolean state, conditional rendering
const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <button
      onClick={() => setIsOn(!isOn)}
      className={isOn ? "bg-green-500" : "bg-red-500"}
    >
      {isOn ? "ON" : "OFF"}
    </button>
  );
};
```

### 3. Character Counter (20 min)

- Real-time input monitoring
- Input validation
- Character limit handling

### 4. Toggle Password (20 min)

- Show/hide password functionality
- Icon switching
- Input type toggling

### 5. Authentication (25 min)

- Login/logout state
- Form validation
- Local storage integration

### 6. Dark Mode (25 min)

- Theme switching
- CSS variable manipulation
- Persistent theme storage

## 🚀 Implementation Tips

1. **Start with Counter** - It's the foundation for all state management
2. **Master Toggle Button** - Essential pattern for boolean states
3. **Focus on clean code** - Readable, maintainable implementations
4. **Add error handling** - Consider edge cases
5. **Make it responsive** - Mobile-friendly design

## 📚 Key Learning Outcomes

- ✅ useState fundamentals
- ✅ Event handling patterns
- ✅ Conditional rendering
- ✅ Basic form handling
- ✅ Local storage usage
- ✅ Component lifecycle basics

## 🎯 Interview Readiness Checklist

For each component, ensure you can:

- [ ] Implement from scratch in 15-25 minutes
- [ ] Explain the state management approach
- [ ] Handle edge cases and errors
- [ ] Add basic styling and responsiveness
- [ ] Discuss potential improvements

**Master these 6 components and you'll have a solid foundation for any React interview!**
