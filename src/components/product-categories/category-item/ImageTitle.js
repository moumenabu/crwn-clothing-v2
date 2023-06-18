

function ImageTitle(props) {
    return(
        <div className="category-body-container">
            <h2>{props.title}</h2>
            <p>{props.callToAction}</p>
        </div>
    )
}

export default ImageTitle;