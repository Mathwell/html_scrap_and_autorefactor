import React, {PureComponent} from 'react'
import {Accordion,Container, Row, Col, Card, Image} from 'react-bootstrap'
import pic from '../../images/logo.svg'

  class About extends PureComponent {
    render() {
      return (
<div id="accordion">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        HTML Refactoring Purpose
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
      This is a helper app that automatise the process of HTML code refactoring to a better complience with MVC design and generic controller logic that treats each form as an instance of the problem and covers the whole set of possible functionalitis.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          How it works
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="card-body">
      <p>The algorithm includes two steps: </p>         
                    <ol>
                        <li>Parcing HTML code to create a simplified DOM-tree with node-html-parser</li>
                        <li>Separating controller logic and css logic into separate files</li>
                        <li>Refactoring classes and id's in the remaining HTML-only code to align with generic logic.</li>
                    </ol>

      </div>
    </div>
  </div>
  
    </div>

       
        
     )
  }
}

  export default About