import { useState } from 'react';

export const AddCategory = ( { onNewCategory } ) => {

  const [inputValue, setInputValue] = useState('');

  const onChange = ( { target }) => {

    setInputValue( target.value );

  }

  const handleOnSubmit = ( event ) => {
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;    
    
    onNewCategory(inputValue.trim().toLowerCase());
    setInputValue('');
  }

  return (
    <form onSubmit={ ( event ) => handleOnSubmit( event )}>
    <input 
      type="text"
      placeholder="Building to search"
      value = { inputValue }
      onChange = { onChange }
    />
    
  </form>
    
   
  )
}
