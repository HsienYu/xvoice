import React from 'react';

const GifItem = (image) => {
    return (
        <div className="gif-item">
            <img src={image.gif.images.downsized.url} alt="gif" />
        </div>
    )
};

export default GifItem;