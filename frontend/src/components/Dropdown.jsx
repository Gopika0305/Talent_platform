import React ,{useState , useEffect}from "react";
import { useRef } from "react";
import "tailwindcss/tailwind.css";

const Dropdown = () => {
    const [visible, setVisible] = useState(false);
    const dropdownRef = useRef(null);
    
    // Function to handle the click event
    const handleClick = () => { setVisible(!visible); };

    // Function to handle the click outside the dropdown
    const handleClickOutside = (event) => { 
        if (dropdownRef.current && !dropdownRef.current.contains(event.target))
             { setVisible(false); } }; 

    // useEffect hook to add an event listener when the component mounts
    useEffect(() => { 
        document.addEventListener('mousedown', handleClickOutside);
        return () => { document.removeEventListener('mousedown', handleClickOutside); }; 
    }, []);

    return (
    <div className="relative" id="profileDropdown">
    <button id="profileButton" className="flex items-center" onClick={handleClick}>
        <img src="https://via.placeholder.com/30" alt="Profile" className="rounded-full w-8 h-8 mr-2"/>
        <span className="text-gray-700 hidden md:inline">John Doe</span>
    </button>
    <div id="dropdownMenu" ref={dropdownRef} className={`${visible ? 'block' : 'hidden'} space-y-4 absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg`}>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
    </div>
</div>
    )
}

export default Dropdown;    