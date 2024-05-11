import './Visual.scss';

const Visual = () => {
    return (
        <>
            <ul className="main-banner">
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <p className="btn-wrap">
                <button className="btn prev">
                    <i className="xi-arrow-left"></i>
                </button>
                <button className="btn next">
                    <i className="xi-arrow-right"></i>
                </button>
            </p>
            <ul className="paging">
                <li className="on"></li>
                <li></li>
                <li></li>
            </ul>
        </>
    );
};

export default Visual;
