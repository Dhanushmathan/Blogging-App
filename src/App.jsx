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
import PrivateRoute from './Components/PrivateRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/' element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route path='/create-post' element={
          <PrivateRoute>
            <CreatePost /> </PrivateRoute>} />
        <Route path='/edit-post/:id' element={
          <PrivateRoute>
            <EditPost /> </PrivateRoute>} />
        <Route path='/post/:id' element={
          <PrivateRoute>
            <SinglePost /> </PrivateRoute>} />
        <Route path='/profile' element={
          <PrivateRoute>
            <Profile /> </PrivateRoute>} />
        <Route path='/terms' element={
          <PrivateRoute>
            <Terms /> </PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;