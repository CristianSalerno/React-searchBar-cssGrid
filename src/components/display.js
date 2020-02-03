import React from 'react';

//COMPONENTS
import ImageCard from './imageCard';

//CSS
import './display.css'

const imageList = props => {
    const images = props.images.map((image) => {
        return (
            <div>
               <ImageCard key={image.id} image={image}  />
            
            </div> 
        )
    });
    return <div className="image-list">{images}</div>
}   

export default imageList;