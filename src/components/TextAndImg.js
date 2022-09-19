import React from 'react';


const TextAndImg = () => {
    const text = "Картинка";

    return (
        <div>
            <p>{text}</p>
            <img src='../../public/photo/img.jpg' alt="img"/>
        </div>
    );
};

export default TextAndImg;
