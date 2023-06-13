import { useState } from 'react';
import NavBar from '../NavBar';
import '../containers/App.css';


function MainLayout({children}) {
  const [accounts, setAccounts] = useState([]);
  return (
    <div className="overlay">
      <div className="App">
        <NavBar accounts={accounts} setAccounts={setAccounts}/>
        <div>{children}</div>
      </div>
      <div className="moving-background"></div>
    </div>
  );
}

export default MainLayout;
