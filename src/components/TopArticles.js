import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from './context/StateProvider'
import TopArticle from './TopArticle'
import './ui/TopArticles.css'

const TopArticles = () => {
    const [{articles}, dispatch] = useStateValue();
    const recentArticles = []
    articles.map((article, index) =>{
       index > 0 &&  index < 4 && recentArticles.push(article)
    })
    return (
        <div class="container mt-5">
            {/* <!-- Grid row --> */}
            <div class="row top-articles">
            {/* <!-- Grid column --> */} 
            {recentArticles.map(recentArticle =>{ 
                    return <TopArticle id={recentArticle.id} thumbnail={recentArticle.thumbnail} title={recentArticle.title}/>                   
                })}
                </div>
                {/* <!-- Grid row --> */}
        </div>
    )
}

export default TopArticles
