import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearchFilter] = useState('')
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchFilter(e){
    e.preventDefault()
    setSearchFilter(e.target.value)
  }
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const filteredItems = itemsToDisplay.filter(item => {
    if(search === ''){
      return true
    } else {
      return item.name.toLowerCase().search(search) >= 0
    }
  })

  return (
    <div className="ShoppingList">
      <ItemForm  onItemFormSubmit = {onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange = {onSearchFilter} search = {search}/>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
