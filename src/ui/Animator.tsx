import React, { HTMLAttributes, PropsWithChildren, createRef, useEffect, useState } from "react";
import anime from 'animejs';

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

export default function Animator<T>(props: PropsWithChildren<AnimatorProps<T>>) {
  const { as, handler, children } = props;
  const ref: React.RefObject<T> = props.bindRef ? props.bindRef : createRef();
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const state = {focus: focused, hover: hovered, active};

  useEffect(() => {
    setActive(props.isActive || false);
  }, [props.isActive]);

  const newProps: any = {
    ...props,
    ref,
    onMouseEnter: () => {
      if (handler('mouseEnter', ref.current as T, state)) {
        setHovered(true);
      }
    },
    onMouseLeave: () => {
      if (handler('mouseLeave', ref.current as T, state)) {
        setHovered(false);
      }
    },
    onMouseDown: () => {
      if (handler('mouseDown', ref.current as T, state)) {
        setActive(true);
      }
    },
    onMouseUp: () => {
      if (handler('mouseUp', ref.current as T, state)) {
        console.log(1)
        setActive(false);
      }
    },
    onFocus: () => {
      if (handler('focus', ref.current as T, state)) {
        setFocused(true);
      }
    },
    onBlur: () => {
      if (handler('blur', ref.current as T, state)) {
        setFocused(false);
      }
    },
  };
  delete newProps['as'];
  delete newProps['isActive'];
  delete newProps['bindRef'];
  delete newProps['handler'];

  return React.createElement(as || 'div', newProps, children);
}

interface AnimateProps extends React.CSSProperties {
  targets: any
  easing?: string;
  duration?: number;
}

export function animate(props: AnimateProps) {
  anime({
    easing: 'easeInOutSine',
    duration: 100,
    ...props,
  });
}
