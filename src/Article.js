import React from 'react'
import './Article.css'

const Article = (props) => {
    return (
        <div className="Article">
            <div className="Article-image">
                { props.children }
            </div>
            <div className="Article-desc">
                <p><b>{ props.title }</b><br />
                { props.author }<br />
                { props.notes }</p>
            </div>
        </div>
    );
}

export default Article;
