import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { API } from 'utils/api';
import { NumberJsonArray } from 'types/propsType';
import { InferGetServerSidePropsType } from 'next';
import { getServerSideProps } from 'pages';

const TableContainer = styled.section`
    max-width: 100%;
    margin-top: 1rem;
    border: 1px solid #d3d3d3;
    border-radius: 1rem;
    background-color: ${prop => prop.theme.colors.white};
    min-height: 30rem;
    padding: 2rem;

    & h1 {
        width: calc(100% - 2rem);
        background-color: #f4f4f4;
        padding: 1rem;
        border-radius: 1rem;
        font-size: ${prop => prop.theme.fontSize.samiBig};
    }
`;

const TableDisplay = styled.table`
    width: 100%;
    margin-top: 2rem;
    font-size: ${prop => prop.theme.fontSize.subTitle};

    & thead {
        text-align: left;
        background-color: #f4f4f4;
        border: 1px solid transparent;
        border-radius: 1rem;
        & tr {
            & th {
                padding: 1rem;
            }
        }
    }

    & tbody {
        & tr {
            border-bottom: 1px solid #d3d3d3;
            & th {
                text-align: left;
                padding: 1rem 0 1rem 1rem;
                color: ${prop => prop.theme.colors.halfBlack};
            }

            & td {
                padding: 1rem 0 1rem 1rem;
            }
        }
    }
`;

interface TotalSum {
    advertisement: string;
    clickCount: string;
    exposure: string;
    transformCount: string;
    transformFee: string;
    CPC: string;
    CPM: string;
    CTR: string;
    ROAS: string;
}

const DataTable = ({ result }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const [getAllJson, setGetAllJson] = useState<NumberJsonArray>({
        advertisement: [],
        clickCount: [],
        exposure: [],
        transformCount: [],
        transformFee: [],
        CPC: [],
        CPM: [],
        CTR: [],
        ROAS: [],
    });
    const [getSumTotal, setGetSumTotal] = useState<TotalSum>({
        advertisement: '0',
        clickCount: '0',
        exposure: '0',
        transformCount: '0',
        transformFee: '0',
        CPC: '0',
        CPM: '0',
        CTR: '0',
        ROAS: '0',
    });
    const getJsonDatas = async () => {
        try {
            const allJsonData = await API.get(`http://localhost:3001/all`);
            setGetAllJson(allJsonData.data);
            setGetAllJson(result);
            // console.log(getAllJson, ' fetch');
        } catch (err: unknown) {
            console.log(err);
        }
    };

    const calculrator = () => {
        const advertisement = getAllJson?.advertisement
            .reduce((acc, curr) => acc + curr, 0)
            .toLocaleString();
        const exposure = getAllJson?.exposure.reduce((acc, curr) => acc + curr, 0).toLocaleString();
        const clickCount = getAllJson?.clickCount
            .reduce((acc, curr) => acc + curr, 0)
            .toLocaleString();
        const transformCount = getAllJson?.transformCount
            .reduce((acc, curr) => acc + curr, 0)
            .toLocaleString();
        const transformFee = getAllJson?.transformFee
            .reduce((acc, curr) => acc + curr, 0)
            .toLocaleString();
        const CPC = getAllJson?.CPC.reduce((acc, curr) => acc + curr, 0).toLocaleString();
        const CPM = getAllJson?.CPM.reduce((acc, curr) => acc + curr, 0).toLocaleString();
        const CTR = getAllJson?.CTR.reduce((acc, curr) => acc + curr, 0).toLocaleString();
        const ROAS = getAllJson?.ROAS.reduce((acc, curr) => acc + curr, 0).toLocaleString();

        setGetSumTotal({
            ...getSumTotal,
            advertisement: advertisement,
            exposure: exposure,
            clickCount: clickCount,
            transformCount: transformCount,
            transformFee: transformFee,
            CPC: CPC,
            CPM: CPM,
            CTR: CTR,
            ROAS: ROAS,
        });
    };

    useEffect(() => {
        getJsonDatas();
        // setGetAllJson(result);
        calculrator();
    }, [result, getAllJson]);

    return (
        <TableContainer>
            <h1>데이터 표</h1>
            <TableDisplay>
                <thead>
                    <tr>
                        <th>캠페인 유형</th>
                        <th>광고비</th>
                        <th>노출수</th>
                        <th>클릭수</th>
                        <th>전환수</th>
                        <th>전환매출액</th>
                        <th>CPC</th>
                        <th>CPM</th>
                        <th>CTR</th>
                        <th>ROAS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>파워링크</th>
                        <td>{getSumTotal.advertisement}원</td>
                        <td>{getSumTotal.exposure}건</td>
                        <td>{getSumTotal.clickCount}건</td>
                        <td>{getSumTotal.transformCount}건</td>
                        <td>{getSumTotal.transformFee}원</td>
                        <td>{getSumTotal.CPC}건</td>
                        <td>{getSumTotal.CPM}원</td>
                        <td>{getSumTotal.CTR}원</td>
                        <td>{getSumTotal.ROAS}%</td>
                    </tr>
                    <tr>
                        <th>쇼핑 검색</th>
                        <td>{getSumTotal.advertisement}원</td>
                        <td>{getSumTotal.exposure}건</td>
                        <td>{getSumTotal.clickCount}건</td>
                        <td>{getSumTotal.transformCount}건</td>
                        <td>{getSumTotal.transformFee}원</td>
                        <td>{getSumTotal.CPC}건</td>
                        <td>{getSumTotal.CPM}원</td>
                        <td>{getSumTotal.CTR}원</td>
                        <td>{getSumTotal.ROAS}%</td>
                    </tr>
                    <tr>
                        <th>파워 컨텐츠</th>
                        <td>{getSumTotal.advertisement}원</td>
                        <td>{getSumTotal.exposure}건</td>
                        <td>{getSumTotal.clickCount}건</td>
                        <td>{getSumTotal.transformCount}건</td>
                        <td>{getSumTotal.transformFee}원</td>
                        <td>{getSumTotal.CPC}건</td>
                        <td>{getSumTotal.CPM}원</td>
                        <td>{getSumTotal.CTR}원</td>
                        <td>{getSumTotal.ROAS}%</td>
                    </tr>
                    <tr>
                        <th>브랜드검색 / 신제품검색</th>
                        <td>{getSumTotal.advertisement}원</td>
                        <td>{getSumTotal.exposure}건</td>
                        <td>{getSumTotal.clickCount}건</td>
                        <td>{getSumTotal.transformCount}건</td>
                        <td>{getSumTotal.transformFee}원</td>
                        <td>{getSumTotal.CPC}건</td>
                        <td>{getSumTotal.CPM}원</td>
                        <td>{getSumTotal.CTR}원</td>
                        <td>{getSumTotal.ROAS}%</td>
                    </tr>
                    <tr>
                        <th>플레이스</th>
                        <td>{getSumTotal.advertisement}원</td>
                        <td>{getSumTotal.exposure}건</td>
                        <td>{getSumTotal.clickCount}건</td>
                        <td>{getSumTotal.transformCount}건</td>
                        <td>{getSumTotal.transformFee}원</td>
                        <td>{getSumTotal.CPC}건</td>
                        <td>{getSumTotal.CPM}원</td>
                        <td>{getSumTotal.CTR}원</td>
                        <td>{getSumTotal.ROAS}%</td>
                    </tr>
                </tbody>
            </TableDisplay>
        </TableContainer>
    );
};

export default DataTable;
