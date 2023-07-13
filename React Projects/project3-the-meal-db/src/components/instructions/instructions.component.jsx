function Instructions({instructions}){
    return (
        <div className="instructions">
                <h2>Instructions To Cook</h2>
                <hr />

                <ol>
                    {instructions.split(".").map((instruction) => {
                        return instruction ? <li>{instruction}</li> : null;
                    })}
                </ol>
            </div>
    )
}


export default Instructions;