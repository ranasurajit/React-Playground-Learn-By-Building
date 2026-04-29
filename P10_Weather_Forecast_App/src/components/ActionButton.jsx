const ActionButton = ({ label, onClick }) => {
    return (
        <div>
            <button
                className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition'
                onClick={onClick}>
                {label}
            </button>
        </div>
    );
};

export default ActionButton;
