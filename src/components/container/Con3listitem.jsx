const Con3listitem = ({ item }) => {
    const { id, imgurl, str } = item;
    return (
        <>
            <li>
                <a href="#">
                    <img src={imgurl} alt="" />
                    <strong>{str}</strong>
                </a>
            </li>
        </>
    );
};

export default Con3listitem;
