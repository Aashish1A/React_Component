import { BrowserRouter, Route, Routes } from "react-router-dom";

// Easy Level Components
import Counter from "./Components/Easy/01-Core-Fundamentals/Counter";


// Medium Level Components (Essential CRUD)
import TodoListI from "./Components/Medium/01-Essential-CRUD/TodoListI";

// Hard Level Components (Complex State Management)


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Individual component routes for direct testing */}
        <Route path="/counter" element={<Counter />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
