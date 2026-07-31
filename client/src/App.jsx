import { Routes, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { logoutUser } from "./features/auth/authSlice";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-indigo-600">
          MERN Shop
        </Link>
        <div className="space-x-4 text-sm">
          {user ? (
            <>
              <span className="text-gray-600">
                Hi, {user.name} ({user.role})
              </span>
              <button
                onClick={() => dispatch(logoutUser())}
                className="text-indigo-600 hover:underline"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-indigo-600 hover:underline">
                Login
              </Link>
              <Link to="/register" className="text-indigo-600 hover:underline">
                Register
              </Link>
            </>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
