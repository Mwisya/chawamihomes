import './App.css'
import About from './pages/About/About';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'




function App() {
    return (
        <div className="App">

            <BrowserRouter basename='/chawamihomes' >
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/about" exact element={<About/>}/>
                </Routes>
            </BrowserRouter>
            
        </div>
    );
}

export default App;
