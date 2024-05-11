import './lotte.scss';
import '../assets/css/reset.css';
import Header from './header/Header';
import Visual from './visual/Visual';
import Container from './container/Container';
import Footer from './footer/Footer';

const Lotte = () => {
    return (
        <>
            <head>
                <link
                    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css"
                />
                <meta charset="UTF-8" />
            </head>
            <div id="wrap">
                <header id="header">
                    <Header />
                </header>
                {/* <!-- //header --> */}
                <section id="visual">
                    <Visual />
                </section>
                {/* <!-- //visual --> */}
                <main id="container" className="main">
                    <section id="content">
                        <Container />
                    </section>
                </main>
                {/* <!-- //main --> */}
                <footer id="footer">
                    <Footer />
                </footer>
            </div>
        </>
    );
};

export default Lotte;
