import { createElement, PropsWithChildren, HTMLAttributes } from 'react';
import { conditionalString, names } from './utils';
import '@styles/Container.css';

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  blur?: boolean;
  radius?: boolean;
  shadow?: boolean;
  defaultMargin?: boolean;
  defaultPadding?: boolean;
}

export default function Card(props: PropsWithChildren<ContainerProps>) {
  const p = {
    ...props,
    className: names(
      props.className || '',
      'container',
      conditionalString(blur, 'blur'),
      conditionalString(props.radius, 'radius'),
      conditionalString(props.shadow, 'shadow'),
      conditionalString(props.defaultMargin != false, 'defaultMargin'),
      conditionalString(props.defaultPadding != false, 'defaultPadding'),
    )
  };
  delete p['blur'];
  delete p['radius'];
  delete p['shadow'];
  delete p['defaultMargin'];
  delete p['defaultPadding'];
  return createElement('div', p, props.children);
}
