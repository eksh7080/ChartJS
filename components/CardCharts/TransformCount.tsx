import { useEffect, useState } from 'react';
import { API } from 'utils/api';
import { Card } from './Card';
import { ChartCardWrap } from './style';
import { EnumNumberString } from 'types/propsType';

const TransformCount = () => {
    const [getDayJson, setGetDayJson] = useState<string[]>([]);
    const [getTransformCount, setGetTransformCount] = useState<number[]>([]);

    const getJsonObject = async () => {
        const dayJsonResult = await API.get(`http://localhost:3001/days`);
        setGetDayJson(dayJsonResult.data);
        const transformCountJsonResult = await API.get(`http://localhost:3001/transformCount`);
        setGetTransformCount(transformCountJsonResult.data);
    };

    useEffect(() => {
        getJsonObject();
    }, []);

    const today = new Date();
    const day = today.getDate() - 1;

    function getAverage(getTransformCount: EnumNumberString) {
        return `${Math.floor(
            ((getTransformCount[day - 1] - getTransformCount[day]) / getTransformCount[day]) * 100,
        )}%`;
    }
    const average = getAverage(getTransformCount);
    const distinguish = String(average).includes('-');

    const caculrator = () => {
        const sum = `${getTransformCount.reduce((acc, curr) => acc + curr, 0)}`;
        const str = `${' '}건`;
        const hap = Number(sum).toLocaleString() + str;
        return hap;
    };

    const total = caculrator();

    return (
        <ChartCardWrap>
            <Card.Title
                title={'전환수'}
                average={average}
                distinguish={distinguish}
                total={total}
            ></Card.Title>
            <Card.Line data={getTransformCount} labels={getDayJson}></Card.Line>
        </ChartCardWrap>
    );
};

export default TransformCount;
