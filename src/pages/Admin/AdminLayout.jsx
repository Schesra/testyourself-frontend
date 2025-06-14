import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";

export default function AdminLayout() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-60 bg-teal-700 text-white py-8 px-4 flex flex-col gap-4">
        <div
          className="text-2xl font-bold mb-8 cursor-pointer"
          onClick={() => navigate("/admin/dashboard")}
        >
          Admin Panel
        </div>
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            "py-2 px-3 rounded transition " +
            (isActive
              ? "bg-white text-teal-700 font-bold"
              : "hover:bg-teal-600")
          }
        >
          Dashboard
        </NavLink>
        {/* Có thể mở rộng thêm link Courses, Users ở đây nếu cần */}
      </aside>
      <main className="flex-1 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
