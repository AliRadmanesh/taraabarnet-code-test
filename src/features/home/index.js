import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "../../components/Card";
import Alert from "../../components/Alert";
import Spinner from "../../components/Spinner";
import { getCards, removeCard } from "../../stores/actions";

const Home = () => {
  const dispatch = useDispatch();
  const { cards, loading, error } = useSelector((state) => state.cards);

  useEffect(() => {
    if (cards.length < 1) {
      dispatch(getCards());
    }
  }, []);

  const onRemoveClick = (cardId) => {
    dispatch(removeCard(cardId));
  };

  const renderLoading = () => {
    return (
      <div className="container mx-auto grid place-items-center mt-80">
        <Spinner />
      </div>
    );
  };

  const renderErrorMessage = () => {
    return (
      <div className="container mx-auto max-w-md grid place-items-center">
        <Alert type="error" message={error} />
      </div>
    );
  };

  const renderCards = () => {
    return (
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 xl:px-0 pt-2 pb-6">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            image={card.image}
            description={card.description}
            onRemoveClick={onRemoveClick}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      {loading && renderLoading()}
      {error && !loading && renderErrorMessage()}
      {cards && renderCards()}
    </>
  );
};

export default Home;
