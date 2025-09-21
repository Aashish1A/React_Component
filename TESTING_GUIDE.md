# Component Testing Guide

## 🚀 How to Test Your Components in Browser

You have **3 different ways** to test your components:

### 🎨 **Option 1: Component Gallery (Recommended)**

**Best for**: Browsing and comparing multiple components

1. **Start the dev server**:

   ```bash
   npm run dev
   ```

2. **Open browser**: `http://localhost:5173`

3. **Use the gallery**:
   - Click any component name in the sidebar
   - Component appears in the preview area
   - Interact with it to test functionality

**Features**:

- ✅ See all components in one place
- ✅ Easy switching between components
- ✅ Responsive design testing
- ✅ Perfect for daily practice sessions

---

### ⚡ **Option 2: Simple Single Component Testing**

**Best for**: Focused testing of one component at a time

1. **Switch to SimpleApp** in `main.jsx`:

   ```jsx
   // In src/main.jsx, change this line:
   import App from "./App.jsx";
   // To this:
   import App from "./SimpleApp.jsx";
   ```

2. **Edit SimpleApp.jsx** to test your component:

   ```jsx
   // Change the import
   import YourComponent from "./path/to/YourComponent";

   // Change the JSX
   <YourComponent />;
   ```

3. **Save and refresh browser**

**Benefits**:

- ✅ Clean, distraction-free testing
- ✅ Easy to focus on one component
- ✅ Good for debugging specific issues

---

### 🛣️ **Option 3: Direct URL Routes**

**Best for**: Testing specific components with direct URLs

Access components directly via URL:

- `http://localhost:5173/counter` - Counter component
- `http://localhost:5173/toggle` - Toggle Button
- `http://localhost:5173/character-counter` - Character Counter
- `http://localhost:5173/todo-list-1` - Todo List I
- `http://localhost:5173/calculator` - Calculator

**To add more routes**, edit `App.jsx`:

```jsx
// Add new route in the Routes section
<Route path="/your-component" element={<YourComponent />} />
```

---

## 🔧 Daily Development Workflow

### **When Building a New Component:**

1. **Create component file** with basic structure
2. **Test immediately** using Option 1 (Gallery) or Option 2 (SimpleApp)
3. **Build incrementally**:
   - Add static JSX first
   - Test in browser ✅
   - Add state
   - Test in browser ✅
   - Add event handlers
   - Test in browser ✅
   - Add styling
   - Test in browser ✅

### **When Debugging Issues:**

1. **Open browser dev tools** (F12)
2. **Check Console tab** for JavaScript errors
3. **Check Elements tab** to inspect DOM
4. **Check Network tab** if fetching data
5. **Use React DevTools** extension for component state

---

## 🎯 Testing Checklist for Each Component

### ✅ **Basic Functionality**

- [ ] Component renders without errors
- [ ] All buttons/inputs work as expected
- [ ] State updates correctly
- [ ] No console errors

### ✅ **User Interactions**

- [ ] Click events work
- [ ] Form submissions work
- [ ] Keyboard navigation works
- [ ] Hover effects work

### ✅ **Edge Cases**

- [ ] Empty state (no data)
- [ ] Loading state
- [ ] Error state
- [ ] Invalid input handling

### ✅ **Responsive Design**

- [ ] Works on mobile (DevTools device mode)
- [ ] Works on tablet
- [ ] Works on desktop
- [ ] Text is readable at all sizes

### ✅ **Performance**

- [ ] No unnecessary re-renders
- [ ] Fast response to user input
- [ ] Smooth animations

---

## 🚨 Common Issues & Solutions

### **Component Not Showing**

```
Problem: Blank screen or component not rendering
Solutions:
1. Check console for import errors
2. Verify component path is correct
3. Check if component returns JSX
4. Ensure component is exported as default
```

### **Styling Issues**

```
Problem: Component looks broken or unstyled
Solutions:
1. Check if Tailwind CSS is working
2. Verify class names are correct
3. Check if custom CSS is imported
4. Use browser inspector to debug styles
```

### **State Not Updating**

```
Problem: Clicks don't change component state
Solutions:
1. Check if useState is imported
2. Verify state setter is called correctly
3. Check if event handlers are bound properly
4. Use React DevTools to inspect state
```

### **Build/Import Errors**

```
Problem: "Module not found" or similar errors
Solutions:
1. Check file paths are correct
2. Verify file extensions (.jsx)
3. Check if components are exported properly
4. Restart dev server (Ctrl+C, then npm run dev)
```

---

## 🎪 Pro Tips for Testing

### **Fast Development Loop**

1. Keep browser and editor side by side
2. Use browser auto-refresh (saves manually refreshing)
3. Keep dev tools open in Console tab
4. Use Component Gallery for quick component switching

### **Debugging Strategy**

1. Start with simple `console.log()` statements
2. Use React DevTools to inspect component state
3. Test in small increments (don't build everything at once)
4. Use browser's device mode for responsive testing

### **Interview Simulation**

1. Time yourself building components
2. Practice explaining your approach out loud
3. Test edge cases interviewer might ask about
4. Practice building without looking at notes

---

## 🔄 Quick Switch Between Testing Methods

**Current setup**: Component Gallery (App.jsx)

**To switch to SimpleApp**:

```jsx
// In src/main.jsx, change:
import App from "./App.jsx";
// To:
import App from "./SimpleApp.jsx";
```

**To switch back to Gallery**:

```jsx
// In src/main.jsx, change:
import App from "./SimpleApp.jsx";
// To:
import App from "./App.jsx";
```

---

**Ready to test your components! Start with the Component Gallery at `http://localhost:5173` 🚀**
