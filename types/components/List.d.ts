import { PropsWithChildren, HTMLAttributes } from 'react';
import './List.scss';
interface ListProps extends HTMLAttributes<HTMLDivElement> {
    onSelected?: (name: string, index: number) => void;
}
interface ListItemProps {
    name?: string;
    isDefault?: boolean;
}
export default function List({ className, onSelected, children }: PropsWithChildren<ListProps>): import("react/jsx-runtime").JSX.Element;
export declare function ListItem({ name, isDefault, children }: PropsWithChildren<ListItemProps>): import("react/jsx-runtime").JSX.Element;
export {};
