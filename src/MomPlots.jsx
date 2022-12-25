// apikey

import { useEffect, useState } from "react";
import { FilterBuilding } from "./components/FilterBuilding";
import { FilterForm } from "./components/FilterForm";
import { MinPriceFilter } from "./components/MinPriceFilter";
import { PlotsGrid } from "./components/PlotsGrid";

export const MomPlots = () => {
  const [buildingName, setBuildingName] = useState("3d_print_shop");

  const [rarityName, setRarityName] = useState("A");

  const [minPrice, setminPrice] = useState(50);

  const [maxPrice, setmaxPrice] = useState(100);

  useEffect(() => {
    //console.log( buildingName + rarityName );
  }, [buildingName, rarityName]);

  useEffect(() => {
    //console.log( rarityName );
  }, [rarityName]);

  const onNewBuilding = (newBuilding) => {
    setBuildingName(newBuilding);
  };

  const onNewRarity = (rarity) => {
    setRarityName(rarity);
  };

  const onNewMinPrice = (newMinPrice) => {
    setminPrice(newMinPrice);
  };

  return (
    <div className="main-div">
      <h1 id="topPage">Million on Mars</h1>
      <h2>AtomicHub</h2>
      <h2>< Plot search by building ></h2>

      <div className="credits">
        <p>Created by Huichoman </p>
        <p>
          Donations of WAX can be sent to <strong>q2xks.c.wam</strong>
        </p>
      </div>

      {/* <div className="filters-div">
        <FilterBuilding
          onNewBuilding={onNewBuilding}
          onNewRarity={onNewRarity}
        />

        <MinPriceFilter onNewMinPrice={onNewMinPrice} />
      </div> */}
      <FilterForm></FilterForm>

      <PlotsGrid
        newBuilding={buildingName}
        newRarity={rarityName}
        newMinPrice={minPrice}
      />

      <a href="#topPage" className="btn-flotante">
        Back
      </a>
    </div>
  );
};
