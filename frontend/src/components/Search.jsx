const Search = () =>{ 

    return (
        <div className="search flex items-center space-x-2">
            <input 
                type="text" 
                placeholder="Search..." 
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">
                Search
            </button>
        </div>
    )
}

export default Search