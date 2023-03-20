import { ChangeEvent, useEffect, useState } from 'react';
import { API } from 'utils/api';
import { AllChartContainer, ChoiceBtnTitle, ChoiceSelectTitle } from './style';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
    Filler,
} from 'chart.js';
import { Chart, Bar } from 'react-chartjs-2';
import { useAppDispatch, useAppSelector } from 'state/store';
import { changeFetchData, changeTitle } from 'state/slice/stateSlice';
import { NumberJsonArray } from 'types/propsType';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
);

const AllCharts = () => {
    const [getAdverTiseMent, setGetAdverTiseMent] = useState<string[]>([]);
    const [getDayLabels, setGetDayLabels] = useState<string[]>([]);
    const [getAllJsonData, setGetAllJsonData] = useState<NumberJsonArray>({
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
    const [changeChartData, setChangeChartData] = useState<number[]>([]);

    const titleValue = useAppSelector(state => state.state.title);
    const totalPoint = useAppSelector(state => state.state.point);
    const dispatch = useAppDispatch();

    const getAllFetchJson = async () => {
        const dayJsonResult = await API.get(`http://localhost:3001/days`);
        setGetDayLabels(dayJsonResult.data);

        switch (titleValue) {
            case '광고비': {
                const allData = await API.get(`http://localhost:3001/all`);
                setChangeChartData(allData.data.advertisement);
                break;
            }
            case '노출수': {
                const allData = await API.get(`http://localhost:3001/all`);
                setChangeChartData(allData.data.exposure);
                break;
            }
            case '전환수': {
                const allData = await API.get(`http://localhost:3001/all`);
                setChangeChartData(allData.data.transformCount);
                break;
            }
            case '클릭수': {
                const allData = await API.get(`http://localhost:3001/all`);
                setChangeChartData(allData.data.clickCount);
                break;
            }
            case '전환매출액': {
                const allData = await API.get(`http://localhost:3001/all`);
                setChangeChartData(allData.data.transformFee);
                break;
            }
            case 'CPC': {
                const allData = await API.get(`http://localhost:3001/all`);
                setChangeChartData(allData.data.CPC);
                break;
            }
            case 'CPM': {
                const allData = await API.get(`http://localhost:3001/all`);
                setChangeChartData(allData.data.CPM);
                break;
            }
            case 'CTR': {
                const allData = await API.get(`http://localhost:3001/all`);
                setChangeChartData(allData.data.CTR);
                break;
            }
            case 'ROAS': {
                const allData = await API.get(`http://localhost:3001/all`);
                setChangeChartData(allData.data.ROAS);
                break;
            }
        }
    };

    useEffect(() => {
        getAllFetchJson();
    }, [titleValue, dispatch]);

    // 차트에 그려질 데이터 및 style 커스텀
    const chartData = {
        labels: getDayLabels,
        datasets: [
            {
                label: titleValue,
                data: changeChartData,
                borderRadius: 4,
                backgroundColor: 'rgba(83, 114, 246, 0.5)',
                hoverBackgroundColor: 'rgba(83, 114, 246, 1)',
            },
        ],
    };

    // 차트에 관련된 옵션 커스텀
    const chartOptions = {
        maxBarThickness: 15,
        plugins: {
            tooltip: {
                enabled: true,
                backgroundColor: `rgba(0,0,0,0.5)`,

                usePointStyle: true,
                callbacks: {
                    label: (context: { raw: number }): string => {
                        // 툴팁에서 x축 값이 어떻게 표시될지 설정
                        let label = context.raw + '원';
                        return label;
                    },
                },
            },
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    backgroundColor: '#5372f6',

                    font: {
                        weight: '600',
                    },
                },
            },
        },
        scales: {
            x: {
                axis: 'x',
                grid: {
                    // x축을 기준으로 그려지는 선(가로)에 대한 설정입니다.
                    display: false,
                },
            },
            y: {
                axis: 'y',
                min: 0,

                grid: {
                    // y축을 기준으로 그려지는 선(세로선)에 대한 설정입니다.
                    display: true, // 선이 아예 안 그려지게 됩니다.
                },
            },
        },
    };
    return (
        <AllChartContainer style={{ backgroundColor: '#fff' }}>
            <ChoiceBtnTitle>
                <ul>
                    <li>
                        <button type="button">전체</button>
                    </li>
                    <li>
                        <button type="button">파워 링크</button>
                    </li>
                    <li>
                        <button type="button">쇼핑 검색</button>
                    </li>
                    <li>
                        <button type="button">파워 컨텐츠</button>
                    </li>
                    <li>
                        <button type="button">브랜드/신제품 검색</button>
                    </li>
                    <li>
                        <button type="button">플레이스</button>
                    </li>
                </ul>
            </ChoiceBtnTitle>
            <ChoiceSelectTitle>
                <ul>
                    <li>
                        <select
                            onChange={e => dispatch(changeTitle(e.target.value))}
                            defaultValue={titleValue}
                        >
                            <option value="광고비">광고비</option>
                            <option value="노출수">노출수</option>
                            <option value="전환수">전환수</option>
                            <option value="CTR">CTR</option>
                            <option value="CPC">CPC</option>
                            <option value="CPM">CRM</option>
                            <option value="ROAS">ROAS</option>
                        </select>
                    </li>
                    <li>
                        <strong>
                            {titleValue} 종합{' '}
                            {changeChartData.reduce((acc, curr) => acc + curr, 0).toLocaleString()}
                            {totalPoint}
                        </strong>
                    </li>
                </ul>
            </ChoiceSelectTitle>

            <Bar data={chartData} options={chartOptions} />
        </AllChartContainer>
    );
};

export default AllCharts;
