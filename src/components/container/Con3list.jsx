import Con3listitem from './Con3listitem';

const Con3list = ({ data2 }) => {
    return (
        <ul>
            {data2.map((item) => (
                <Con3listitem key={item.id} item={item} />
            ))}
        </ul>
    );
};

export default Con3list;
