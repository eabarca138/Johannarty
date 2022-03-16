import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import SocialMedia from './components/SocialMedia/SocialMedia'
import Profile from './components/Profile/Profile'
import Contact from './components/Contact/Contact'
import Dates from './components/Dates/Dates'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SocialMedia" element={<SocialMedia />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Dates" element={<Dates />} />
      </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
