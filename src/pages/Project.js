import React from 'react'
import styled from 'styled-components'
// import Gallery from 'react-grid-gallery';
import qrate from '../components/assets/project/qrate.png'
import admin from '../components/assets/project/admin.png'
import fanfaro from '../components/assets/project/fanfaro.png'
import cyberhygiene from '../components/assets/project/cyberhygiene.png'
import foodapp from '../components/assets/project/foodapp.png'
import zuri from '../components/assets/project/zuri.png'

const JSXContainer = styled.div`


.grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
        gap: 10px;
        background-color: #2196F3;
        padding: 10px;
      }
      
      .grid-container > div {
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
      }
      
      .item1 {
        grid-row-start: 1;
        grid-row-end: 3;
        text-align:left;
      }
      .item-inner {
        text-align:left;
      }
      
      .item2 {
        grid-column: 2 / span 2;
      }
      
      .item4 {
        grid-: 2 / span 2;
      }
      

  .grid-container > div {
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
      }
      
      .item1 {
        grid-row-start: 1;
        grid-row-end: 3;
        width:400px;
      }
      
      .item2 {
        grid-column: 2 / span 2;
      }
      
      .item4 {
        grid-: 2 / span 2;
      }
      

.middle {
        transition: .5s ease;
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%)
        }
   

  .project_container {
    display: grid;
    grid-template-columns: 5em 100px 30%;
    grid-template-rows: 200px auto;
    gap: 10px;
    background-color: var(--color-stroke);
    padding: 1em;
    max-width: 30rem;
  }
`

const Project = () => {
  return (
//       <JSXContainer>
//                 <div class="item1"><img src={qrate} alt='qrate nlogo' /></div>
//                 <div class="item2"><img src={fanfaro} alt='qrate nlogo' /></div>
//                 <div class="item3">3</div>  
//                 <div class="item4">4</div>
//                 <div class="item5">5</div>
//                 <div class="item6">6</div>
//                 <div class="item7">7</div>
//       </JSXContainer>
        <JSXContainer>
                <div class="container">
                <div class="card-deck">
                        <div class="card">
                        <img class="card-img-top" src="..." alt="Card image cap" />
                        <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                        </div>
                        <div class="card">
                        <img class="card-img-top" src="..." alt="Card image cap" />
                        <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                        </div>
                        <div class="card">
                        <img class="card-img-top" src="..." alt="Card image cap" />
                        <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                        </div>
                        </div>
                        </div>
        </JSXContainer>
    )
}

export default Project