import { useEffect, useState } from 'react';
import { API } from 'utils/api';
import { Card } from './Card';
import { ChartCardWrap } from './style';
import { EnumNumberString } from 'types/propsType';

const ClickCount = () => {
    const [getDayJson, setGetDayJson] = useState<string[]>([]);
    const [getClickCount, setGetClickCount] = useState<number[]>([]);

    const getJsonObject = async () => {
        const dayJsonResult = await API.get(`http://localhost:3001/days`);
        setGetDayJson(dayJsonResult.data);
        const clickCountJsonResult = await API.get(`http://localhost:3001/clickCount`);
        setGetClickCount(clickCountJsonResult.data);
    };

    useEffect(() => {
        getJsonObject();
    }, []);

    const today = new Date();
    const day = today.getDate() - 1;

    function getAverage(getClickCount: EnumNumberString) {
        return `${Math.floor(
            ((getClickCount[day - 1] - getClickCount[day]) / getClickCount[day]) * 100,
        )}%`;
    }
    const average = getAverage(getClickCount);
    const distinguish = String(average).includes('-');

    const caculrator = () => {
        const sum = `${getClickCount.reduce((acc, curr) => acc + curr, 0)}`;
        const str = `${' '}건`;
        const hap = Number(sum).toLocaleString() + str;
        return hap;
    };

    const total = caculrator();

    return (
        <ChartCardWrap>
            <Card.Title
                title={'클릭수'}
                average={average}
                distinguish={distinguish}
                total={total}
            ></Card.Title>
            <Card.Line data={getClickCount} labels={getDayJson}></Card.Line>
        </ChartCardWrap>
    );
};

export default ClickCount;
