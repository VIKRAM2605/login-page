import Login from "./Components/Auth/Login"
import Signin from "./Components/Auth/Signin"
import Home from "./Components/Home/Home"
import {Routes,Route} from 'react-router-dom'
import Navigate from "./Components/Navigation/Navigate"

function App() {
  return(<>
  <div className="flex flex-row">
    <Navigate/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Signin" element={<Signin/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
