import AllCharts from 'components/AllCharts';
import AllCard from 'components/CardCharts';
import DataTable from 'components/DataTable';
import { API } from 'utils/api';
import { useAppDispatch, useAppSelector } from 'state/store';
import { NumberJsonArray } from 'types/propsType';
import { InferGetServerSidePropsType } from 'next';

export default function Home({ result }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
            <AllCharts />
            <AllCard />
            <DataTable result={result} />
        </>
    );
}

export async function getServerSideProps() {
    const response = await fetch('http://localhost:3001/all');
    const result: NumberJsonArray = await response.json();

    return {
        props: {
            result,
        },
    };
}
