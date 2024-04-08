export interface ButtonProps {
    children?: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

export interface ButtonArrProps {
    count: number;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>, count:number) => void;
}