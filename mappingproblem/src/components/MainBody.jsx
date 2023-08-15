import React from 'react'
import locationimg from '../images/Path.png'

const MainBody = (props) => {
  return (
    <div className='outer-main'>
        <img src={ ` ../images/${props.Img} ` } alt=""  className='main-img'/>
        <div className='main-right'>
            <div className='main-location'>
                <img src={locationimg} alt="" className='img-loc'/>
                <h5>{props.location}</h5>
                <a href="" className='a-link'>{props.view}</a>
            </div>
            <h1>{props.Name}</h1>
            <h6 className='main-h6'>{props.startDate} - {props.endDate} </h6> 
            <p className='main-p'>{props.description}</p>  
            
        </div>
    </div>
  )
}

export default MainBody