import { useEffect, useState } from 'react';
import { API } from 'utils/api';
import { Card } from './Card';
import { ChartCardWrap } from './style';
import { EnumNumberString } from 'types/propsType';

const CTR = () => {
    const [getDayJson, setGetDayJson] = useState<string[]>([]);
    const [getCTR, setGetCTR] = useState<number[]>([]);

    const getJsonObject = async () => {
        const dayJsonResult = await API.get(`http://localhost:3001/days`);
        setGetDayJson(dayJsonResult.data);
        const CTRJsonResult = await API.get(`http://localhost:3001/CTR`);
        setGetCTR(CTRJsonResult.data);
    };

    useEffect(() => {
        getJsonObject();
    }, []);

    const today = new Date();
    const day = today.getDate() - 1;

    function getAverage(getCTR: EnumNumberString) {
        return `${Math.floor(((getCTR[day - 1] - getCTR[day]) / getCTR[day]) * 100)}%`;
    }
    const average = getAverage(getCTR);
    const distinguish = String(average).includes('-');

    const caculrator = () => {
        const sum = `${getCTR.reduce((acc, curr) => acc + curr, 0)}`;
        const str = `${' '}원`;
        const hap = Number(sum).toLocaleString() + str;
        return hap;
    };

    const total = caculrator();

    return (
        <ChartCardWrap>
            <Card.Title
                title={'CTR'}
                average={average}
                distinguish={distinguish}
                total={total}
            ></Card.Title>
            <Card.Line data={getCTR} labels={getDayJson}></Card.Line>
        </ChartCardWrap>
    );
};

export default CTR;
