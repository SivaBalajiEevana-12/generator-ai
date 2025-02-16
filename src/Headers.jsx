import './index.css';
import chefclaude from './download.png'
export default function Header(){
    return(
        <div className="header">
        <h1>chef Claude</h1>
        <img src={chefclaude} alt="image"/>
        </div>
    )
}