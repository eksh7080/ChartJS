import { useEffect, useState } from 'react';
import { API } from 'utils/api';
import { Card } from './Card';
import { ChartCardWrap } from './style';
import { EnumNumberString } from 'types/propsType';

const AdverTisement = () => {
    const [getDayJson, setGetDayJson] = useState<string[]>([]);
    const [getAdverTisement, setGetAdverTisement] = useState<number[]>([]);

    const getJsonObject = async () => {
        const dayJsonResult = await API.get(`http://localhost:3001/days`);
        setGetDayJson(dayJsonResult.data);
        const adverTisementJsonResult = await API.get(`http://localhost:3001/advertisement`);
        setGetAdverTisement(adverTisementJsonResult.data);
    };

    useEffect(() => {
        getJsonObject();
    }, []);

    const today = new Date();
    const day = today.getDate() - 1;

    function getAverage(getAdverTisement: EnumNumberString) {
        return `${Math.floor(
            ((getAdverTisement[day - 1] - getAdverTisement[day]) / getAdverTisement[day]) * 100,
        )}%`;
    }

    const average = getAverage(getAdverTisement);
    const distinguish = String(average).includes('-');

    const caculrator = () => {
        const sum: number | string = getAdverTisement.reduce(
            (acc: number, curr: string) => acc + curr,
            0,
        );
        const str = `${' '}건`;
        const hap = Number(sum).toLocaleString() + str;
        return hap;
    };

    const total = caculrator();

    return (
        <ChartCardWrap>
            <Card.Title
                title={'광고비'}
                average={average}
                distinguish={distinguish}
                total={total}
            ></Card.Title>
            <Card.Line data={getAdverTisement} labels={getDayJson}></Card.Line>
        </ChartCardWrap>
    );
};

export default AdverTisement;
