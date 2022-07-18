import { BrowserRouter as Router, } from "react-router-dom"
import Routes from './Routes';
import Header from './components/Header';
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <div>
                    <Routes />
                </div>
            </Router>
        </div>
    );
}

export default App;
