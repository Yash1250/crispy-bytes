/** @format */

import { IMG_URL } from "../utils/config";

const RestrountCard = ({
  cloudinaryImageId,
  name,
  avgRating,
  cuisines,
  areaName,
  sla,
}) => {
  return (
    <div className="w-64 h-780 overflow-hidden p-5 shadow-xl flex flex-col items-center rounded-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300">
      <img
        src={IMG_URL + cloudinaryImageId}
        alt="name"
        className="w-60 h-40 rounded-lg "
      />
      <div className="w-56 text-gray-800 mt-3">
        <h2 className="font-bold text-lg w-52 overflow-hidden truncate h-7">{name}</h2>
        <h3 className="flex font-semibold"><span className="text-sm mt-[1px]">⭐</span>{avgRating} . {sla?.slaString}</h3>
        <h4 className="w-52 overflow-hidden truncate h-6">
          {cuisines.join(", ")}
        </h4>
        <h4>{areaName}</h4>
      </div>
    </div>
  );
};

export default RestrountCard;
