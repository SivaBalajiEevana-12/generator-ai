import { useState } from "react";
import List from "./components/List";
import Data from "./components/Data";
import { getRecipehc } from "./Ai";

export default function Mains(){ 
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
        <form action={handle}>
            <input type="text"
            arail-label="ingredients"
            name="ingredients"
            />
            <button>+Add Ingredient</button>
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
