import React from 'react'
import { Link } from 'react-router-dom'

const TopArticle = (props) => {
    return (
            <div class="col-lg-4 col-md-12 mb-4">
                <Link to={`/:${props.id}`}>

                    {/* <!--News tile --> */}
                    <div class="news-tile view zoom z-depth-1 rounded mb-4">

                        <a href="#!" class="text-white">
                        <img src={props.thumbnail}
                            class="card-img img-fluid rounded-bottom" alt="sample image"/>
                        <div class="mask rgba-black-light">
                            <div class="text-white text-left py-lg-5 py-0 my-0">
                            <div>
                                <h4 class="font-weight-bold pt-2">
                                <strong class="card-title">{props.title}</strong>
                                </h4>
                                <p class="mx-5 clearfix d-none d-md-block"></p>
                            </div>
                            </div>
                        </div>
                        </a>

                    </div>
                    {/* <!--News tile --> */}
                </Link>
            </div>

    )
}

export default TopArticle
