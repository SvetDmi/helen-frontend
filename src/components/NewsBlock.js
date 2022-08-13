import React from 'react';



const NewsBlock = ({ newsblock }) => {
    const { name, time, title, adress, link } = newsblock;
    console.log(name)

    return (
        <a target="_blank" rel="noreferrer" href={link} className="header__newsblock">
            <div className="header__news">
                <h2 className="title">{time}</h2>
                <h3 className="title4">{title}</h3>
                <p className="text text4_news">{adress}</p>
            </div>
        </a>
    )
}

export default NewsBlock;