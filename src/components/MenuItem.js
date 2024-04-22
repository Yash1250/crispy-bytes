/** @format */

import CategoryItems from "./CategoryItems";

const MenuItem = ({ data , showItems , setShowIndex }) => {
  let { title, itemCards } = data;
  const handler = ()=>{
    setShowIndex();
  }
  return (
    <>
      <div className="w-[45rem] bg-gray-200 mx-auto max-[800px]:w-[30rem] max-[520px]:w-[20rem] max-[356px]:w-[16rem]">
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
