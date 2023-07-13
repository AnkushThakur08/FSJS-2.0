function Ingredients({ingredients}) {
    return (
        <div className="ingredients">
            <h2>Ingredients</h2>
            <hr />

            {ingredients.map((ingredient) => {
                return (
                    <p>
                        <input type="checkbox" /> {ingredient}
                    </p>
                );
            })}
        </div>
    );
}

export default Ingredients;
