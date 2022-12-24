import { useState } from "react";

export const DeleteCategory = ( { setCategories }) => {

const [inputValue, setInputValue] = useState('')

const onChange = ( { target }) => {

    setInputValue( target.value );
    //console.log( inputValue );

}

const handleOnSubmit = ( event ) => {
    event.preventDefault();
    if( inputValue.trim().length <= 1) return;

    
    setCategories( ( categories ) => 

       [...categories.filter( val => val !== inputValue)]

    );

    setInputValue( "" );
}
    
  return (
    <form onSubmit={ ( event ) => handleOnSubmit( event )}>
        <input 
            type="text" 
            placeholder="Gif a eliminar" 
            value={ inputValue }
            onChange={ onChange } />
    </form>
  )
}
