import Ingredients from "../ingredients/ingredients.component";
import Instructions from "../instructions/instructions.component";

function Meal({meal}) {
    const { strMeal, strInstructions, strMealThumb } = meal;

    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];

        if (ingredient && measure) {
            ingredients.push(`${ingredient} - ${measure}`);
        }
    }

    return (
        <div>
            <h1 className="meal-name">{strMeal}</h1>
            <img className="meal-img" src={strMealThumb} alt={strMeal} />
            <Ingredients ingredients={ingredients} />
            <Instructions instructions={strInstructions} />
        </div>
    );
}

export default Meal;
