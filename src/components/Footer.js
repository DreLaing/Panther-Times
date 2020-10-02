import React from 'react'
import './ui/Footer.css'

const Footer = () => {
    return (      
        <footer class="page-footer font-small darken-3">
        {/* <!-- Footer --> */}
        {/* <!-- Footer Elements --> */}
        <div class="container container-footer">
        
            {/* <!-- Grid row--> */}
            <div class="row">
            <div className='logo-container'>
                <img className='footer-image' src={require('../images/panther-logo.jpeg')}/>
                <strong className="white-text header__brand footer__text">Panther Times</strong>
            </div>
            
            {/* <!-- Grid column --> */}
            <div class="col-md-12 py-5">
                <div class="mb-5 flex-center">

                {/* <!-- Facebook --> */}
                <a class="fb-ic">
                    <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                {/* <!-- Twitter --> */}
                <a class="tw-ic">
                    <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                <a class="ins-ic">
                    <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                </div>
            </div>
            {/* <!-- Grid column --> */}

            </div>
            {/* <!-- Grid row--> */}

        </div>
        {/* <!-- Footer Elements --> */}
        </footer>

    )
}

export default Footer
