import { useState } from "react";

export const FilterBuilding = ({ onNewBuilding, onNewRarity }) => {
  // const [building, setBuilding] = useState('')
  // const Title = styled.h1`
  //   font-size: 1.5em;
  //   text-align: center;
  //   color: palevioletred;
  // `;

  const noRarityBuildings = [
    "bazaar",
    "cantina",
    "gallery",
    "library",
    "pirate_radio",
    "teadhop",
    "training_hall",
  ];

  const [haveRarity, sethaveRarity] = useState(false);
  const handleSelectedBuilding = (value) => {
    if (noRarityBuildings.includes(value)) {
      sethaveRarity(true);
    } else {
      sethaveRarity(false);
    }
    onNewBuilding(value);
  };

  const handleSelectedRarity = (rarity) => {
    onNewRarity(rarity);
  };

  return (
    <>
      <div className="filters-div-child">
        <label id="lbl-dpBuilding" className="label-dpMenu">
          Select Building{" "}
        </label>

        <select
          className="dropDown"
          id="lbl-dpBuilding"
          onChange={(e) => handleSelectedBuilding(e.target.value)}
        >
          <option value="3d_print_shop">3d_print_shop</option>
          <option value="bazaar">bazaar</option>
          <option value="cad">cad</option>
          <option value="cantina">cantina</option>
          <option value="chem_lab">chem_lab</option>
          <option value="concrete_habitat">concrete_habitat</option>
          <option value="composter">composter</option>
          <option value="engineering_bay">engineering_bay</option>
          <option value="gallery">gallery</option>
          <option value="greenhouse">greenhouse</option>
          <option value="grindnbrew">grindnbrew</option>
          <option value="library">library</option>
          <option value="machine_shop">machine_shop</option>
          <option value="metis_shield">metis_shield</option>
          <option value="mining_rig">mining_rig</option>
          <option value="pirate_radio">pirate_radio</option>
          <option value="polar_workshop">polar_workshop</option>
          <option value="rover_works">rover_works</option>
          <option value="sab_reactor">sab_reactor</option>
          <option value="shelter">shelter</option>
          <option value="smelter">smelter</option>
          <option value="solar_panel">solar_panel</option>
          <option value="teashop">teashop</option>
          <option value="training_hall">training_hall</option>
          <option value="water_filter">water_filter</option>
        </select>
      </div>

      <div className="filters-div-child" id="div-rarity">
        <label className="label-dpMenu">Select Rarity </label>
        <select
          className="dropDown"
          disabled={haveRarity}
          onChange={(e) => handleSelectedRarity(e.target.value)}
        >
          <option value="A">Any</option>
          <option value="C">Common</option>
          <option value="U">Uncommon</option>
          <option value="R">Rare</option>
          <option value="E">Epic</option>
          <option value="L">Legendary</option>
          <option value="M">Mythic</option>
        </select>
      </div>
    </>
  );
};
