import React from 'react'

const SearchItem = () => {
  return (
    <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor='search'>Search</label>
             <input type="text" 
                    id='search'        
                    placeholder='search item'
                    role='searchbox'
                    
                />


    </form>
  )
}

export default SearchItem