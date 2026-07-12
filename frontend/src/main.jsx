import { Routes, Route, Link } from "react-router-dom";

import Students from "./pages/Students";
import Results from "./pages/Results";

function App() {
  return (
    <div>

      <nav className="navbar">
        <h2>Student Result Management</h2>

        <div>
          <Link to="/">Students</Link>

          <Link to="/results">Results</Link>
        </div>
      </nav>

      <Routes>

        <Route
          path="/"
          element={<Students />}
        />

        <Route
          path="/results"
          element={<Results />}
        />

      </Routes>

    </div>
  );
}

export default App;