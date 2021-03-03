import React from 'react'
import {BiSearch} from 'react-icons/bi'

export const SearchBar = () => {
    return (
        <div className="search-wrapper">
            <BiSearch className="h-full mx-2"/>
          <input type="text"  placeholder="Search for a product" className="h-full flex-1  outline-none bg-secondary text-white"/>  
        </div>
    )
}
