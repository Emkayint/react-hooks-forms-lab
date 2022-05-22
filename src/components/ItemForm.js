import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [newName, setNewName] = useState('')
  const [newCat, setNewCat] = useState('Produce')
  
  let newObj = {
    id : uuid(),
    name : newName,
    category : newCat
  }
  function handleSubmit(e){
    e.preventDefault()
    props.onItemFormSubmit(newObj)
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={newName} onChange= {(e) => setNewName(e.target.value)}/>
      </label>

      <label>
        Category:
        <select name="category"  onChange = {(e) => setNewCat(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
