import React, {useState} from 'react'
import './SearchBar.css' 


const SearchBar=(props)=>{
    const [SearchValue, setSearchValue]= useState(" ")

   const handleInputChange=(event)=>{
       setSearchValue(event.target.value)
   }
    const handleClearButton=()=>{
        setSearchValue(" ")

    }

    const shouldDisplayButton=SearchValue.length>0

    const filteredProduct= props.product.filter((product)=>{
            return product.includes(SearchValue)

        })
    
 

    return ( <div> 
                <input type="text"  value={SearchValue} onChange={handleInputChange}/>
               {shouldDisplayButton && <button onClick={handleClearButton}> Clear </button>}

        <ul>
        {filteredProduct.map((product)=>{
            return <li key={product}> {product} </li> 
        
        })}
        </ul>




    </div>
    )

}

export default SearchBar