import React, { Component } from 'react';
import Data from "./data";

export class Map extends Component {
    
    render() {
        return (
          <>
            <div>
              <h3>Using local JSON</h3>
              <p>Starting with image_with_text node, we are able to capture the text child and image.name child. That is what currently fits the API of the framework.</p>
              {Data.image_with_text.map((item, i) => (
                <ul key={i}>
                  <li>{item.text} </li>
                  <li>{item.image.name} </li>
                </ul>
              ))}
              
            </div>
          </>
        );
    }
    }

export default Map;