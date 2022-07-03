import { Detailed } from "./Detailed";
import { useParams } from 'react-router-dom';

export function Cocktail(props) {

    const params = useParams();

    console.log(props);

    const {
        strCategory,
        strDrink,
        strDrinkThumb
    } = props.cocktailData;

    return (
        <div className="cocktail-info">
            {props.cocktailData
                ? <><h2>{strDrink}</h2>
                    <p>Category: {strCategory}</p>
                    {/* <p>{strAlcoholic}</p> */}

                    <div className="drink_image">
                        <img width={200} height={200} src={strDrinkThumb} alt="Drink thumb"></img>
                    </div>
                    <button onClick={props.setSelectedDrink(props.selectedDrink)}>More info</button>
                    {strDrink === props.cocktailData.strDrink
                        ? <Detailed data={props.cocktailData} />
                        : ''
                    }
                </>
                : <></>

            }
        </div>

    )
}
