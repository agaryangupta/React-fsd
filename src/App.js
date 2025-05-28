import logo from './logo.svg';
import Navbar from './component/navbar';
import TextForm from './component/textform';
import './App.css';

function App() {
  return (
   <div className="App">
      {<Navbar title ="TextUtils" aboutText = "AboutTextUtils" searchBar={true}/>}
      {<TextForm/>}
    </div>
  );
}

export default App;
