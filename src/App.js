import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
//import Registration from './component/registration';
//import SearchAppBar from './component/homepage';
//import Registration from './component/registration';
//import Loginsignup from "./component/Loginsignup";
import SearchAppBar from "./component/homepage";
import Loginsignup from "./component/Loginsignup";
import Registration from "./component/registration";

function App() {
  return (
    <div className='App'>
      {<Router>
        <Routes>
          <Route exact path='/' element={<SearchAppBar/>}/>
          <Route exact path='/re' element={<Loginsignup/>}/>
          <Route exact path='/reg' element={<Registration/>}/>
        </Routes>
      </Router> }
      {/* <SearchAppBar/> */}
      {/* <SearchAppBar/> */}

      

    {/* <PrimarySearchAppBar/>
    <ColorTabs/>
    <MediaCard/> */}
    </div>
  );
}

export default App;
