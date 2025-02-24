import { useState } from "react";
import List from "./components/List";
import Data from "./components/Data";
import { getRecipehc } from "./Ai";
import "./Mains.css";

export default function Mains({title,setTitle, loading, setLoading}) { 
    // const sty1={}
    const sty2={}
    const sty1={
        marginTop:"50px",
        color:"black",
        height: "40px",
        width: "80%",
        fontSize: "20px",
        marginRight:"50px",
        marginBottom:"50px"
      }
    // const sty2={
    //     marginTop:"50px",
    //     color:"black",
    //     height: "40px",
    //     width: "200px",
    //     fontSize: "20px",
    //     marginRight:"50px",
    //     marginBottom:"50px",
    //     backgroundColor:"orange"
    //   }
      const [prompt,setPrompt]=useState( `
        You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
        `)
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
    const handleChange=(formdata)=>{
        const title1=formdata.get("title");
        setTitle(title1);
        const prompts=formdata.get("prompts");
        setPrompt(prompts);
        setIngredients([]);
        console.log(prompt);
    }
    async function getRecipe() {
        console.log("hello");
        console.log(loading);
        setLoading(true);
        console.log(loading);
        try {
            const reci = await getRecipehc(ingredients,prompt);
            setRecipeData(reci);
            console.log(reci);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
        finally{
        setLoading(false);
        }
    }
    console.log(prompt);
    return(
        <main>
           {title==='program'}?<code>{Reciepe && <Data recipeData={recipeData}/>}</code>:{Reciepe && <Data recipeData={recipeData}/>}
             
        <form action={handle} style={{position:'relative'}}className="ingredients-form">
        <input type="text"
              arial-label="ingredients"
              name="ingredients"
              style={sty1}/>
            <button style={sty2}>+Add Ingredient</button>
            
        </form>

        {/* <form action={handleChange} className="change-form">
           
            <label htmlFor="title">SetTitle</label>
        <input type="text"
        arial-label="title"
        name="title"
        id="title"
        style={sty1}/>
        
        <label htmlFor="prompts">SetPrompt</label>
       
        <textarea
            id="prompts"
            arial-label="prompts"
            name="prompts"
            columns="100"
            rows="5"
            />
            <br/>
            <button style={sty2}> Change prompt</button>
            
        </form> */}
        <form action={handleChange} className="change-form">
    <div className="form-row">
        <label htmlFor="title">SetTitle</label>
        <input type="text" name="title" id="title" aria-label="title" />
    </div>
    
    <div className="form-row">
        <label htmlFor="prompts">SetPrompt</label>
        <textarea id="prompts" name="prompts" aria-label="prompts" rows="5"></textarea>
    </div>

    <button>Change Prompt</button>
</form>


        {ingredients.length > 0 && <List
        title={title}
         ingredients={ingredients} 
         toggleRecipeShown={toggleRecipeShown}
         getRecipe={getRecipe}
         />
         }
       
        </main>
    )
  }
