import Card from './Card';

const CardContainer = ({ posts }) => {
    return (
        <div className='cards-container'>
            {
                posts && posts.map((item) => {
                    return <Card key={item.id} title={item.title} body={item.body} />;
                })
            }
        </div>
    );
};

export default CardContainer;
