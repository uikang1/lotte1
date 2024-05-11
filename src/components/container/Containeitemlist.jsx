import Containeritem from './Containeritem';

const Containeitemlist = ({ data }) => {
    return (
        <ul>
            {data.map((item) => (
                <Containeritem key={item.id} item={item} />
            ))}
        </ul>
    );
};

export default Containeitemlist;
