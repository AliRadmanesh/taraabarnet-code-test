import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Alert from "../../components/Alert";

const CardInfo = () => {
  const { id } = useParams();
  const { cards } = useSelector((store) => store.cards);
  const cardItem = cards.find((card) => card.id === +id);

  if (!cardItem) {
    const errorMessage = "Card data is not available anymore :(";
    return (
      <div className="container mx-auto max-w-md grid place-items-center">
        <Alert type="error" message={errorMessage} />
      </div>
    );
  }

  const { title, image, description } = cardItem;

  return (
    <div className="container mx-auto px-4 xl:px-0 mb-4 flex flex-col items-center md:flex-row md:items-start">
      <img
        className="rounded-lg max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg"
        src={image}
        alt={title}
      />
      <div className="ml-4 flex flex-col items-center md:items-start">
        <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardInfo;
