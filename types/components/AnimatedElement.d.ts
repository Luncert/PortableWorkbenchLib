import React, { Component, CSSProperties, DOMAttributes } from 'react';
interface AnimatedElementProps extends DOMAttributes<HTMLElement>, AnimationProps {
    /**
     * Highest priority as animation config.
     */
    animation?: AnimationProps;
    disable?: boolean;
    className?: string;
    getRef?: (ref: React.RefObject<HTMLDivElement>) => void;
    style?: CSSProperties | undefined;
    as?: keyof React.ReactHTML;
}
export interface AnimationProps {
    base?: AnimationConfig;
    focus?: AnimationConfig;
    active?: AnimationConfig;
    hover?: AnimationConfig;
}
interface AnimationConfig {
    color?: string;
    backgroundColor?: string;
}
export default class AnimatedElement extends Component<AnimatedElementProps> {
    protected ref: React.RefObject<HTMLDivElement>;
    private color;
    private backgroundColor;
    private hovered;
    private focused;
    private animationProps;
    private onMouseEnter;
    private onMouseLeave;
    private onMouseDown;
    private onMouseUp;
    private onFocus;
    private onBlur;
    constructor(props: AnimatedElementProps);
    componentWillUnmount(): void;
    detectColor(): void;
    protected wrapAimationToggle(animator: () => void): () => void;
    protected startFocusAnimation(): void;
    protected stopFocusAnimation(): void;
    protected startHoverAnimation(): void;
    protected stopHoverAnimation(): void;
    protected startActiveAnimation(): void;
    protected stopActiveAnimation(): void;
    private animate;
    render(): React.CElement<any, React.Component<any, any, any>>;
}
export {};
