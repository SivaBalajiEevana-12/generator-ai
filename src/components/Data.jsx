import ReactMarkDown from "react-markdown";
import "../App.css"
export default function Data(props){ 
return(
    <data className="daata">
        <ReactMarkDown>
            {props.recipeData}
        </ReactMarkDown>
    </data>
)
}