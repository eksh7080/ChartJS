import { ChartCardWrap, ChartCardTitle } from '../style';
import { AiOutlineArrowDown } from '@react-icons/all-files/ai/AiOutlineArrowDown';
import { AiOutlineArrowUp } from '@react-icons/all-files/ai/AiOutlineArrowUp';
import { CardTitleProps } from 'types/propsType';

const CardTitle = ({ title, average, distinguish, total }: CardTitleProps) => {
    return (
        <ChartCardTitle>
            <ul>
                <li>
                    <strong>{title}</strong>
                </li>
                <li>
                    <span>전일 기준</span>

                    {distinguish ? (
                        <button type="button" className="down">
                            {average} <AiOutlineArrowDown />
                        </button>
                    ) : (
                        <button type="button" className="up">
                            + {average} <AiOutlineArrowUp />
                        </button>
                    )}
                </li>
            </ul>
            <dl>
                <dt>총</dt>
                <dd>{total}</dd>
            </dl>
        </ChartCardTitle>
    );
};

export { CardTitle };
