import React, { HTMLAttributes, PropsWithChildren } from "react";
type AnimatorEvent = 'mouseEnter' | 'mouseLeave' | 'mouseDown' | 'mouseUp' | 'focus' | 'blur';
export type AnimatorEventHandler<T> = (event: AnimatorEvent, ref: T, state: ElementState) => boolean;
interface ElementState {
    hover: boolean;
    focus: boolean;
    active: boolean;
}
interface AnimatorProps<T> extends HTMLAttributes<T> {
    as?: string;
    isActive?: boolean;
    bindRef?: React.RefObject<T>;
    handler: AnimatorEventHandler<T>;
}
export default function Animator<T>(props: PropsWithChildren<AnimatorProps<T>>): React.DOMElement<any, Element>;
interface AnimateProps extends React.CSSProperties {
    targets: any;
    easing?: string;
    duration?: number;
}
export declare function animate(props: AnimateProps): void;
export {};
