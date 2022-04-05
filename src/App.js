import './App.css'
import About from './pages/About/About';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/"  element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
            
        </div>
    );
}

export default App;
