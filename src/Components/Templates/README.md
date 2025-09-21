# Component Templates

Quick starter templates for consistent component creation across all difficulty levels.

## 🚀 Usage

1. Copy the appropriate template
2. Rename to your component name
3. Replace placeholder content
4. Implement your logic
5. Test and refine

## 📁 Template Files

### BasicComponent.jsx - For simple UI components

```jsx
import React from "react";

/**
 * ComponentName - Brief description
 *
 * Features:
 * - Feature 1
 * - Feature 2
 *
 * Props:
 * - prop1 (string): Description
 * - prop2 (boolean): Description
 */
const ComponentName = ({
  prop1 = "default",
  prop2 = false,
  className = "",
  ...props
}) => {
  return (
    <div className={`base-styles ${className}`} {...props}>
      {/* Component content */}
      <h2>Component Name</h2>
      <p>Implementation coming soon...</p>
    </div>
  );
};

export default ComponentName;
```

### InteractiveComponent.jsx - For components with state

```jsx
import React, { useState, useEffect } from "react";

const ComponentName = () => {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    // Side effects
  }, []);

  const handleAction = () => {
    // Event handling logic
  };

  return <div className="component-container">{/* Interactive content */}</div>;
};

export default ComponentName;
```

### CRUDComponent.jsx - For data management components

```jsx
import React, { useState, useEffect } from "react";

const ComponentName = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // CRUD operations
  const addItem = (item) => {
    setItems([...items, { id: generateId(), ...item }]);
  };

  const updateItem = (id, updates) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, ...updates } : item))
    );
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const generateId = () => Date.now().toString();

  return <div className="crud-container">{/* CRUD interface */}</div>;
};

export default ComponentName;
```

## 🎯 Quick Component Creation

When you're ready to implement a component:

1. **Copy template** that matches your component type
2. **Update component name** and file name
3. **Add to routing** in App.jsx if needed
4. **Implement step by step**:
   - Basic structure first
   - Add state and logic
   - Handle edge cases
   - Add styling
   - Optimize performance

## 📚 Best Practices

- ✅ Start with MVP (Minimum Viable Product)
- ✅ Add features incrementally
- ✅ Handle loading and error states
- ✅ Make components responsive
- ✅ Add proper prop validation
- ✅ Use semantic HTML
- ✅ Consider accessibility
- ✅ Write clean, readable code

**Happy coding! 🚀**
