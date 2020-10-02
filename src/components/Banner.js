import React from 'react'
import './ui/Banner.css'
import { useStateValue } from './context/StateProvider'


const Banner = ({ image, text }) => {
    const [{ articles }, dispatch] = useStateValue();
    const featuredPost = []
    articles.map((post, index) => {
        index===0 && featuredPost.push(post)
    })
    return (
        <>
            {featuredPost.map(post =>(
                <div class="container card-image display-overlay"  style={{ backgroundImage: `url(${image})` }}>
                <div class="text-white text-center d-flex align-items-center mask rgba-black-light display-overlay">
                    <div class="">
                    <h3 class="py-3 font-weight-bold">
                    <h1 className="h1-responsive font-weight-bold my-5 page__title welcome-text text-left">
                        {text}
                    </h1>
                    </h3>
                    </div>
                </div>
              </div> 
            ))}
        </>
        
    )
}

export default Banner
