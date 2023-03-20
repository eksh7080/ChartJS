import { useEffect, useState } from 'react';
import { EnumNumberString } from 'types/propsType';
import { API } from 'utils/api';
import { Card } from './Card';
import { ChartCardWrap } from './style';

const TransformFee = () => {
    const [getDayJson, setGetDayJson] = useState<string[]>([]);
    const [getTransformFee, setGetTransformFee] = useState<number[]>([]);

    const getJsonObject = async () => {
        const dayJsonResult = await API.get(`http://localhost:3001/days`);
        setGetDayJson(dayJsonResult.data);
        const transformFeeJsonResult = await API.get(`http://localhost:3001/transformFee`);
        setGetTransformFee(transformFeeJsonResult.data);
    };

    useEffect(() => {
        getJsonObject();
    }, []);

    const today = new Date();
    const day = today.getDate() - 1;

    function getAverage(getTransformFee: EnumNumberString) {
        return `${Math.floor(
            ((getTransformFee[day - 1] - getTransformFee[day]) / getTransformFee[day]) * 100,
        )}%`;
    }
    const average = getAverage(getTransformFee);
    const distinguish = String(average).includes('-');

    const caculrator = () => {
        const sum = `${getTransformFee.reduce((acc, curr) => acc + curr, 0)}`;
        const str = `${' '}원`;
        const hap = Number(sum).toLocaleString() + str;
        return hap;
    };

    const total = caculrator();

    return (
        <ChartCardWrap>
            <Card.Title
                title={'전환매출액'}
                average={average}
                distinguish={distinguish}
                total={total}
            ></Card.Title>
            <Card.Line data={getTransformFee} labels={getDayJson}></Card.Line>
        </ChartCardWrap>
    );
};

export default TransformFee;
