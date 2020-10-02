import React from 'react'
import { useParams } from 'react-router-dom'
import { useStateValue } from './context/StateProvider'
import './ui/SearchedArticles.css'
import ArticleCard from './ArticleCard'

const SearchedArticles = (props) => {
    const [{ articles }, dispatch] = useStateValue();
    const { title } = useParams();
    // const searchValue = JSON.stringify(params.title)
    const searchValue = title.slice(1)
    console.log(searchValue)

    const searchResults = articles.filter(article =>{
        return article.title.toLowerCase().includes(searchValue.toLocaleLowerCase())
    })
    // console.log(searchResults.length)

    return (
        <div class='container'>
        <h2 className='section__title container w-responsive mx-auto mb-5 text-left font-weight-bold'>
            Search Results for {`"${searchValue}"`}
        </h2>
        {searchResults.length===0 && <h5 class=''>No results found</h5>}
        
        <div class='news-row'>
        {searchResults.map(currentPost => (
            <ArticleCard id={currentPost.id} thumbnail={currentPost.thumbnail} articleType={currentPost.articleType} title={currentPost.title} content={currentPost.content}/>
       
    ))}</div>
    </div>
    )
}

export default SearchedArticles
