import styled from '@emotion/styled';

export const AllChartContainer = styled.section`
    max-width: 100%;
    border: 1px solid #d3d3d3;
    margin-top: 1rem;
    border-radius: 1rem;
    padding: 4rem 2rem 1rem 2rem;
`;

export const ChoiceBtnTitle = styled.div`
    padding-bottom: 2rem;

    & ul {
        display: flex;

        & li:first-of-type {
            & button[type='button'] {
                color: ${prop => prop.theme.colors.themeColor};
                text-decoration: underline;
            }
        }

        & li {
            & button[type='button'] {
                background-color: transparent;
                border: 0;
                font-size: ${prop => prop.theme.fontSize.samiBig};
                color: rgba(0, 0, 0, 0.3);
                font-weight: 600;
            }
        }
    }
`;

export const ChoiceSelectTitle = styled.div`
    max-width: 100%;
    min-height: 4rem;
    padding-bottom: 2rem;

    & ul {
        display: flex;
        justify-content: space-between;
        padding: 2rem;
        background-color: #f4f4f4;
        border-radius: 1rem;

        & li:first-of-type {
            width: 20%;
        }

        & li {
            & select {
                font-size: ${prop => prop.theme.fontSize.samiBig};
                font-weight: 600;
                background-color: transparent;
                padding-right: 1rem;
                width: 100%;
            }

            & strong {
                font-size: ${prop => prop.theme.fontSize.samiBig};
            }
        }
    }
`;
