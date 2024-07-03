import styled from '@emotion/styled';
import HeaderImg from 'public/images/background.png';
import HeaderLogo from 'public/images/icon.png';
import Image from 'next/image';

const HeaderContainer = styled.section`
    max-width: 100vw;
    border: 1px solid #d3d3d3;
    border-radius: 0.4rem;

    & .titleExplain {
        display: flex;
        justify-content: space-between;

        & article:first-of-type {
            width: 30%;
            padding-left: 2rem;
            & small {
                color: ${prop => prop.theme.colors.themeColor};
                font-size: ${prop => prop.theme.fontSize.subTitle};
                display: block;
                padding: 2rem 0;
                font-weight: 300;
            }

            & ul {
                display: flex;
                gap: 1rem;

                li:last-of-type {
                    font-size: ${prop => prop.theme.fontSize.title};
                    color: ${prop => prop.theme.colors.themeColor};
                    font-weight: 600;
                }
            }
        }

        article:last-of-type {
            width: 70%;
            height: 120px;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
`;

const HeaderUtilBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-top: 1px solid #d3d3d3;
    padding: 1rem;

    & article:first-of-type {
        display: flex;
        gap: 2rem;

        & dl {
            display: flex;
            align-items: center;

            & dt {
                padding-right: 1rem;
                font-size: ${prop => prop.theme.fontSize.base};
                color: rgba(0, 0, 0, 0.5);
            }

            & dd {
                & input[type='date'] {
                    border: 1px solid #d3d3d3;
                    border-radius: 0.4rem;
                    padding: 1rem;
                }
            }
        }
    }

    & article:last-of-type {
        display: flex;
        padding: 0.4rem;
        background-color: #f4f4f4;
        border: 1px solid #d3d3d3;
        border-radius: 0.4rem;

        & ul {
            display: flex;

            & li:first-of-type {
                background-color: ${prop => prop.theme.colors.white};
                border: 1px solid #d3d3d3;
                border-radius: 1rem;
                & button[type='button'] {
                    color: ${prop => prop.theme.colors.black};
                    font-weight: 600;

                    &:hover {
                        cursor: pointer;
                    }
                }
            }

            & li {
                padding: 0.2rem;

                & button[type='button'] {
                    background-color: transparent;
                    color: rgba(0, 0, 0, 0.5);
                    padding: 0.6rem;
                    border: 0;

                    &:hover {
                        cursor: not-allowed;
                    }
                }
            }
        }
    }
`;

const Header = () => {
    return (
        <HeaderContainer style={{ backgroundColor: '#fff' }}>
            <div className="titleExplain">
                <article>
                    <small>예시: 페이스북</small>
                    <ul>
                        <li>
                            <Image src={HeaderLogo} alt="HeaderLogo" priority />
                        </li>
                        <li>차트,그래프 시각화</li>
                    </ul>
                </article>
                <article>
                    <Image src={HeaderImg} alt="TitleImg" priority />
                </article>
            </div>
            <HeaderUtilBar>
                <article>
                    <dl>
                        <dt>시작일</dt>
                        <dd>
                            <input type="date" defaultValue="2022-03-01" />
                        </dd>
                    </dl>
                    <dl>
                        <dt>종료일</dt>
                        <dd>
                            <input type="date" defaultValue="2022-03-31" />
                        </dd>
                    </dl>
                </article>
                <article>
                    <ul>
                        <li>
                            <button type="button" defaultChecked={true}>
                                일별
                            </button>
                        </li>
                        <li>
                            <button type="button" disabled>
                                주별
                            </button>
                        </li>
                        <li>
                            <button type="button" disabled>
                                월별
                            </button>
                        </li>
                    </ul>
                </article>
            </HeaderUtilBar>
        </HeaderContainer>
    );
};

export default Header;
