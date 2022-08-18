import React from 'react'
import Icons from '../components/About/Icons'

const About = () => {
  return (
    <div className="container pt-5 bg-secondary">
        <div className='text-white'>
            <h2>About Me</h2>
            <div class="row">
                <div class="col align-self-center">
                    Gabriel ifoga is a passionate and goal driven <br />
                    Techpreneur whose interest is in using technology to <br />
                    build solutions to  solve real world problems. <br />
                    <Icons />
                </div>
            </div>
        </div>

        <br />
        <div class="accordion" id="accordionExample">
            <div class="card">
                <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Educational experience
                        </button>
                    </h5>
                </div>

                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div class="card-body text-left">
                        <strong>School Name:</strong>  Tai Solarin University of Education <br />
                        <strong>Title of Study:</strong>  Computer Science <br />
                        <strong>Date of Study:</strong>  2014 - 2018
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Practical experience
                        </button>
                    </h5>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div class="card-body">
                        Working as a freelancer
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Skills
                        </button>
                    </h5>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div class="card-body text-left">
                        <ul>
                            <li>PHP</li>
                            <li>Laravel</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>HTML/CSS</li>
                            <li>Linux</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About