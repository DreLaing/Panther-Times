import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from './context/StateProvider'
import Banner from './Banner'
import ArticleCard from './ArticleCard'
import BannerImg from '.././images/business-banner.jpg'

const Business = () => {
    const [{ articles }, dispatch] = useStateValue();
    const businessArticles = []
    articles.map(article => {
        article.articleType==='Business' && businessArticles.push(article)
    })
    return (
        <div class='container'>
            <h2 className='section__title container w-responsive mx-auto mb-5 text-left font-weight-bold'>
                LATEST NEWS
            </h2>
            {businessArticles.map((article, index) =>(
            index===0 && <Link to={`/:${article.id}`}><Banner image={article.thumbnail} text={article.title}/></Link>
        ))}
            <h2 className='section__title container w-responsive mx-auto mb-5 text-left font-weight-bold'>
                BUSINESS NEWS
            </h2>
            <div class='news-row'>
            {businessArticles.map(currentPost => (
            <ArticleCard id={currentPost.id} thumbnail={currentPost.thumbnail} articleType={currentPost.articleType} title={currentPost.title} content={currentPost.content}/>      
        ))}</div>
        </div>
    )
}

export default Business
