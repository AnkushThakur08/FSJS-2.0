import { useState } from "react";

import Meal from "./components/meal/meal.component";

import "./App.css";

function App() {
    const [mealQuery, setMealQuery] = useState("");
    const [meals, setMeals] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealQuery}`
        );

        const data = await response.json();

        console.log(data);
        setMeals(data.meals);
        setMealQuery("");
    };

    function handleMeal(event) {
        const val = event.target.value;

        setMealQuery(val);
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input className="search-box" type="text" onChange={handleMeal} value={mealQuery} placeholder="Search A Meal" />
                <button className="search-button" type="submit">Search Meal</button>
            </form>

            {meals.map((meal) => <Meal key={meal.idMeal} meal={meal} />)}

            <div></div>
        </div>
    );
}

export default App;
