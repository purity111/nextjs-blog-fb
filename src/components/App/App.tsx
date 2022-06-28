import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Blog from '../../pages/Blog/Blog';
import CreatePost from '../../pages/CreatePost/CreatePost';
import EditPost from '../../pages/EditPost/EditPost';
import Login from '../../pages/Login';
import Navbar from '../Navbar/Navbar';
import Home from '../../pages/Home/Home';
import Archaeology from '../../pages/Archaeology/Archaeology';
import CodingProjects from '../../pages/CodingProjects/CodingProjects';
import {signOut} from 'firebase/auth'
import { auth } from '../../firebase-config';



function App() {
  const [isAuth, setIsAuth] = useState<any>(localStorage.getItem('isAuth'));
  const [postToEdit, setPostToEdit] = useState<any>({});

  const signUserOut = () => {
    signOut(auth).then(() => {
        localStorage.clear()
        setIsAuth(false)
        window.location.pathname = "/login"
    })
  }


  return (
    <Router>
      {/* <Navbar isAuth={isAuth} setIsAuth={setIsAuth}></Navbar> */}
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} signUserOut={signUserOut}></Navbar>
      {/* <Navbar3Func></Navbar3Func> */}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/blog" element={<Blog isAuth={isAuth} setPostToEdit={setPostToEdit}/>} />
        <Route path="/createpost" element={
          <CreatePost 
            isAuth={isAuth} 
          />} />
        <Route path="/editpost" element={
          <EditPost 
            isAuth={isAuth} 
            postToEdit={postToEdit} 
          />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
        <Route path="/archaeology" element={<Archaeology/>} />
        <Route path="/coding" element={<CodingProjects/>} />
      </Routes>
    </Router>
  );
}

export default App;