import React, { useState } from "react";
import { useStateValue } from './context/StateProvider';
import { Link } from 'react-router-dom';
import './ui/RecentArticles.css'
import Pagination from './Pagination'
import TopArticles from './TopArticles'
import Banner from './Banner'
import ArticleCard from './ArticleCard'
import BannerImg from '.././images/138-background2.jpg'



const RecentArticles = () => {
    const [{ articles }, dispatch] = useStateValue();
    const [posts, setPosts] = useState([])
    const [currentPage, setPage] = useState(1);
    const [postsPerPage, setNumberOfPosts] = useState(10)
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost)
    const [color, setColor] = useState()
    

    const paginate = (number) => setPage(number);
    const previousPage = () => {
        if (currentPage >1) {
            setPage(currentPage => currentPage-1)
        }
        else{
            return false
        }
    }
    const nextPage = () => {
        if (currentPage < (Math.ceil(articles.length/postsPerPage))) {
            setPage(currentPage+1)
        }
        else{
            return false
        }
    }
    
return (
    <>
    <div className='container'>
        <h2 className='section__title container w-responsive mx-auto mb-5 text-left font-weight-bold'>
            LATEST NEWS
        </h2>
        {articles.map((article, index) =>(
            index===0 && <Link className='featured-article' to={`/:${article.id}`}><Banner image={article.thumbnail} text={article.title}/></Link>
        ))}
        {currentPage===1 && <><TopArticles /></>}

        <h2 className='section__title container w-responsive mx-auto mb-5 text-left font-weight-bold'>
            ALL NEWS
        </h2>

        <div class='news-row'>
        {currentPosts.map(currentPost => (       
        <ArticleCard color={color} id={currentPost.id} thumbnail={currentPost.thumbnail} articleType={currentPost.articleType} title={currentPost.title} content={currentPost.content}/> 
        ))}</div>

        <Pagination className='pagination container' previousPage={previousPage} nextPage={nextPage} postsPerPage={postsPerPage} totalPosts={articles.length} paginate={paginate}/>
   
        




</div>
</>

);
}

export default RecentArticles;