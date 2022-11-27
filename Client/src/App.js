import './App.css';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';
import Search from './components/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<LoginForm />}/>
        <Route path="signup" element={<SignUpForm />}/>
        <Route path="login" element={<LoginForm />}/>
        <Route path="profile" element={<Profile />} />
        <Route path="search" element={<Search />} />
    </Routes>
  </BrowserRouter>);
}

export default App;
