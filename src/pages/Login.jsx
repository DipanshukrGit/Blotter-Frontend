import axios from "axios";
import { API_ENDPOINTS } from "../config/api";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { StoreContext } from "../context/StoreContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { loginUser } = useContext(StoreContext);
  const token = localStorage.getItem("token");
  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(
        API_ENDPOINTS.USER.LOGIN,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("res", res);
      if (res.data.success) {
        const { user, token } = res.data;
        loginUser(user, token);
        toast.success(res.data.message);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="glass rounded-3xl shadow-2xl p-8 animate-fade-in">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">
              <span className="gradient-text">Welcome Back</span>
            </h1>
            <p className="text-gray-600">Sign in to your Blotter account</p>
          </div>

          {/* Form */}
          <form onSubmit={submitHandler} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={onChangeHandler}
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-300"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                name="password"
                value={formData.password}
                onChange={onChangeHandler}
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-300"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 btn-modern disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* Footer */}
          <p className="text-center mt-6 text-gray-600">
            Don't have an account?{" "}
            <Link
              to={"/register"}
              className="text-purple-600 font-semibold hover:text-pink-600 transition-colors duration-300"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;