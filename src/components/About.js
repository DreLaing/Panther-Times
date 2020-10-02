import React from 'react'
import './ui/About.css'

const About = () => {
    return (
        <>
        <div class="container mt-5">

        {/* <!--Section: Content--> */}
        <section class="mx-md-5 dark-grey-text">


            {/* <!-- Grid row --> */}
        <div class="row">
        
            {/* <!-- Grid column --> */}
            <div class="col-md-12">

            {/* <!-- Card --> */}
            <div class="card-cascade wider reverse">

                {/* <!-- Card image --> */}
                <div class="view view-cascade overlay">
                <img class="card-img-top" src={require('../images/138-background2.jpg')} alt="Sample image"/>
                </div>


            </div>
            {/* <!-- Card --> */}

            {/* <!-- Excerpt --> */}
            <div class="mt-5">

                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui praesentium voluptatum deleniti atque
                corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
                sunt in culpa nemo enim ipsam voluptatem quia voluptas sit qui officia deserunt mollitia animi, id
                est laborum et dolorum fuga quidem rerum facilis est distinctio.
                </p>
                <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
                maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Quis autem vel
                eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Temporibus
                autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates
                repudiandae sint et molestiae non recusandae itaque earum rerum.</p>

            </div>

            </div>
            {/* <!-- Grid column --> */}

        </div>
        {/* <!-- Grid row --> */}

        <hr class="mb-5 mt-4"/>

        </section>
        {/* <!--Section: Content--> */}


        </div>



        {/* <!-- Team --> */}
        <div class="container mt-5">


        {/* <!--Section: Content--> */}
        <section class="text-center dark-grey-text">

        {/* <!-- Section heading --> */}
        <h3 class="font-weight-bold mb-4 pb-2">Our Team</h3>
        {/* <!-- Section description --> */}
        <p class="text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam
            eum porro a pariatur veniam.</p>

            {/* <!-- Grid row --> */}
        <div class="row">

            

            {/* <!--Grid column--> */}
            <div class="col-lg-4 col-md-6 mb-4">
            {/* <!--Ca</div>rd--> */}
            <div class="team-card testimonial-card">
                {/* <!--Background color--> */}
                <div class="card-up indigo"></div>
                {/* <!--Avatar--> */}
                <div class="avatar mx-auto white">
                <img src={require('../images/Toya.jpeg')} class=" img-fluid"/>
                </div>
                <div class="card-body">
                {/* <!--Name--> */}
                <h4 class="font-weight-bold mb-4">Latoya Walker</h4>
                <hr/>
                {/* <!--Quotation--> */}
                <p class="dark-grey-text mt-4">George Alleyne Hall Secretary</p>
                </div>
            </div>
            {/* <!--Card--> */}
            </div>
            {/* <!--Grid column--> */}

        </div>
        {/* <!-- Grid row --> */}

        </section>
        {/* <!--Section: Content--> */}


        </div>    
</>
    )
}

export default About
