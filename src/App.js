import { useEffect, useState } from 'react';
import Pokedex from './img/pokedex.png';

function App() {
    
    const [pokemon, setPokemon] = useState({
        id          : 0,
        nom         : '',
        sprite      : '',
        skills      : {},
        poids       : 0,
        type        : '',
        taille      : 0,
        description : ''
    });
    const [index, setIndex] = useState(392);
    
    const getPokemon = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
        const data = await res.json();
        
        const res2 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${index}/`);
        const data2 = await res2.json();
        
        setPokemon({
            id          : data[ 'id' ],
            nom         : data[ 'name' ],
            sprite      : data[ 'sprites' ][ 'front_default' ],
            sprite2     : data[ 'sprites' ][ 'back_default' ],
            skills      : {
                'skill1' : data[ 'abilities' ][ 0 ][ 'ability' ][ 'name' ],
                'skill2' : data[ 'abilities' ][ 1 ][ 'ability' ][ 'name' ],
                'skill3' : '',
                'skill4' : '',
            },
            poids       : data[ 'weight' ],
            type        : data[ 'types' ][ 0 ][ 'type' ][ 'name' ],
            taille      : data[ 'height' ],
            description : data2[ 'flavor_text_entries' ][ 0 ][ 'flavor_text' ]
        });
    };
    
    useEffect(() => {
        getPokemon();
    }, [index]);
    
    //console.log(pokemon);
    
    return (
        <>
            <h1>Pokédex</h1>
            <h4>Cliquer sur les flèches</h4>
            <div
                style = {{
                    width     : '900px',
                    margin    : '0 auto',
                    position  : 'absolute',
                    top       : '50%',
                    left      : '50%',
                    transform : 'translate(-50%, -50%)'
                }}
            >
                <img
                    src = {Pokedex}
                    alt = "pokedex"
                    width = "790px"
                />
                
                <div
                    style = {{
                        width  : '325px',
                        height : '330px',
                        //backgroundColor: 'purple',
                        position       : 'absolute',
                        top            : 90,
                        marginLeft     : '30px',
                        display        : 'flex',
                        justifyContent : 'center',
                        alignItems     : 'center'
                    }}
                >
                    <img src = {pokemon[ 'sprite' ]} alt = "pokemon" width = "210px"
                         style = {{ display : 'block', marginLeft : '20px' }} />
                    <img src = {pokemon[ 'sprite2' ]} alt = "pokemon" width = "210px"
                         style = {{ display : 'block', marginRight : '20px' }} />
                </div>
                <div
                    style = {{
                        position : 'absolute',
                        width    : '295px',
                        height   : '308px',
                        //backgroundColor: 'yellow',
                        right : 146,
                        top   : 157,
                    }}
                >
                    <div
                        style = {{
                            padding : '5px 25px'
                        }}
                    >
                        <h2 className = "titre">{pokemon[ 'nom' ]}</h2>
                        <h3 className = "titre">{pokemon[ 'type' ]}</h3>
                        <h4>{pokemon.description}</h4>
                    </div>
                </div>
                
                {/* ID */}
                <div
                    style = {{
                        position : 'absolute',
                        width    : '130px',
                        height   : '60px',
                        //backgroundColor: 'teal',
                        bottom         : 55,
                        left           : 92,
                        display        : 'flex',
                        justifyContent : 'center',
                        alignItems     : 'center'
                    }}
                >
                    <h2 style = {{ marginTop : '40px' }} className = "text-petit">ID : #{pokemon[ 'id' ]}</h2>
                </div>
                
                <div style = {{
                    position : 'absolute',
                    top      : '450px',
                    left     : '320px'
                }}>
                    <button
                        onClick = {() => setIndex(index + 1)}
                        style = {{
                            backgroundColor : '#262626',
                            width           : '30px',
                            outline         : 'none',
                            border          : 'none',
                            color           : 'white',
                            fontWeight      : 800,
                            cursor          : 'pointer'
                        }}
                    >
                        +
                    </button>
                
                </div>
                
                <div style = {{
                    position : 'absolute',
                    top      : '450px',
                    left     : '260px'
                }}>
                    <button
                        onClick = {() => setIndex(index - 1)}
                        style = {{
                            backgroundColor : '#262626',
                            width           : '30px',
                            outline         : 'none',
                            border          : 'none',
                            color           : 'white',
                            fontWeight      : 800,
                            cursor          : 'pointer'
                        }}
                    >
                        -
                    </button>
                </div>
                
                {/* Taille */}
                <div
                    style = {{
                        width  : '113px',
                        height : '41px',
                        //backgroundColor: 'purple',
                        position : 'absolute',
                        right    : 313,
                        bottom   : 54,
                    }}
                >
                    <h4 style = {{ position : 'absolute', top : - 10 }} className = "text-tres-petit">
                        Taille : {pokemon[ 'taille' ]}{' '}ft
                    </h4>
                </div>
                
                {/*  Poids  */}
                <div
                    style = {{
                        width  : '113px',
                        height : '41px',
                        //backgroundColor: 'purple',
                        position : 'absolute',
                        right    : 169,
                        bottom   : 54,
                    }}
                >
                    <h4 style = {{ position : 'absolute', top : - 10 }}>
                        Poids : {pokemon[ 'poids' ]}{' '}kg
                    </h4>
                </div>
            </div>
        </>
    );
}

export default App;
