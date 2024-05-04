import "./output.css";
import {BrowserRouter, Routes, Route, Navigate, Router} from 'react-router-dom';
import LoginComponent from "./routes/Login";
import SignupComponent from "./routes/Signup";
import HomeComponent from "./routes/Home";
import LoggedInHomeComponent from "./routes/LoggedInHome";
import UploadSong from "./routes/UploadSong";
import MyMusic from "./routes/MyMusic";
import { useCookies } from "react-cookie";

function App() {

  const [cookie, setCookie] = useCookies(["token"]);
  // console.log(cookie.token);

  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
        {cookie.token ? (
        
          //{
            /* Adding routes component here indicates to the package (react-router-dom) that we are starting to define our routes inside this*/
          //}
         
        // Logged in Routes
        <Routes>
          <Route path="/" element={<HelloComponent/>} />
          <Route path="/home" element={<LoggedInHomeComponent />} />
          <Route path="/uploadSong" element={<UploadSong/>}/>
          <Route path="/myMusic" element={<MyMusic/>}/>
          <Route path="*" element={<Navigate to="home"/>}/>

        </Routes>
        ) : (
        // Logged Out Routes
          <Routes>
          <Route path="/home" element={<HomeComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/signup" element={<SignupComponent />} />
        <Route path="*" element={<Navigate to="login"/>}/>
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

const HelloComponent = () => {
  return <div>This is hello from component</div>
}

export default App;
