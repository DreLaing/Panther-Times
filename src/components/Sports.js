import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from './context/StateProvider'
import Banner from './Banner'
import BannerImg from '.././images/sports-banner.jpg'

const Sports = () => {
    const [{ articles }, dispatch] = useStateValue();
    const sportsArticles = []
    articles.map(article => {
        article.articleType==='Sports' && sportsArticles.push(article)
    })
    return (
        <div class='container'>
            <h2 className='section__title container w-responsive mx-auto mb-5 text-left font-weight-bold'>
                LATEST NEWS
            </h2>
            {sportsArticles.map((article, index) =>(
            index===0 && <Link to={`/:${article.id}`}><Banner image={article.thumbnail} text={article.title}/></Link>
        ))}
            <h2 className='section__title container w-responsive mx-auto mb-5 text-left font-weight-bold'>
                SPORTS NEWS
            </h2>
            <div class='news-row'>
            {sportsArticles.map(currentPost => (
            <>
            <div class='post'>
            <div class="single-news mb-4">
            <Link to={`/:${currentPost.id}`}>
            <div><div class="row ">

            {/* <!-- Grid column --> */}
            <div class="col-md-5">

            {/* <!--Image--> */}
            <div class="view overlay rounded z-depth-1 mb-4">
                <img class="img img-fluid" src={currentPost.thumbnail} alt="Sample image"/>
                <a>
                <div class="mask rgba-white-slight"></div>
                </a>
            </div>

        </div>
        {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div class="col-md-6 card-text">

            {/* <!-- Excerpt --> */}
            <p class="font-weight-bold dark-grey-text">{currentPost.title}</p>
            {/* <div className='date dark-grey-text'>{currentPost.datePosted}</div> */}
            <div class="d-flex justify-content-between">
                <div class="col-11 text-truncate pl-0 mb-3">
                <p class="dark-grey-text">{currentPost.content}</p>
                </div>
                <a><i class="fas fa-angle-double-right"></i></a>
            </div>
            {/* <div className='date dark-grey-text'>{currentPost.datePosted}</div> */}

            </div>
            {/* <!-- Grid column --> */}

        </div>
        </div>
        </Link></div></div>
            </>        
        ))}</div>
        </div>
    )
}

export default Sports
