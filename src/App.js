import logo from './logo.svg';
import './App.css';
import { SearchEngine } from './Components/Engine';
import {Routes,Route} from "react-router-dom"
import { Result } from './Components/Result';
function App() {
  return (
    <div className="App">
     <Routes>
       <Route path={"/"} element={<SearchEngine/>}></Route>
       <Route path={"/search"} element={<Result/>}></Route>
     </Routes>
     
    </div>
  );
}

export default App;
