import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Easy Level Components
import Counter from "./Components/Easy/01-Core-Fundamentals/Counter";
import ToggleButton from "./Components/Easy/01-Core-Fundamentals/ToggleButton";
import CharacterCounter from "./Components/Easy/01-Core-Fundamentals/CharacterCounter";
import TogglePassword from "./Components/Easy/01-Core-Fundamentals/TogglePassword";
import Authentication from "./Components/Easy/01-Core-Fundamentals/Authentication";
import DarkMode from "./Components/Easy/01-Core-Fundamentals/DarkMode";

// Medium Level Components (Essential CRUD)
import TodoListI from "./Components/Medium/01-Essential-CRUD/TodoListI";
import TodoListII from "./Components/Medium/01-Essential-CRUD/TodoListII";
import Calculator from "./Components/Medium/01-Essential-CRUD/Calculator";
import ExpenseTracker from "./Components/Medium/01-Essential-CRUD/ExpenseTracker";
import KanbanBoard from "./Components/Medium/01-Essential-CRUD/KanbanBoard";
import BillingCounter from "./Components/Medium/01-Essential-CRUD/BillingCounter";

// Component Gallery for easy testing
const ComponentGallery = () => {
  const [selectedComponent, setSelectedComponent] = useState("");

  const components = {
    // Easy Level
    "Easy - Counter": Counter,
    "Easy - Toggle Button": ToggleButton,
    "Easy - Character Counter": CharacterCounter,
    "Easy - Toggle Password": TogglePassword,
    "Easy - Authentication": Authentication,
    "Easy - Dark Mode": DarkMode,

    // Medium Level
    "Medium - Todo List I": TodoListI,
    "Medium - Todo List II": TodoListII,
    "Medium - Calculator": Calculator,
    "Medium - Expense Tracker": ExpenseTracker,
    "Medium - Kanban Board": KanbanBoard,
    "Medium - Billing Counter": BillingCounter,
  };

  const SelectedComponent = components[selectedComponent];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">
            React Interview Components Gallery
          </h1>
          <p className="text-gray-600 mt-1">
            88 Components for Machine Coding Practice
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Component Selector Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-4 sticky top-6">
              <h2 className="font-semibold text-lg mb-4">Select Component</h2>

              <div className="space-y-2 max-h-96 overflow-y-auto">
                {Object.keys(components).map((componentName) => (
                  <button
                    key={componentName}
                    onClick={() => setSelectedComponent(componentName)}
                    className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                      selectedComponent === componentName
                        ? "bg-blue-100 text-blue-700 border border-blue-300"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {componentName}
                  </button>
                ))}
              </div>

              {/* Quick Start Tips */}
              <div className="mt-6 p-3 bg-blue-50 rounded-lg">
                <h3 className="font-medium text-blue-900 text-sm">
                  💡 Quick Start
                </h3>
                <ul className="text-xs text-blue-700 mt-2 space-y-1">
                  <li>• Click any component to preview</li>
                  <li>• Use browser dev tools to inspect</li>
                  <li>• Check console for errors</li>
                  <li>• Test responsive design</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Component Display Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow min-h-96">
              {selectedComponent ? (
                <div>
                  {/* Component Header */}
                  <div className="border-b px-6 py-4">
                    <h2 className="text-xl font-semibold text-gray-900">
                      {selectedComponent}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      Live preview - interact to test functionality
                    </p>
                  </div>

                  {/* Component Preview */}
                  <div className="p-6">
                    <div className="border border-dashed border-gray-300 rounded-lg p-8 bg-gray-50">
                      {SelectedComponent ? (
                        <SelectedComponent />
                      ) : (
                        <div>Component not found</div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-96 text-gray-500">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="text-lg font-medium">
                      Welcome to Component Gallery
                    </h3>
                    <p className="text-sm mt-2">
                      Select a component from the sidebar to start testing
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComponentGallery />} />

        {/* Individual component routes for direct testing */}
        <Route path="/counter" element={<Counter />} />
        <Route path="/toggle" element={<ToggleButton />} />
        <Route path="/character-counter" element={<CharacterCounter />} />
        <Route path="/todo-list-1" element={<TodoListI />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
