import React from "react";

const PlantCard = (props) => {
  const { plant } = props;
  const { name, type, imgUrl } = plant;

  return (
    <div id="plantCard">
      <h3>Name: {name}</h3>
      <h2>Plant Type: {type}</h2>
      <img src={imgUrl} />
    </div>
  );
};

export default PlantCard;
