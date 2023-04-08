import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css";

export function GalleryNavigation({galleries}) {
    console.log(galleries)
    return (
        <nav> 
            <ul> 
                {galleries.map((record) => (<li><NavLink to={`/galleries/${record.id}`}>{record.name}</NavLink></li>))}
            </ul>
        </nav>
        )
}