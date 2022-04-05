import './App.css'
import About from './pages/About/About';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'




function App() {
    return (
        <div className="App">

            <Router >
                
                <Routes exact>
                    <Route path="/"  element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </Router>
            
        </div>
    );
}

export default App;
