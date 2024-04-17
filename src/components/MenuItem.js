/** @format */

import CategoryItems from "./CategoryItems";

const MenuItem = ({ data , showItems , setShowIndex }) => {
  // console.log(data);
  let { title, itemCards } = data;
  const handler = ()=>{
    setShowIndex();
  }
  return (
    <>
      <div className="w-6/12 bg-gray-200 mx-auto">
            <div className="mx-auto my-4 bg-white w-12/12 p-4 shadow-lg" key={title}>
              <div className="flex justify-between cursor-pointer" onClick={handler}>
                <span className="font-bold text-xl">
                  {title} ({itemCards.length})
                </span>
                {showItems ? (<span>⬆️</span>) : (<span>⬇️</span>)}
                
              </div>
              {showItems && (<CategoryItems items={itemCards} parent="menuItem" />)}
            </div>
        
      </div>
    </>
  );
};

export default MenuItem;
