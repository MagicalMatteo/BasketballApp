import { useState, useEffect } from 'react'
import './Cssfiles/App.css'
import ExercisePage from "./Pages/ExercisePage"
import Review from './Pages/Review.Jsx'
import Home from './Pages/Home'
import Workoutpage from './Pages/WorkoutPage'
import {Routes, Route, useLocation} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Login from './Components/Loginform'
import AccountCreationPage from './Pages/AccountCreationPage'


function App() {
  const location = useLocation();
  const [count, setCount] = useState(0)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  useEffect(() => {
    // Check if the user navigates to protected routes
    const protectedRoutes = ['/Workouts', '/Exercises', '/Review'];
    if (protectedRoutes.includes(location.pathname) && !isLoggedIn) {
      setIsLoginModalOpen(true); // Show login modal if not logged in
    } else {
      setIsLoginModalOpen(false); // Hide modal for other routes
    }
  }, [location, isLoggedIn]);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Set login status to true
    setIsLoginModalOpen(false); // Close the modal
  };

  return (
    <div>
    <Login 
    isOpen={isLoginModalOpen} 
    onClose={()=>setIsLoginModalOpen(false)} 
    onLoginSuccess={handleLoginSuccess}
    />
    <Navbar/>
    <main className='main-content'>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/Workouts" element = {<Workoutpage/>}/>
        <Route path = "/Exercises" element = {<ExercisePage/>}/>
        <Route path = "/Review" element = {<Review/>}/>
        <Route path = "/AccountCreationPage" element = {<AccountCreationPage setIsLoggedIn={setIsLoggedIn}/>}/>
      </Routes>
    </main>
    </div>
  )
}

export default App;
