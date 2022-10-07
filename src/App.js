import { useEffect, useState } from 'react';
import Pokedex from './img/pokedex.png';

function App() {
    
    const [pokemon, setPokemon] = useState({
        id     : 0,
        nom    : '',
        sprite : '',
        skills : {},
        poids  : 0,
        type   : '',
        taille : 0
    });
    const [index, setIndex] = useState(1);
    
    const getPokemon = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
        const data = await res.json();
        setPokemon({
            id      : data[ 'id' ],
            nom     : data[ 'name' ],
            sprite  : data[ 'sprites' ][ 'front_default' ],
            sprite2 : data[ 'sprites' ][ 'back_default' ],
            skills  : {
                'skill1' : data[ 'abilities' ][ 0 ][ 'ability' ][ 'name' ],
                'skill2' : data[ 'abilities' ][ 1 ][ 'ability' ][ 'name' ],
                'skill3' : '',
                'skill4' : '',
            },
            poids   : data[ 'weight' ],
            type    : data[ 'types' ][ 0 ][ 'type' ][ 'name' ],
            taille  : data[ 'height' ]
        });
    };
    
    useEffect(() => {
        getPokemon();
    }, [index]);
    
    console.log(pokemon);
    
    return (
        <>
            <div
                style = {{
                    width    : '900px',
                    margin   : '0 auto',
                    position : 'relative'
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
                        <h2>{pokemon[ 'nom' ]}</h2>
                        <h3>{pokemon[ 'type' ]}</h3>
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
                    <h2 style = {{ marginTop : '40px' }}>ID : #{pokemon[ 'id' ]}</h2>
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
                    <h4 style = {{ position : 'absolute', top : - 10 }}>
                        Taille : {pokemon[ 'taille' ]}{' '}cm
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
            <button onClick={() => setIndex(index + 1)}>+</button>
            <button onClick={() => setIndex(index - 1)}>-</button>
        </>
    );
}

export default App;
