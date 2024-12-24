

const Popup = ({show,close,children}) => { 

    //state variable to show/hide the popup
    const [show, setShow] = useState(false);

    return (
        show && 
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white rounded-lg shadow-lg p-6">
                <button className="absolute top-0 right-0 mt-4 mr-4 text-gray-600 hover:text-gray-900" onClick={close}>X</button>
                {children}
            </div>
        </div>
    )
}

export default Popup