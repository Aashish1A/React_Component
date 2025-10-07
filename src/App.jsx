import { BrowserRouter, Route, Routes } from "react-router-dom";

// Easy Level Components
import Counter from "./Components/Easy/01-Core-Fundamentals/Counter";


// Medium Level Components (Essential CRUD)
import TodoListI from "./Components/Medium/01-Essential-CRUD/TodoListI";
import DarkModeToggle from "./Components/Easy/01-Core-Fundamentals/DarkModeToggle";

// Hard Level Components (Complex State Management)


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Individual component routes for direct testing */}
        <Route path="/counter" element={<Counter />} />
        <Route path="/darkMode" element={<DarkModeToggle />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
