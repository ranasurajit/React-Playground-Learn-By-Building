const StatCard = ({ label, value }) => {
    return (
        <div className='bg-white rounded-xl shadow-md p-4 text-center'>
            <p className='text-sm text-gray-500'>{label}</p>
            <p className='text-lg font-semibold text-gray-800 mt-1'>
                {value}
            </p>
        </div>
    );
};

export default StatCard;
