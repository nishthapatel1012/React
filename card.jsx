import React from "react";
function Card(props) {
    console.log(props)
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="picture" className="card-img"/>
          {/* </div> */}
          <div className="cardInfo">
            <span className="card_category">{props.title}</span>
            <h3 className="cardtitle">{props.name}</h3>
            <a href={props.link} target="_blank">
              <button className="btn">Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;