import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Budgets from './pages/Budgets';
import Navbar from './components/Navbar';
import Sidebar from './components/SideBar';
import { useEffect } from 'react';

function App() {
  return (  
    <div className="flex">
      <Sidebar />
      <main className="flex-1 min-w-0">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/budgets' element={<Budgets />} />

          {/* <Route path='*' element={} /> */}
        </Routes>
      </main>
    </div>
  )
}

export default App