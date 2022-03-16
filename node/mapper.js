import React, { Component } from 'react';
import Data from "./data";

export class Map extends Component {
    
    render() {

      // Takes nested JSON and grabs required nodes url and text
      const data = Data.image_sets[0].image_with_text;
      
      // Creates presentation of mapped data
      const myjson = data.map((item, i) => (
        <ul key={i}>
          <li>{item.text} </li>
          <li>{item.image.url} </li>
        </ul>
      ))

      // const obj = JSON.parse(myjson)

        return (
          <>
            <div>
              {/* <h3>Using local JSON</h3>
              <p>Starting with image_with_text node, we are able to capture the text child and image.name child. That is what currently fits the API of the framework.</p> */}

              {/* {data.map((item, i) => (
                <ul key={i}>
                  <li>{item.text} </li>
                  <li>{item.image.url} </li>
                </ul>
              ))} */}

              {myjson} 

            </div>
          </>
        );
    }
    }

export default Map;