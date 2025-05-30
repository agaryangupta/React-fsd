import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About';
import Contact from './component/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  
  return (

      <Router>
        <Navbar title="TextUtils" aboutText="About" searchBar={true} />
        <Routes>
          <Route path="/" element={<TextForm heading ="Aryan's Text Area"/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
  );
}

export default App;