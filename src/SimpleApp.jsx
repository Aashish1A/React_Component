// Import your component here to test
import Counter from "./Components/Easy/01-Core-Fundamentals/Counter";
// import TodoListI from "./Components/Medium/01-Essential-CRUD/TodoListI"
// import Calculator from "./Components/Medium/01-Essential-CRUD/Calculator"

// Simple single component tester
function SimpleApp() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Component Testing
          </h1>
          <p className="text-gray-600">
            Change the import above to test different components
          </p>
        </div>

        {/* Component Testing Area */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 bg-gray-50">
            {/* Replace <Counter /> with your component */}
            <Counter />
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h2 className="font-semibold text-blue-900 mb-3">
            How to Test Components:
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-blue-800">
            <li>Change the import statement above to your component</li>
            <li>
              Replace{" "}
              <code className="bg-blue-100 px-1 rounded">
                &lt;Counter /&gt;
              </code>{" "}
              with your component
            </li>
            <li>Save the file and check the browser</li>
            <li>Use browser dev tools to debug</li>
            <li>Check console for errors</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default SimpleApp;
