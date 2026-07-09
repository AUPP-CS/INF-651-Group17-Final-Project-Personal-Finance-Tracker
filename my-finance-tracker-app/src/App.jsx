import { Routes, Route } from "react-router-dom";
import Transactions from "./pages/Transactions";
import Budgets from "./pages/Budgets";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/SideBar";
import Goals from "./pages/Goals";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <>
      {/* <div className="fixed top-6 right-6 z-99">
          <SwitchTheme />
        </div> */}
      <div className="lg:flex min-h-screen">
        <Sidebar />
        <main className="min-w-0 flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/budgets" element={<Budgets />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/analytics" element={<Analytics />} />
            {/* <Route path='*' element={} /> */}
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
