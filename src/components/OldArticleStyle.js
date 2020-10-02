import React from 'react'

const OldArticleStyle = () => {
  return (

      <div class="col-lg-6 col-md-12 mb-4">

{/* <!-- Small news --> */}
<div class="single-news mb-4">

  {/* <!-- Grid row --> */}
  <div class="row">

    {/* <!-- Grid column --> */}
    <div class="col-md-3">

      {/* <!--Image--> */}
      <div class="view overlay rounded z-depth-1 mb-4">
        <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(29).jpg" alt="Sample image"/>
        <a>
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>

    </div>
    {/* <!-- Grid column --> */}

    {/* <!-- Grid column --> */}
    <div class="col-md-9">

      {/* <!-- Excerpt --> */}
      <p class="font-weight-bold dark-grey-text">26/02/2018</p>
      <div class="d-flex justify-content-between">
        <div class="col-11 text-truncate pl-0 mb-3">
          <a href="#!" class="dark-grey-text">At vero eos et accusamus et iusto odio dignissimos
            ducimus qui blanditiis</a>
        </div>
        <a><i class="fas fa-angle-double-right"></i></a>
      </div>

    </div>
    {/* <!-- Grid column --> */}

  </div>
  {/* <!-- Grid row --> */}

</div>
</div>

  )
}

export default OldArticleStyle
