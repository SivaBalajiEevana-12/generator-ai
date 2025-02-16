export default function List(props){
    const ingredientsItems=props.ingredients.map((ingredient,index)=>(
        <li key={index}>{ingredient}</li>
    ))
    return(
        <list>
        {/* {ingredientsItems.length>0 && <ul>{ingredientsItems}</ul>} */}
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientsItems}</ul>
            {props.ingredients.length > 3 && <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button  onClick={props.getRecipe}>Get a recipe</button>
            </div>}
        </section>
        </list>
    )
}