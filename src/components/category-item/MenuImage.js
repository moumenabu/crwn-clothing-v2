import './category.scss';
import ImageTitle from "./ImageTitle";

function MenuImage(props){
    const {title, imageUrl} = props.category;
    return(
        <div className="category-container">
            <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
            <ImageTitle title={title} callToAction={props.c2a}/>
        </div>
    )
}

export default MenuImage;