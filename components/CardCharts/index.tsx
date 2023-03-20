import { ChartCardContainer } from './style';
import Exposure from './Exposure';
import TransformCount from './TransformCount';
import ClickCount from './ClickCount';
import TransformFee from './TransformFee';
import CPC from './CPC';
import CPM from './CPM';
import CTR from './CTR';
import ROAS from './ROAS';
import AdverTisement from './AdverTisement';
import { useAppSelector } from 'state/store';
import { ReactElement } from 'react';

const AllCard = () => {
    const titleValue = useAppSelector(state => state.state.title);

    const components = [
        { key: '광고비', value: <AdverTisement /> },
        { key: '노출수', value: <Exposure /> },
        { key: '전환수', value: <TransformCount /> },
        { key: '클릭수', value: <ClickCount /> },
        { key: '전환매출액', value: <TransformFee /> },
        { key: 'CPC', value: <CPC /> },
        { key: 'CPM', value: <CPM /> },
        { key: 'CTR', value: <CTR /> },
        { key: 'ROAS', value: <ROAS /> },
    ];

    const filterValue = components.map(com => com.value);
    const filterComponent = components.filter(com => com.key !== titleValue);

    return (
        <ChartCardContainer>
            {filterComponent.map((tem: { key: string; value: ReactElement }, idx: number) => (
                <div key={idx}>{tem.value}</div>
            ))}
        </ChartCardContainer>
    );
};

export default AllCard;
