import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import SignUp from './Pages/SignUp.jsx';
import Profile from './Pages/Profile';
import SignIn from './Pages/SignIn';

export default function App() {
  return (
  <BrowserRouter>
       <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/about' element={<About />} />
         <Route path='/sign-in' element={<SignIn />} />
         <Route path='/sign-up' element={<SignUp />} />
         <Route path='/profile' element={<Profile />} />
       </Routes>


    </BrowserRouter>
  );
}
