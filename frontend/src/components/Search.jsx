import { useState,React } from 'react';

const Search = React.memo(() =>{ 
        const [filter,setFilter] =useState('')

    function filterData(e){ 
        const keyword= e.target.value;
        setFilter(keyword);
        console.log(keyword)
    }

    return (
        <div className="search flex items-center space-x-2">
            <input 
                type="text" 
                placeholder="Search..." 
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
            onClick={filterData}>
                Search
            </button>
        </div>
    )
})

export default Search