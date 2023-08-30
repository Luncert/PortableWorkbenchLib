
import { createElement, PropsWithChildren, HTMLAttributes } from 'react';
import { conditionalString, names } from './utils';
import styles from './Container.module.scss';

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
      styles.container,
      conditionalString(blur, styles.blur),
      conditionalString(props.radius, styles.radius),
      conditionalString(props.shadow, styles.shadow),
      conditionalString(props.defaultMargin != false, styles.defaultMargin),
      conditionalString(props.defaultPadding != false, styles.defaultPadding),
    )
  };
  delete p['blur'];
  delete p['radius'];
  delete p['shadow'];
  delete p['defaultMargin'];
  delete p['defaultPadding'];
  return createElement('div', p, props.children);
}
