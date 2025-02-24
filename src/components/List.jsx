import "../App.css"
export default function List(props){
    const sty={
        color:"black",
        height: "40px",
        width: "200px",
        fontSize: "20px",
      }
    const ingredientsItems=props.ingredients.map((ingredient,index)=>(
        <li key={index}>{ingredient}</li>
    ))
    return(
        <list>
        {/* {ingredientsItems.length>0 && <ul>{ingredientsItems}</ul>} */}
        <section className="ingredients-section">
            <h2>{props.title==='chef Claude'?'Ingredients on hand':'Program is'}</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientsItems}</ul>
            {props.ingredients.length > 0 && <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button style={sty} onClick={props.getRecipe}>Get a recipe</button>
            </div>}
        </section>
        </list>
    )
}