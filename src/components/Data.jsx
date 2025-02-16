import ReactMarkDown from "react-markdown";
export default function Data(props){ 
return(
    <data>
        <ReactMarkDown>
            {props.recipeData}
        </ReactMarkDown>
    </data>
)
}