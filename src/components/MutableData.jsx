

export const MutableData = ( {mutable_data}) => {    
    
    const datos = Object.entries(mutable_data);

    

   

  return (
    <>
        {
            datos.map( (e) => (
                <div className="mutable-data" key={e[0]}>
                  <div className="column-building">
                    <div className="building-name">
                      <p  className="building-name">{e[0]}</p>                    
                      
                    </div>
                  </div> 
                  <div className="column">
                    <div className="qty-value">
                      <p  className="qty-value">{e[1]}</p>
                    </div>
                    </div>
                  
                </div>
            )) 
        }
           
    </>
  )
}
