import styled from '@emotion/styled';

export const ChartCardContainer = styled.section`
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
    margin-top: 1rem;
`;

export const ChartCardWrap = styled.section`
    background-color: ${prop => prop.theme.colors.white};
    padding: 1rem;
    min-height: 30rem;
    border: 1px solid #d3d3d3;
    border-radius: 1rem;
    min-width: 36rem;

    @media (max-width: 1600px) {
        min-width: 33rem;
    }

    @media (max-width: 1460px) {
        min-width: 28rem;
    }

    @media (max-width: 1360px) {
        min-width: 22rem;
    }
`;

export const ChartCardTitle = styled.div`
    padding: 1rem;
    background-color: #f4f4f4;
    border-radius: 1rem;
    margin-bottom: 2rem;

    & ul {
        display: flex;
        justify-content: space-between;

        .up {
            background-color: rgba(255, 0, 0, 0.1);
            color: red;
        }

        .down {
            background-color: rgba(83, 114, 246, 0.1);
            color: ${prop => prop.theme.colors.themeColor};
        }

        & li:first-of-type {
            & strong {
                font-size: ${prop => prop.theme.fontSize.subTitle};
            }
        }

        & li:last-of-type {
            & span {
                color: ${prop => prop.theme.colors.halfBlack};
            }

            & button[type='button'] {
                margin-left: 1rem;
                border-color: transparent;
                border-radius: 0.4rem;

                & svg {
                    font-weight: 600;
                    vertical-align: top;
                }
            }
        }
    }

    & dl {
        display: flex;
        justify-content: space-between;
        border-radius: 1rem;
        padding: 1.2rem 1rem;
        margin-top: 1rem;
        background-color: ${prop => prop.theme.colors.white};

        & dt {
            font-size: ${prop => prop.theme.fontSize.base};
            color: ${prop => prop.theme.colors.halfBlack};
        }

        & dd {
            font-size: ${prop => prop.theme.fontSize.subTitle};
            color: ${prop => prop.theme.colors.black};
            font-weight: 600;
        }
    }
`;
