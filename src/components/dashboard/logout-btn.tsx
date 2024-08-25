"use client"
import { logout } from "@/app/auth/auth";

export default function LogoutButton() {
  return (
    <button
      className="flex items-center gap-3 rounded-lg  py-2 font-medium text-white transition-all hover:text-gray-400"
      onClick={async () => {
        await logout();
      }}
    >
      
      Logout
    </button>
  );
}