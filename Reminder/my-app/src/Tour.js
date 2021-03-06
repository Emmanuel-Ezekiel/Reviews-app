import React, { useState } from 'react';


const Tour = ({id, image, info, price, name}) => {
    const [readMore, setReadMore] = useState(false);
  return (
      <article className="single-tour">
          <img src={image} alt={name} />
          <footer>
              <div className="tour-info">
                  <h4>{name}</h4>
                  <div className="tour-price">${price}</div>
              </div>

              {/* info.substring(0, 200) = from 0 to 200 letters */}

              <p>{readMore ? info : `${info.substring(0,200)}...`}
              <button onClick={() => setReadMore(!readMore)}>
                  {readMore ? "showless" : "read more"}
                </button>
                  </p>
              <button className="delete-btn">
                not interested
              </button>
          </footer>
      </article>
  )
};

export default Tour;
