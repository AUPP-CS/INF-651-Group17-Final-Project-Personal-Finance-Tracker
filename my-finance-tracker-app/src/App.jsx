import { Routes, Route } from "react-router-dom";
import Transactions from "./pages/Transactions";
import Budgets from "./pages/Budgets";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/SideBar";
import { useEffect } from "react";
import SwitchTheme from "./components/SwitchTheme";

function App() {
  return (
    <div className="lg:flex min-h-screen">
      <div className="flex">
        <div className="fixed top-6 right-6 z-99">
          <SwitchTheme />
        </div>
        <Sidebar />
        <main className="min-w-0">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/budgets" element={<Budgets />} />

            {/* <Route path='*' element={} /> */}
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
