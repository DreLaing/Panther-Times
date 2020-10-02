import React from 'react'
import { Link } from 'react-router-dom'
import './ui/ArticleCard.css'

const ArticleCard = (props) => {
    return (
        <div class='post desktop-view' /*onClick={fetchArticle}*/>
                <div class="single-news mb-4">
                    <Link to={`/:${props.id}`}>
                        <div>
                            <div class="row">

                                {/* <!-- Grid column --> */}
                                <div class="col-md-5">

                                {/* <!--Image--> */}
                                <div class="view overlay rounded z-depth-1 mb-4">
                                    <img class="img img-fluid" src={props.thumbnail} alt="Sample image"/>
                                    <a>
                                    <div class="mask rgba-white-slight"></div>
                                    </a>
                                </div>

                            </div>
                            {/* <!-- Grid column --> */}

                                {/* <!-- Grid column --> */}


                                <div class="col-md-6 card-text">
                                    {/* TO RENDER DIFFERENT COLORS BESIDE EACH NEWS TYPE */}
                                <div className={props.articleType==='General News' && 'article-type'} style={{display: `${props.articleType!=='General News'? 'none': ''}`}}>
                                     {props.articleType}</div>
                                <div className={props.articleType==='Sports'? 'sports article-type': 'article-type'} style={{display: `${props.articleType!=='Sports'? 'none': ''}`}}>
                                     {props.articleType}</div>
                                <div className={props.articleType==='Business'? 'business article-type': 'article-type'} style={{display: `${props.articleType!=='Business'? 'none': ''}`}}>
                                {props.articleType}</div>
                                <div className={props.articleType==='Lifestyle'? 'lifestyle article-type': 'article-type'} style={{display: `${props.articleType!=='Lifestyle'? 'none': ''}`}}>
                                        {props.articleType}</div>
                                    {/* TO RENDER DIFFERENT COLORS BESIDE EACH NEWS TYPE */}


                                {/* <!-- Excerpt --> */}
                                <p class="font-weight-bold dark-grey-text">{props.title}</p>
                                <div class="d-flex justify-content-between">
                                    <div class="col-11 text-truncate pl-0 mb-3 card-summary">
                                    <p class="dark-grey-text card-summary">{props.content}</p>
                                    </div>
                                    <a><i class="fas fa-angle-double-right arrow-icon"></i></a>
                                </div>
                            </div>
                            {/* <!-- Grid column --> */}

                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ArticleCard
