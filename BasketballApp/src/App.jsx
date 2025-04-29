import { useState } from 'react'
import './Cssfiles/App.css'
import './Cssfiles/App.css'
import ExercisePage from "./Pages/ExercisePage"
import Review from './Pages/Review.Jsx'
import Home from './Pages/Home'
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Navbar/>
    <main className='main-content'>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/Exercises" element = {<ExercisePage/>}/>
        <Route path = "/Review" element = {<Review/>}/>
      </Routes>
    </main>
    </div>
  )
}

export default App
