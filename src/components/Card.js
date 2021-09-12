import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>

    // My Version
    // <div className="dib mw5 bg-white br3 pa3 pa4-ns ba b--black-10 ma3">
    //   <div className="tc">
    //     <img
    //       src={`https://robohash.org/${id}?size=200x200`}
    //       className="br-100 h4 w4 dib ba b--black-05 pa2"
    //       title="Photo of a kitty staring at you"
    //       alt="robot"
    //     />
    //     <h2 className="f3 mb2">{name}</h2>
    //     <p className="f5 fw4 gray mt0">{email}</p>
    //   </div>
    // </div>
  );
};

export default Card;
