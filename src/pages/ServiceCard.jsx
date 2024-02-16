import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="max-w-lg text-center bg-white rounded-lg shadow-lg p-8 w-[297px] h-[239px]">
      <div className="flex items-center justify-center mb-2">
        <div className="top-0 left-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-blue-600">
          <FontAwesomeIcon icon={icon} size="lg" />
        </div>
      </div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};
ServiceCard.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCard;
