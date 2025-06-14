import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Auth & onboarding pages
import WelcomePage from "./pages/Login/WelcomePage";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import AuthCallback from "./pages/Login/AuthCallback";
import CompleteProfile from "./pages/User/CompleteProfile";
import AdminUserDetail from "./pages/Admin/AdminUserDetail";
// Main app pages
import Dashboard from "./pages/User/Dashboard";
import CourseList from "./pages/User/CourseList";
import CourseDetail from "./pages/User/CourseDetail";
import Quiz from "./pages/User/Quiz";
import QuizComplete from "./pages/User/QuizComplete";
import CourseBrowse from "./pages/User/CourseBrowse";

// Admin pages
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminCourseDetail from "./pages/Admin/AdminCourseDetail";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect gốc "/" sang welcome hoặc login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        {/* Trang hoàn thiện hồ sơ người dùng mới */}
        <Route path="/complete-profile" element={<CompleteProfile />} />
        {/* Các trang chính dành cho người dùng */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/quiz/:id/complete" element={<QuizComplete />} />
        <Route path="/browse" element={<CourseBrowse />} />{" "}
        {/* ✅ Thêm route này */}
        <Route path="/admin/users/:id" element={<AdminUserDetail />} />
        {/* Trang quản trị */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="courses/:id" element={<AdminCourseDetail />} />
          <Route path="users/:id" element={<AdminUserDetail />} />
        </Route>
        {/* Route fallback: nếu không match route nào, redirect về login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}
