import React, { useState } from "react";
import Modal from "../Modal/Modal";

import Link from "next/link";

const Card = ({ cardData }) => {
  const image="/images/"+ `${cardData.profile}`;
  return (
    <Link href={`/projects/${cardData.id}`}>
      <div className="card">
        <div className="card-content">
          <div className="card-item-a">
            <img src={image} className="card-img" />
          </div>
          <div className="card-item-b">{cardData.title}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
