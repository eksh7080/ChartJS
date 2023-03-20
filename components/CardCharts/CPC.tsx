import { useEffect, useState } from 'react';
import { API } from 'utils/api';
import { Card } from './Card';
import { ChartCardWrap } from './style';
import { EnumNumberString } from 'types/propsType';

const CPC = () => {
    const [getDayJson, setGetDayJson] = useState<string[]>([]);
    const [getCPC, setGetCPC] = useState<number[]>([]);

    const getJsonObject = async () => {
        const dayJsonResult = await API.get(`http://localhost:3001/days`);
        setGetDayJson(dayJsonResult.data);
        const CPCJsonResult = await API.get(`http://localhost:3001/CPC`);
        setGetCPC(CPCJsonResult.data);
    };

    useEffect(() => {
        getJsonObject();
    }, []);

    const today = new Date();
    const day = today.getDate() - 1;

    function getAverage(getCPC: EnumNumberString) {
        return `${Math.floor(((getCPC[day - 1] - getCPC[day]) / getCPC[day]) * 100)}%`;
    }
    const average = getAverage(getCPC);
    const distinguish = String(average).includes('-');

    const caculrator = () => {
        const sum = `${getCPC.reduce((acc, curr) => acc + curr, 0)}`;
        const str = `${' '}%`;
        const hap = Number(sum).toLocaleString() + str;
        return hap;
    };

    const total = caculrator();

    return (
        <ChartCardWrap>
            <Card.Title
                title={'CPC'}
                average={average}
                distinguish={distinguish}
                total={total}
            ></Card.Title>
            <Card.Line data={getCPC} labels={getDayJson}></Card.Line>
        </ChartCardWrap>
    );
};

export default CPC;
