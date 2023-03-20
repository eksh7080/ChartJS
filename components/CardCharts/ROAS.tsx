import { useEffect, useState } from 'react';
import { API } from 'utils/api';
import { Card } from './Card';
import { ChartCardWrap } from './style';
import { EnumNumberString } from 'types/propsType';

const ROAS = () => {
    const [getDayJson, setGetDayJson] = useState<string[]>([]);
    const [getROAS, setGetROAS] = useState<number[]>([]);

    const getJsonObject = async () => {
        const dayJsonResult = await API.get(`http://localhost:3001/days`);
        setGetDayJson(dayJsonResult.data);
        const ROASJsonResult = await API.get(`http://localhost:3001/ROAS`);
        setGetROAS(ROASJsonResult.data);
    };

    useEffect(() => {
        getJsonObject();
    }, []);

    const today = new Date();
    const day = today.getDate() - 1;

    function getAverage(getROAS: EnumNumberString) {
        return `${Math.floor(((getROAS[day - 1] - getROAS[day]) / getROAS[day]) * 100)}%`;
    }
    const average = getAverage(getROAS);
    const distinguish = String(average).includes('-');

    const caculrator = () => {
        const sum = `${getROAS.reduce((acc, curr) => acc + curr, 0)}`;
        const str = `${' '}%`;
        const hap = Number(sum).toLocaleString() + str;
        return hap;
    };

    const total = caculrator();

    return (
        <ChartCardWrap>
            <Card.Title
                title={'ROAS'}
                average={average}
                distinguish={distinguish}
                total={total}
            ></Card.Title>
            <Card.Line data={getROAS} labels={getDayJson}></Card.Line>
        </ChartCardWrap>
    );
};

export default ROAS;
