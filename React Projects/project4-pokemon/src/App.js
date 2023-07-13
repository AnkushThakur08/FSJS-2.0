import { useState } from "react";
import "./App.scss";

function App() {
    const [pokemonQuery, setPokemonQuery] = useState("");
    const [pokemon, setPokemon] = useState([]);

    const [show, setShow] = useState(false);

    const { name, sprites, weight, stats} = pokemon;

    function handleChange(event) {
        setPokemonQuery(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonQuery.toLowerCase()}`
        );

        const data = await response.json();
        setPokemon(data);
        console.log(data);
        
        setShow(true);
        setPokemonQuery("");
    };

    return (
        <div className="App">
            
            <form className="search-pokemon" onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleChange}
                    value={pokemonQuery}
                    placeholder = "Search Your Pokemon"
                />
                <button type="submit">Search</button>
            </form>
            {show && (
                <div className="pokemon">
                    <div className="pokemon-stats">
                      <h2 className="pokemon-name">{name.toUpperCase()}</h2>
                      <p>HP : {stats[0].base_stat}</p>
                    </div>
                    
                    <img className="pokemon-img" src={sprites.other["official-artwork"].front_default} alt={name} />
                    <div className="stats">
                      <p>{`${stats[1].stat.name.toUpperCase()} : ${stats[1].base_stat}`}</p>
                      <p>{`${stats[3].stat.name.toUpperCase()} : ${stats[3].base_stat}`}</p>
                      <p>{`${stats[2].stat.name.toUpperCase()} : ${stats[2].base_stat}`}</p>
                      <p>{`${stats[4].stat.name.toUpperCase()} : ${stats[4].base_stat}`}</p>
                      <p>{`${stats[5].stat.name.toUpperCase()} : ${stats[5].base_stat}`}</p>
                      <p className="pokemon-weight">WEIGHT : {weight}</p>
                    </div>

                </div>
            )}
        </div>
    );
}

export default App;
