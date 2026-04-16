const Button = ({ label, onClick, isDisabled }) => {
    return (
        <button className='btn-action'
            onClick={onClick} disabled={isDisabled}>{label}</button>
    );
};

export default Button;
