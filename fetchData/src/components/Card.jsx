import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = ({ avatar, name, email, address }) => {
  const [loader, setLoader] = useState(true);

  const handleLoader = () => {
    setLoader(!loader);
  };
  return (
    <div className="card">
      <LazyLoadImage
        src={avatar}
        alt={name}
        height={80}
        effect="blur"
        onLoad={handleLoader}
      />

      <p>{name}</p>
      <p>{address.city}</p>
      <p>{email}</p>
    </div>
  );
};

export default Card;
