import { CardTitle } from './CardTitle';
import { CardLine } from './CardLine';
import { ChildrenProps } from 'types/propsType';

const Card = ({ children }: ChildrenProps) => {
    return <>{children}</>;
};

Card.Title = CardTitle;
Card.Line = CardLine;

export { Card };
