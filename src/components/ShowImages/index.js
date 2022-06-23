/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import {Link} from 'react-router-dom'

class ShowImages extends Component {
  render() {
    const { original, sketchUrl } = this.props;
    console.log({ original, sketchUrl });
    console.log(original && sketchUrl);

    if (original && sketchUrl) {
      return (
        <>
            <div className='photo-result'>
            <img
                  alt="uploaded"
                  className='img-some'
                  src={window.URL.createObjectURL(original)}
                  
                />
            <img alt="sketch" src={sketchUrl} />

            </div>
            <div className='center' style={{paddingBottom:'50px'}}> 
            <button> 
              <a
                download={`${original.name}_sketch.jpg`}
                href={sketchUrl}
                title="DOWNLOAD"
              >
                СКАЧАТИ ЕСКІЗ
              </a>
              </button>
              <br/>
              <button>
              <Link to='/'>ОБРАТИ ФІЛЬТР</Link>
              </button>
              </div>  
            
           
        </>
      );
    } else {
      return null;
    }
  }
}
export default ShowImages;
