import React from 'react';
import './display.css'

const imageList = props => {
    const images = props.images.map((image) => {
        return <img alt={image.description} key={image.id} src={image.urls.regular}></img>
    });
    return <div className="image-list">{images}</div>
}

export default imageList;