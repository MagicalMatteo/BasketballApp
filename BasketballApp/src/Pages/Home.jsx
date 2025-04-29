import Exercise from "../Components/Exercise"
import { useState } from "react";
import BackgroundImageSection from "../Components/BackgroundimageSection"; // Import the component


function Home(){
    return <div className="Home">
        <BackgroundImageSection />
        <div className="img"></div>
        <div className="img-text">
            <h1>Choose your first workout!</h1>
        </div>
        <div id="effect">
            <p>Start a Workout!</p>
        </div>
        
    </div>
}

export default Home