import Exercise from "../Components/Exercise"
import { useState } from "react";

function Home(){
    const [searchQuery, setSearchQuery] = useState("");

    const exercises = [
        { id: 1, name: "Pushups", info: "A basic upper body exercise.", url: "https://training.fit/wp-content/uploads/2020/02/liegestuetze-800x448.png" },
        { id: 2, name: "Squats", info: "Strengthens legs and glutes.", url: "https://example.com/squats.png" },
        { id: 3, name: "Situps", info: "Core strengthening exercise.", url: "https://example.com/situps.png" },
        { id: 4, name: "Lunges", info: "Improves balance and leg strength.", url: "https://example.com/lunges.png" },
        { id: 5, name: "Plank", info: "Great for core stability.", url: "https://example.com/plank.png" },
        { id: 6, name: "Burpees", info: "Full-body cardio exercise.", url: "https://example.com/burpees.png" },
        { id: 7, name: "Pullups", info: "Strengthens back and arms.", url: "https://example.com/pullups.png" },
        { id: 8, name: "Mountain Climbers", info: "Cardio and core workout.", url: "https://example.com/mountain_climbers.png" },
        { id: 9, name: "Jumping Jacks", info: "Full-body cardio exercise.", url: "https://example.com/jumping_jacks.png" },
        { id: 10, name: "Bicep Curls", info: "Strengthens arm muscles.", url: "https://example.com/bicep_curls.png" },
        { id: 11, name: "Tricep Dips", info: "Targets triceps and shoulders.", url: "https://example.com/tricep_dips.png" },
        { id: 12, name: "Deadlifts", info: "Strengthens back and legs.", url: "https://example.com/deadlifts.png" },
        { id: 13, name: "Bench Press", info: "Chest and triceps workout.", url: "https://example.com/bench_press.png" },
        { id: 14, name: "Leg Raises", info: "Targets lower abs.", url: "https://example.com/leg_raises.png" },
        { id: 15, name: "High Knees", info: "Cardio and leg workout.", url: "https://example.com/high_knees.png" },
        { id: 16, name: "Russian Twists", info: "Great for obliques.", url: "https://example.com/russian_twists.png" },
        { id: 17, name: "Side Plank", info: "Strengthens obliques and core.", url: "https://example.com/side_plank.png" },
        { id: 18, name: "Calf Raises", info: "Strengthens calves.", url: "https://example.com/calf_raises.png" },
        { id: 19, name: "Jump Squats", info: "Explosive leg workout.", url: "https://example.com/jump_squats.png" },
        { id: 20, name: "Bicycle Crunches", info: "Targets abs and obliques.", url: "https://example.com/bicycle_crunches.png" }
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery)
    };

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type = "text" 
            placeholder="Search for exercise" 
            className="search-input" 
            value = {searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type = "submit"className="search-button">Search</button>
        </form>
        <div className = "exercise-grid">
            {exercises.map((exercise) =>(
                exercise.name.toLowerCase().startsWith(searchQuery) && <Exercise exercise={exercise} key = {exercise.id}/>
                ))}
        </div>
    </div>
}

export default Home