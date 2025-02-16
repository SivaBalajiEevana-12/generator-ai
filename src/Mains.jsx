import { useState } from "react";
import List from "./components/List";
import Data from "./components/Data";
import { getRecipehc } from "./Ai";
import "./Mains.css";

export default function Mains(){ 
    const sty1={
        marginTop:"50px",
        color:"black",
        height: "40px",
        width: "300px",
        fontSize: "20px",
        marginRight:"50px",
        marginBottom:"50px"
      }
    const sty2={
        marginTop:"50px",
        color:"black",
        height: "40px",
        width: "200px",
        fontSize: "20px",
        marginRight:"50px",
        marginBottom:"50px",
        backgroundColor:"orange"
      }
    const [ingredients, setIngredients] = useState([]);
    const [Reciepe, setReciepe] = useState(true);
    const [recipeData, setRecipeData] = useState("");
    function handle(formdata){
        // console.log(ingredients);
        const Ingredient=formdata.get("ingredients");
        setIngredients(prevIngredients =>[...prevIngredients,Ingredient]);
        console.log(ingredients.length);
    }
    function toggleRecipeShown(){
        setReciepe(prevRecipe => !prevRecipe);
    }

    async function getRecipe() {
        console.log("hello");
        try {
            const reci = await getRecipehc(ingredients);
            setRecipeData(reci);
            console.log(reci);
        } catch (error) {
            console.error(error);
        }
    
    }
    return(
        <main>
        <form action={handle} className="ingredients-form">
            <input type="text"
            arail-label="ingredients"
            name="ingredients"
            style={sty1}/>
            <button style={sty2}>+Add Ingredient</button>
        </form>

        {ingredients.length > 0 && <List
         ingredients={ingredients} 
         toggleRecipeShown={toggleRecipeShown}
         getRecipe={getRecipe}
         />
         }
        {Reciepe && <Data recipeData={recipeData}/>}
        </main>
    )
  }
