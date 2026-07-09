import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ArrowLeftRight,
  Wallet,
  Target,
  BarChart3,
  LogOut,
} from "lucide-react";

const LINKS = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/transactions", label: "Transactions", icon: ArrowLeftRight },
  { to: "/budgets", label: "Budget", icon: Wallet },
  // Analytics and Goals isn't built yet — wire this up once there's a page for it.
  { to: "/goals", label: "Savings Goal", icon: Target },
  { to: "/analytics", label: "Analytics", icon: BarChart3 },
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex w-64 shrink-0 flex-col justify-between bg-base-100 border-r border-base-300 min-h-screen p-5">
      <div>
        <div className="flex items-center gap-2 mb-8 px-1">
          <img 
            src="/src/assets/logo.png"
            alt="Financial Tracker Logo" 
            className="w-12 h-12 rounded-xl object-cover"
          />
          <span className="text-xl font-bold tracking-tight">Financial Tracker</span>
        </div>
        
        <p className="px-2 mb-2 text-xs font-semibold uppercase tracking-wider text-base-content/50">
          Overview
        </p>

        <nav className="flex flex-col gap-1">
          {LINKS.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary text-primary-content"
                    : "text-base-content/70 hover:bg-base-200"
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>
      </div>

      <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-error hover:bg-error/10">
        <LogOut size={18} />
        Logout
      </button>
    </aside>
  );
}