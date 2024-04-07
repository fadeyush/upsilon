import { FC } from "react";

export enum Pages {
    products = '/products',
    productItem = '/products/:id'
}

export interface RoutProperties {
    element: FC;
    path: string;
}