function Exercise({exercise}){

    function addToWorkout(){
        alert("clicked")
    }
    return <div className = "exercise">
        <div className = "exercise-image">
            <div className= "workoutaddition">
                <button className="Workout-btn" onClick={addToWorkout}>
                <img
                    src={exercise.url} // Use the exercise's URL as the button image
                    alt={`Add ${exercise.name} to Workout`}
                    className="button-icon"
                />
                    <div className="workout-description">
                        <h3>{exercise.name}</h3>
                        <p>{exercise.info}</p>
                    </div>
                </button>
                

            </div>

        </div>
        

    </div>

}
export default Exercise