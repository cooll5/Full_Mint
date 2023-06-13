import React, { useEffect, useState} from 'react';
import './App.css';
import MainMint from '../MainMint.js';
import NavBar from '../NavBar.js';
import MainLayout from '../layout/MainLayout';

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <MainLayout>
      <MainMint accounts={accounts} setAccounts={setAccounts}/>
      
    </MainLayout>
  );
}

export default App;
