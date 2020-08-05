import React  from 'react';

const Weather = (props) =>  {
    
        return (
        <div className="info"> 
         {props.country && <p className="key"> <span className="val">country :   {props.country} </span> </p> }
         { props.humidity &&  <p className="key"> <span className="val">humidity:  { props.humidity }</span></p>}
         {props.coord && <p className="key"> <span className="val">coord:   {props.coord}</span></p>}
         { props.temp && <p className="key"> <span className="val"> temp:   {props.temp}</span></p>}
         {props.description &&  <p className="key"> <span className="val"> description:   {props.description} </span></p> }
         {props.error &&  <p className="key"> <span className="val">  {props.error} </span></p> }
         
        </div>
        );
    
}
 
export default Weather;