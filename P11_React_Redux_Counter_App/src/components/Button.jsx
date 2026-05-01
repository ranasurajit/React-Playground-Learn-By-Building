const Button = ({ label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className='
                px-6 py-2 
                rounded-xl 
                font-semibold 
                text-white 
                shadow-md 
                transition-all duration-200 
                active:scale-95
                bg-[#6C8AA6] 
                hover:bg-[#5a738c] 
                hover:shadow-lg
            '
        >
            {label}
        </button>
    );
};

export default Button;
