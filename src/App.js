import * as React from 'react';
import { BrowserRouter as Router, } from "react-router-dom"
import Routes from './Routes';
import PersistentDrawerRight from './components/PersistentDrawerRight';
import './App.css';

function App() {
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    return (
        <div className="App">
            <Router>
                <PersistentDrawerRight handleDrawerOpen={handleDrawerOpen}  handleDrawerClose={handleDrawerClose} open={open}  />
                <div>
                    <Routes />
                </div>
            </Router>
        </div>
    );
}

export default App;
