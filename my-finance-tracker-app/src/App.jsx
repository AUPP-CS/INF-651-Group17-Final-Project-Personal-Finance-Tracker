import { Routes, Route } from 'react-router-dom';
import Transactions from './pages/Transactions';
import Budgets from './pages/Budgets';
import Navbar from './components/Navbar';
import { useEffect } from 'react';

function App() {
  return (  
    <>
      <Navbar />
      <main>
        <Routes>
          
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/budgets' element={<Budgets />} />

          {/* <Route path='*' element={} /> */}
        </Routes>
      </main>
    </>
  )
}

export default App