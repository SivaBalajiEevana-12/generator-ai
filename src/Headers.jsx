import './index.css';
import chefclaude from './download.png'
export default function Header({title,loading}){
    return(
        <div className="header">
        <h1>{title}</h1>
        <img src={chefclaude} alt="imagesssss"/>
        <p>
            {loading?"Loading...":`Ready to ${title}?`}
        </p>
        </div>
    )
}