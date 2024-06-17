import React,{useState} from 'react'
import './shopcategories.css'
import all_product from '../../assests/all_products'
import { Item } from '../../component/Items/Item'

const Shopcategories = (props) => {
  const [sortBy, setSortBy] = useState('nameAsc'); 
  
  const sortByPriceassesnding= (a, b) => {
    return a.new_price - b.new_price;
  };
  
  const sortByPricedesending= (a, b) => {
    return b.new_price - a.new_price;
  };

  const sortByNameAssending = (a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  };

  const sortByNameDesending = (a, b) => {
    if (a.name > b.name) return -1;
    if (a.name < b.name) return 1;
    return 0;
  };


  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };


  let filterdAndSortedItems;
  switch (sortBy) {
    case 'nameAsc':
      filterdAndSortedItems = all_product
        .filter(item => props.category === item.category)
        .sort(sortByNameAssending);
      break;
    case 'nameDesc':
      filterdAndSortedItems = all_product
        .filter(item => props.category === item.category)
        .sort(sortByNameDesending);
      break;
    case 'sizeAsc':
      filterdAndSortedItems = all_product
        .filter(item => props.category === item.category)
        .sort(sortByPriceassesnding);
      break;
    case 'sizeDesc':
      filterdAndSortedItems = all_product
        .filter(item => props.category === item.category)
        .sort(sortByPricedesending);
      break;
  }



  return (
    <div className='shop-categories'>
      <div className='shopcategories-banner'>
        <img src={props.image}></img>
      </div>

      <div className='sort-options'>
        <label htmlFor='sort-select'>Sort by: </label>
        <select value={sortBy} onChange={handleSortChange}>
          <option value='nameAsc'>Name A-Z</option>
          <option value='nameDesc'>Name Z-A</option>
          <option value='sizeAsc'>Size Low to High</option>
          <option value='sizeDesc'>Size High to Low</option>
        </select>
      </div>

      
      <div className='shop-items'>
        {
        filterdAndSortedItems.map((item,i)=>{
          if(props.category===item.category)
            {
              return <Item 
                key={i} 
                id={item.id} 
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
                />
            }
            else{
              return null;
            }
          })
         }
      </div>
          
    </div>
  )
}

export default Shopcategories