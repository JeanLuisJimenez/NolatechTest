import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-500 to-cyan-300">
      <Outlet />
    </div>
  );
}
