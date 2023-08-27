import React from 'react'
import { Link } from 'react-router-dom';
import styles from './PokemonListItem.module.css';
import { useQuery } from 'react-query';
 
 
const PokemonListItem = ({name}:any) => {
// console.log(object);
 
    const { data, isLoading, isSuccess } = useQuery(['pokemon-sprites',name], async () => {
        // Updated API call
        return await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((resp) => resp.json())
    },
        { staleTime: 600_000 }
    )
    return (
        <>
            {!isLoading && isSuccess&&
            <Link to={`/details/${name}`} className={styles["item-container"]}>
                <div>
                    <img src={data.sprites.front_default} alt="" width="96" height="96" />
                </div>
                <div className={styles["item-content"]}>
                    <div>
                        <strong>{name}</strong>
                    </div>
                    <div>Types: {data.types.map((t: any) => t.type.name).join(", ")}</div>
                </div>
            </Link>
            }
        </>
    )
}
 
export default PokemonListItem;