import React, { useState } from "react";
import { data } from "../../helper/data";
import PlayerCard from "../PlayerCard/PlayerCard";
import CardContainerStyle from "./CardcontainerStyle.module.css";

const CardContainer = ({ searchValue }) => {
  const updatedData = data?.filter((item) => {
    if (searchValue === "") {
      return item;
    } else {
      return item.name.toLowerCase().includes(searchValue);
    }
  });

  
  return (
    <div className={CardContainerStyle["Cards"]}>
      {updatedData.map((player, index) => {
        return <PlayerCard key={index} player={player} />;
      })}
    </div>
  );
};

export default CardContainer;
