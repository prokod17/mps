import { useEffect, useState } from "react";
import { getPlots } from "../helpers/getPlots";
import { PlotsItems } from "./PlotsItems";
import Loader from "react-spinners/MoonLoader";

export const PlotsGrid = ({ newBuilding, newRarity, newMinPrice }) => {
  const [loadingInProgress, setLoading] = useState(false);

  const [plots, setPlots] = useState([]);

  // const getData = async() => {

  // const newData = await getPlots( newBuilding, newRarity, newMinPrice, setLoading );
  //   setPlots(newData);
  //  }

  useEffect(() => {
    const getData = async () => {
      const newData = await getPlots(
        newBuilding,
        newRarity,
        newMinPrice,
        setLoading
      );
      console.log("NewData lenght = " + newData.length);
      setPlots(newData);
    };

    getData();
  }, [newBuilding, newRarity, newMinPrice]);

  return (
    <>
      {loadingInProgress ? (
        <div className="loader-container">
          <div className="spinner">
            <Loader color={"#EA6808"} size={60} speedMultiplier={0.3} />
          </div>
        </div>
      ) : (
        <div className="card-grid">
          <section>
            {plots.map((plots) => (
              <PlotsItems key={plots.sale_id} {...plots} />
            ))}
          </section>
        </div>
      )}
    </>
  );
};
