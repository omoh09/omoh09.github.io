import React from 'react'

function ServiceCard() {
  return (
    <div class="row">
        <div className='col-md-4'>
            <div class="card">
                <div class="card-body">
                <h5 class="card-title">Responsive Web Design</h5>
                <p class="card-text">I Help design Mobile-friendly, worldclass websites that helps scales your bussiness and helps user experience get better.</p>
                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                </div>
            </div>
        </div>
        <div className='col-md-4 mt-md-0 mt-2'>
            <div class="card">
                <div class="card-body">
                <h5 class="card-title">Web Development</h5>
                <p class="card-text">I develop scalable web applcation and software, that stand the test of time. </p>
                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                </div>
            </div>
        </div>
        <div className='col-md-4 mt-md-0 mt-2'>
            <div class="card">
                <div class="card-body">
                <h5 class="card-title">Database Development</h5>
                <p class="card-text">With equipped skills of developing and maintaining databases i could  help develop scalable and optimized databases for your organization..</p>
                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default ServiceCard