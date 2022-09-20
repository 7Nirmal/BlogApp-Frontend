import Home from "./pages/Home";
import Topbar from "./components/topbar/Topbar";
import {
  Routes,
  Route,
} from "react-router-dom";
import Blogpage from "./pages/Blogpage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Write from "./pages/Write";
import Userprofile from "./pages/Userprofile";



function App() {

  return (
    <>
  <Topbar/>
<Routes>
<Route path="/"   element={<Home/>}/>
<Route path="/blogpage/:id" element={<Blogpage/>} />
<Route path="/login" element={<Login/>} />
<Route path="/register" element={<Register/>} />
<Route path="/write" element={<Write/>} />
<Route path="user-profile" element={<Userprofile/>}/>
</Routes>
</>

  );
}

export default App;
