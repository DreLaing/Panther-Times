import React from 'react'
import TextField from '@material-ui/core/TextField';
import './ui/WriteForUs.css'

const WriteForUs = () => {
    return (
        <div class="container my-5">

            {/* <!-- Section --> */}
            <section>

                <h6 class="font-weight-bold text-center  text-uppercase small mb-4">Panther News</h6>
                <h3 class="font-weight-normal text-center  pb-2 display-4"><strong>Write For Us</strong></h3>
                <hr class="w-header my-4"/>
                <p class="lead text-center  pt-2 mb-5">Join our team of writers</p>
                    
                {/* <!--First row--> */}
                <div class="row d-flex justify-content-center">

                {/* <!--First column--> */}
                <div class="col-6">

                    {/* <!-- Material outline input --> */}
                    <div class="md-form md-outline form-lg">
                    <input type="text" placeholder='Name' id="form1" class="form-control form-control-lg"/>
                    {/* <TextField type="text" id="form1" class="form-control form-control-lg" label='Name'></TextField> */}
                    {/* <label for="form1">Name</label> */}
                    </div>
                    
                    {/* <!-- Material outline input --> */}
                    <div class="md-form md-outline form-lg">
                    <input type="text" placeholder='Email' id="form2" class="form-control form-control-lg"/>
                    {/* <label for="form2">Email</label> */}
                    </div>
                    <div class="md-form md-outline form-lg">
                    <textarea type="text" placeholder='Why?' id="form2" class="form-control form-control-lg"/>
                    {/* <label for="form2">Email</label> */}
                    </div>
 
                    
                    <button class="btn btn-block btn-lg">Sign up</button>

                </div>
                {/* <!--First column--> */}

                </div>
                {/* <!--First row--> */}

            </section>
            {/* <!-- Section --> */}

            </div>  
    
    )
}

export default WriteForUs
