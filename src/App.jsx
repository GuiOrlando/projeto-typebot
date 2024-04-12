import { useState } from 'react'
import './App.css'
import { Button } from '@mui/material';
import Typebot from './Typebot.jsx';

function App() {
    const [showTypebot, setShowTypebot] = useState(false);

    const toggleTypebot = () => {
      setShowTypebot(!showTypebot);
    }
  
    return (
      <>
  
          <h1>Pagina para testes do typebot</h1>

            <Button variant="contained" onClick={toggleTypebot} className="typebot-toggle"> 
              {showTypebot} 
            </Button> 
            {showTypebot && <Typebot />}
  
      </>
    );
  }

export default App
