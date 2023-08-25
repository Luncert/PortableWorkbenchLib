import React, { HTMLAttributes, PropsWithChildren, createRef, useState } from "react";
import anime from 'animejs';

type AnimatorEvent = 'mouseEnter' | 'mouseLeave' | 'mouseDown' | 'mouseUp' | 'focus' | 'blur';
export type AnimatorEventHandler<T> = (event: AnimatorEvent, ref: T, state: ElementState) => void;

interface ElementState {
  hover: boolean;
  focus: boolean;
  active: boolean;
}

interface AnimatorProps<T> extends HTMLAttributes<T> {
  as?: string;
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

  const newProps = {
    ...props,
    ref,
    onMouseEnter: () => {
      setHovered(true);
      handler('mouseEnter', ref.current, state);
    },
    onMouseLeave: () => {
      setHovered(false);
      handler('mouseLeave', ref.current, state);
    },
    onMouseDown: () => {
      setActive(true);
      handler('mouseDown', ref.current, state);
    },
    onMouseUp: () => {
      setActive(false);
      handler('mouseUp', ref.current, state);
    },
    onFocus: () => {
      setFocused(true);
      handler('focus', ref.current, state);
    },
    onBlur: () => {
      setFocused(false);
      handler('blur', ref.current, state);
    },
  };
  delete newProps['as'];
  delete newProps['bindRef'];
  delete newProps['handler'];

  return React.createElement(as || 'div', newProps, children);
}

export function animate({
  target,
  color,
  backgroundColor,
  duration = 100,
}: {
  target: any
  color?: any;
  backgroundColor?: any;
  duration?: number;
}) {
  const props = {
    targets: target,
    easing: 'easeInOutSine',
    duration,
  } as any;
  if (color) {
    props.color = color;
  }
  if (backgroundColor) {
    props.backgroundColor = backgroundColor;
  }
  anime(props);
}
