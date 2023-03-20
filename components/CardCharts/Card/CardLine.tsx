import { Line } from 'react-chartjs-2';
import { CardLineProps } from 'types/propsType';

const CardLine = ({ data, labels }: CardLineProps) => {
    const today = new Date();
    const day = today.getDate() - 1;

    const cardData = {
        labels: labels,
        datasets: [
            {
                data: data,
                fill: true,
                backgroundColor: `rgba(83,114,246,0.1)`,
                borderColor: `rgb(83, 114, 246)`,
            },
        ],
    };

    const cardOptions = {
        responsive: true,

        plugins: {
            tooltip: {
                enabled: true,
                mode: 'index',
                intersect: false,
                position: 'average',
                backgroundColor: 'rgba(0,0,0,0.5)',
                padding: 10,
                bodySpacing: 5,
                usePointStyle: true,
            },
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                axis: 'x',
                max: day,
            },
        },

        elements: {
            point: {
                radius: 0,
            },
        },
    };

    return <Line data={cardData} options={cardOptions} />;
};

export { CardLine };
