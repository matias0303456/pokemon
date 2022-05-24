import { useState } from "react";
import Router from "./Router";

import UserContext from './contexts/UserContext'
import './styles/App.css';

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  return (
    <UserContext.Provider value={{
      user,
      setUser
    }}>
      <div className="App">
        <Router />
      </div>
    </UserContext.Provider>
  );
}

export default App;
