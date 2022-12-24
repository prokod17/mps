

export const FilterRarity = () => {
  return (
    <div><label className="label-dpMenu">Select Rarity </label>
        <select className="dropDown" defaultValue="A">
            <option value="A" >Any</option>
            <option value="C">Common</option>
            <option value="U">Uncommon</option>
            <option value="R">Rare</option>
            <option value="E">Epic</option>
            <option value="L">Legendary</option>
            <option value="M">Mythic</option>
        </select>
    </div>
  )
}
