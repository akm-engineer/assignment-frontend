import React from "react";
import PropTypes from "prop-types";

const InsightCard = ({ image, title, description }) => {
  return (
    <div className="mx-4 max-w-[586px] h-[153px] bg-white rounded-2xl shadow-lg p-8 border border-gray-200 flex items-center gap-4">
      <img
        src={image}
        alt={"title"}
        className="w-10 h-10 rounded-full bg-gray-200"
      />
      <div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

InsightCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default InsightCard;
