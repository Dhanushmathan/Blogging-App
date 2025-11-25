import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Navbar from './Components/Navbar';
import Register from './Pages/Register';
import CreatePost from './Pages/CreatePost';
import EditPost from './Pages/EditPost';
import SinglePost from './Pages/SinglePost';
import Profile from './Pages/Profile';
import Terms from './Pages/Terms';
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/edit-post/:id' element={<EditPost />} />
        <Route path='/post/:id' element={<SinglePost />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/terms' element={<Terms />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;