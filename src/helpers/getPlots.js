export const getPlots = async (
  newBuilding,
  newRarity,
  newMinPrice,
  setLoading
) => {
  const noRarityBuildings = [
    "bazaar",
    "cantina",
    "gallery",
    "library",
    "pirate_radio",
    "teadhop",
    "training_hall",
  ];

  setLoading(true);
  let buildingValueG1 = "";
  let buildingValueG2 = "";

  let allData = [];

  let currentPage = 0;
  let total_pages = 3;

  if (newRarity !== "A" && !noRarityBuildings.includes(newBuilding)) {
    buildingValueG1 = newBuilding + "_" + newRarity;
    buildingValueG2 = newBuilding + "-22_" + newRarity;
  } else {
    buildingValueG1 = newBuilding;
    buildingValueG2 = newBuilding;
  }
  console.log("Before fectxh");
  while (currentPage < total_pages) {
    currentPage++;
    const response = await fetch(
      `https://wax.api.atomicassets.io/atomicmarket/v2/sales?collection_name=onmars&schema_name=land.plots&page=${currentPage}&limit=100&order=asc&sort=price&state=1&min_price=${newMinPrice}&symbol=WAX`
    );
    let { data } = await response.json();
    //data.forEach(e => allData.unshift(e));
    allData.push(...data);
    //morePagesAvailable = currentPage < total_pages;
  }

  const filtro = allData.filter(
    (plot) =>
      Object.keys(plot.assets[0].data).join().includes(buildingValueG1) ||
      Object.keys(plot.assets[0].data).join().includes(buildingValueG2)
  );

  const filteredPlots = filtro.map((info) => ({
    listing_price: (info.price.amount / 100000000).toFixed(2),
    sale_id: info.sale_id,
    link: "https://wax.atomichub.io/market/sale/" + info.sale_id,
    mutable_data: info.assets[0].mutable_data,
    front_img: "https://atomichub-ipfs.com/ipfs/" + info.assets[0].data.img,
    back_img: info.assets[0].immutable_data.backimg,
    name: info.assets[0].immutable_data.name,
    rarity: info.assets[0].data.rarity,
  }));
  console.log(allData);
  //  console.log(`Page ${ page }`);
  console.log(filtro);
  console.log(filteredPlots);

  setLoading(false);

  console.log("No. de resultados " + filteredPlots.length);
  if (currentPage === total_pages && allData.length === 0) {
    console.log("No results");
  }

  return filteredPlots;
};
