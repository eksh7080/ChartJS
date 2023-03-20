import { useEffect, useState } from 'react';
import { API } from 'utils/api';
import { Card } from './Card';
import { ChartCardWrap } from './style';
import { EnumNumberString } from 'types/propsType';

const CPM = () => {
    const [getDayJson, setGetDayJson] = useState<string[]>([]);
    const [getCPM, setGetCPM] = useState<number[]>([]);

    const getJsonObject = async () => {
        const dayJsonResult = await API.get(`http://localhost:3001/days`);
        setGetDayJson(dayJsonResult.data);
        const CPMJsonResult = await API.get(`http://localhost:3001/CPM`);
        setGetCPM(CPMJsonResult.data);
    };

    useEffect(() => {
        getJsonObject();
    }, []);

    const today = new Date();
    const day = today.getDate() - 1;

    function getAverage(getCPM: EnumNumberString) {
        return `${Math.floor(((getCPM[day - 1] - getCPM[day]) / getCPM[day]) * 100)}%`;
    }
    const average = getAverage(getCPM);
    const distinguish = String(average).includes('-');

    const caculrator = () => {
        const sum = `${getCPM.reduce((acc, curr) => acc + curr, 0)}`;
        const str = `${' '}원`;
        const hap = Number(sum).toLocaleString() + str;
        return hap;
    };

    const total = caculrator();

    return (
        <ChartCardWrap>
            <Card.Title
                title={'CPM'}
                average={average}
                distinguish={distinguish}
                total={total}
            ></Card.Title>
            <Card.Line data={getCPM} labels={getDayJson}></Card.Line>
        </ChartCardWrap>
    );
};

export default CPM;
