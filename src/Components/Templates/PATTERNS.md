# My React Patterns Cheatsheet

## 🎯 State Management Patterns I Always Use

### Basic State Patterns
```javascript
// Counter pattern
const [count, setCount] = useState(0)
const increment = () => setCount(count + 1)
const decrement = () => setCount(count - 1)

// Toggle pattern
const [isOpen, setIsOpen] = useState(false)
const toggle = () => setIsOpen(!isOpen)

// Input pattern
const [value, setValue] = useState('')
const handleChange = (e) => setValue(e.target.value)
```

### Array Operations (CRUD)
```javascript
// Add item to array
const addItem = (newItem) => {
  setItems([...items, { id: Date.now(), ...newItem }])
}

// Remove item from array
const removeItem = (id) => {
  setItems(items.filter(item => item.id !== id))
}

// Update item in array
const updateItem = (id, updates) => {
  setItems(items.map(item => 
    item.id === id ? { ...item, ...updates } : item
  ))
}

// Toggle boolean property in array
const toggleItem = (id) => {
  setItems(items.map(item => 
    item.id === id ? { ...item, completed: !item.completed } : item
  ))
}
```

### Form Handling Patterns
```javascript
// Single input controlled component
const [input, setInput] = useState('')
const handleInputChange = (e) => setInput(e.target.value)

// Multiple inputs with single state
const [formData, setFormData] = useState({
  name: '',
  email: '',
  password: ''
})

const handleFormChange = (e) => {
  const { name, value } = e.target
  setFormData(prev => ({
    ...prev,
    [name]: value
  }))
}

// Form submission
const handleSubmit = (e) => {
  e.preventDefault()
  // Process form data
  setFormData({ name: '', email: '', password: '' }) // Reset
}
```

## 🎮 Common Component Patterns

### Modal/Dialog Pattern
```javascript
const [isModalOpen, setIsModalOpen] = useState(false)
const openModal = () => setIsModalOpen(true)
const closeModal = () => setIsModalOpen(false)

// In JSX
{isModalOpen && (
  <div className="modal-overlay" onClick={closeModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      {/* Modal content */}
    </div>
  </div>
)}
```

### Tabs Pattern
```javascript
const [activeTab, setActiveTab] = useState(0)
const tabs = ['Tab 1', 'Tab 2', 'Tab 3']

// In JSX
{tabs.map((tab, index) => (
  <button 
    key={index}
    className={activeTab === index ? 'active' : ''}
    onClick={() => setActiveTab(index)}
  >
    {tab}
  </button>
))}
```

### Accordion Pattern
```javascript
const [openItems, setOpenItems] = useState(new Set())

const toggleItem = (index) => {
  const newOpenItems = new Set(openItems)
  if (newOpenItems.has(index)) {
    newOpenItems.delete(index)
  } else {
    newOpenItems.add(index)
  }
  setOpenItems(newOpenItems)
}
```

## 🔄 useEffect Patterns

### Cleanup Pattern
```javascript
useEffect(() => {
  const timer = setInterval(() => {
    // Timer logic
  }, 1000)

  return () => clearInterval(timer) // Cleanup
}, [])
```

### Fetch Data Pattern
```javascript
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('/api/data')
      const data = await response.json()
      setData(data)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }
  
  fetchData()
}, [dependency])
```

## 🎯 Event Handler Patterns

### Prevent Default Pattern
```javascript
const handleSubmit = (e) => {
  e.preventDefault()
  // Form logic
}

const handleKeyPress = (e) => {
  if (e.key === 'Enter') {
    e.preventDefault()
    // Enter key logic
  }
}
```

### Event Delegation Pattern
```javascript
const handleItemClick = (e) => {
  const itemId = e.target.closest('[data-id]')?.dataset.id
  if (itemId) {
    // Handle click for specific item
  }
}
```

## 🔧 Utility Patterns

### Debounce Pattern
```javascript
const [searchTerm, setSearchTerm] = useState('')
const [debouncedTerm, setDebouncedTerm] = useState('')

useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedTerm(searchTerm)
  }, 300)

  return () => clearTimeout(timer)
}, [searchTerm])
```

### Local Storage Pattern
```javascript
const [data, setData] = useState(() => {
  const saved = localStorage.getItem('key')
  return saved ? JSON.parse(saved) : defaultValue
})

useEffect(() => {
  localStorage.setItem('key', JSON.stringify(data))
}, [data])
```

## 📊 Component Types I've Mastered

### ✅ Easy Level Mastered
- [x] Counter - Basic useState
- [x] Toggle Button - Boolean state  
- [x] Character Counter - String manipulation
- [x] Authentication - Form + validation
- [x] Dark Mode - Theme switching
- [x] Progress Bar - Calculated values

### 🔄 Medium Level In Progress
- [ ] Todo List I - Array CRUD operations
- [ ] Calculator - Complex state logic
- [ ] Tic Tac Toe - Game state + win logic
- [ ] Kanban Board - Drag & drop + categories
- [ ] Modal Component - Portal + backdrop

### 🎯 Hard Level Goals
- [ ] Data Table - Sorting + filtering + pagination
- [ ] Tree Navigation - Recursive rendering
- [ ] File Explorer - Complex interactions

## 🚨 When I Get Stuck - Quick Reference

### 1. Array Issues
- Use `map()` for updates, `filter()` for deletions
- Always spread operator `[...array]` for immutability
- Check if using correct array method

### 2. State Not Updating
- Check if mutating state directly
- Use functional updates for complex state
- Verify dependencies in useEffect

### 3. Event Handling Issues
- Check `e.preventDefault()` for forms
- Verify event target selection
- Use `e.stopPropagation()` for nested events

### 4. Styling Issues
- Use conditional classes: `className={condition ? 'active' : ''}`
- Check CSS specificity
- Use browser dev tools

## 💡 Quick Wins for Interviews

### Most Asked Patterns
1. **Todo List** - Array manipulation + CRUD
2. **Calculator** - String manipulation + evaluation
3. **Modal** - Portal + event handling
4. **Tabs** - Active state management
5. **Form Validation** - Input validation + error handling

### Performance Tips
- Use `React.memo()` for expensive components
- Use `useMemo()` for expensive calculations
- Use `useCallback()` for event handlers in lists
- Debounce search inputs

---

*Updated: [Current Date] | Components Solved: [Count] | Confidence Level: [1-10]*