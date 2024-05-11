import Containeitemlist from './Containeitemlist';
import data from './visual';
import data2 from './visual2';
import './Container.scss';
import Con3list from './Con3list';

const Container = () => {
    return (
        <>
            <div className="con-box con1">
                <div className="inner">
                    <a href="#">
                        <strong>운영시간</strong>
                        <dl>
                            <dt>평일</dt>
                            <dd>11:00 - 19:00</dd>
                            <dt>주말/공휴일</dt>
                            <dd>11:00 - 20:00</dd>
                        </dl>
                    </a>
                </div>
            </div>
            <div className="con-box con2">
                <div className="inner">
                    <h2>시대별 문화를 즐길 수 있는 전시</h2>
                    <p>현재 진행 중인 전시를 알아보세요.</p>
                    <Containeitemlist data={data} />
                </div>
            </div>
            <div className="con-box con3">
                <div className="inner">
                    <h2>민속박물관의 즐겁고 다양한 프로그램</h2>
                    <p>다양한 프로그램을 확인해보세요.</p>
                    <Con3list data2={data2} />
                </div>
            </div>
            <div className="con-box con4">
                <div className="inner">
                    <h2>민속박물관 소식을 한눈에!</h2>
                    <p>오늘의 민속박물관 소식을 만나보세요.</p>

                    <div className="new-wrap">
                        <div className="box left">
                            <h3>민속박물관소식</h3>
                            <a href="#">
                                <strong>
                                    [롯데월드X제로월드] 두번째 방탈출 &lt;바람,우리는 그저
                                    바람이었소&gt; 오픈
                                </strong>
                                <span>2022.11.09</span>
                            </a>
                            <ul>
                                <li>
                                    <a href="#">
                                        [롯데월드X플레이더월드] 모바일 방탈출 화연 : &lt;조선 최고의
                                        소리꾼&gt;
                                    </a>
                                    <span>2022.02.22</span>
                                </li>
                                <li>
                                    <a href="#">
                                        [롯데월드X제로월드] 방탈출 &lt;아랑 餓浪 : 굶주린 이리&gt;
                                    </a>
                                    <span></span>
                                </li>
                                <li>
                                    <a href="#">민속박물관 주차 변경 안내</a>
                                    <span>2021.06.16</span>
                                </li>
                            </ul>
                            <p className="more">
                                <a href="#">더보기</a>
                            </p>
                        </div>
                        <div className="box right">
                            <ul>
                                <li>
                                    <a href="#">
                                        <span>이용문의</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>오시는길</span>
                                    </a>
                                </li>
                            </ul>
                            <div>
                                <p>
                                    우리 고유의 옛멋과
                                    <br />
                                    품격을 선도합니다
                                </p>
                                <p className="more">
                                    <a href="#">
                                        전통혼례바로가기
                                        <i className="xi-arrow-right"></i>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Container;
