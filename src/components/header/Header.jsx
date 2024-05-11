import './Header.scss';

const Header = () => {
    return (
        <>
            <div className="inner">
                <h1>
                    <a href="index.html">
                        <img
                            src="https://adventure.lotteworld.com/common_mus/images/logo.png"
                            alt="롯데월드"
                        />
                    </a>
                </h1>
                <ul className="top-menu">
                    <li>
                        <a href="#">롯데월드어드벤처</a>
                    </li>
                    <li>
                        <a href="#">아이스링크</a>
                    </li>
                    <li>
                        <a href="#">Login</a>
                    </li>
                </ul>
                <nav className="nav">
                    <ul className="gnb">
                        <li>
                            <a href="sub1.html">이용안내</a>
                        </li>
                        <li>
                            <a href="sub2.html">전시</a>
                        </li>
                        <li>
                            <a href="sub3.html">교육프로그램</a>
                        </li>
                        <li>
                            <a href="sub4.html">소통 소식</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Header;
