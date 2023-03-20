import { useEffect, useState } from 'react';
import { EnumNumberString } from 'types/propsType';
import { API } from 'utils/api';
import { Card } from './Card';
import { ChartCardWrap } from './style';

const Exposure = () => {
    const [getDayJson, setGetDayJson] = useState<string[]>([]);
    const [getExposure, setGetExposure] = useState<number[]>([]);

    const getJsonObject = async () => {
        const dayJsonResult = await API.get(`http://localhost:3001/days`);
        setGetDayJson(dayJsonResult.data);
        const exposureJsonResult = await API.get(`http://localhost:3001/exposure`);
        setGetExposure(exposureJsonResult.data);
    };

    useEffect(() => {
        getJsonObject();
    }, []);

    const today = new Date();
    const day = today.getDate() - 1;

    function getAverage(getExposure: EnumNumberString) {
        return `${Math.floor(
            ((getExposure[day - 1] - getExposure[day]) / getExposure[day]) * 100,
        )}%`;
    }
    const average = getAverage(getExposure);
    const distinguish = String(average).includes('-');

    const caculrator = () => {
        const sum = `${getExposure.reduce((acc, curr) => acc + curr, 0)}`;
        const str = `${' '}건`;
        const hap = Number(sum).toLocaleString() + str;
        return hap;
    };

    const total = caculrator();

    return (
        <ChartCardWrap>
            <Card.Title
                title={'노출수'}
                average={average}
                distinguish={distinguish}
                total={total}
            ></Card.Title>
            <Card.Line data={getExposure} labels={getDayJson}></Card.Line>
        </ChartCardWrap>
    );
};

export default Exposure;
