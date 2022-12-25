import { useState } from "react";

export const FilterForm = () => {
  const [values, setValues] = useState({
    buildingName: "3d_print_shop",
    buildingRarity: "A",
    plotRarity: "",
    minPrice: 50,
    maxPrice: 100,
  });

  function handleOnSubmit(evt) {
    evt.preventDefault();
  }

  function handleOnChange(evt) {
    const { target } = evt;
    const { name, value } = target;
    const newValues = { ...values, [name]: value };
    console.log(newValues);
    setValues(newValues);
  }

  return (
    <form className="filters-div">
      <div className="filters-div-child">
        <label id="lbl-dpBuilding" className="label-dpMenu">
          Building Name
        </label>

        <select
          className="dropDown"
          id="lbl-dpBuilding"
          name="buildingName"
          defaultValue={values.buildingName}
          onChange={handleOnChange}
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
          <option value="thorium-reactor">thorium-reactor</option>
          <option value="training_hall">training_hall</option>
          <option value="water_filter">water_filter</option>
        </select>
      </div>

      <div className="filters-div-child">
        <label className="label-dpMenu">Building Rarity </label>
        <select
          className="dropDown"
          defaultValue={values.buildingRarity}
          id="building-rarity"
          name="buildingRarity"
          onChange={handleOnChange}
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

      <div className="filters-div-child">
        <label className="label-dpMenu">Plot Rarity </label>
        <select
          className="dropDown"
          defaultValue={values.plotRarity}
          id="plot-rarity"
          name="plotRarity"
          onChange={handleOnChange}
        >
          <option value="A">Any</option>
          <option value="C">Common</option>
          <option value="U">Uncommon</option>
          <option value="R">Rare</option>
          <option value="E">Epic</option>
          <option value="L">Legendary</option>
        </select>
      </div>

      <div className="filters-div-child" id="div-minprice">
        <label id="lbl-dpBuilding" className="label-dpMenu">
          Min Price .
        </label>
        <div className="filters-div-child">
          <input
            className="inputText"
            id="min_price"
            placeholder="Min Price"
            type="number"
            name="minPrice"
            value={values.minPrice}
            onChange={handleOnChange}
            onKeyDown={(e) =>
              ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
            }
          />
        </div>
      </div>

      <div className="filters-div-child" id="div-maxprice">
        <label id="lbl-dpBuilding" className="label-dpMenu">
          Max Price
        </label>
        <div className="filters-div-child">
          <input
            className="inputText"
            id="max_price"
            placeholder="Max Price"
            type="number"
            name="maxPrice"
            value={values.maxPrice}
            onChange={handleOnChange}
            onKeyDown={(e) =>
              ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
            }
          />
        </div>
      </div>
    </form>
  );
};
