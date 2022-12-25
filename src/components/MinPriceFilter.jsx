import { useEffect, useState } from "react";

export const MinPriceFilter = ({ onNewMinPrice }) => {
  const [inputValue, setInputValue] = useState("100");

  const onChange = ({ target }) => {
    setInputValue(target.value);
  };

  useEffect(() => {
    //onNewMinPrice( inputValue );
  }, [inputValue]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    onNewMinPrice(inputValue);
    //setInputValue('');
  };

  return (
    <div className="filters-div-child" id="div-minprice">
      <label id="lbl-dpBuilding" className="label-dpMenu">
        Min Price
      </label>
      <form onSubmit={handleOnSubmit} className="filters-div-child">
        <input
          className="inputText"
          id="min_price"
          type="number"
          onKeyDown={(e) =>
            ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
          }
          placeholder="Min Price"
          value={inputValue}
          onChange={onChange}
        />
      </form>
    </div>
  );
};
