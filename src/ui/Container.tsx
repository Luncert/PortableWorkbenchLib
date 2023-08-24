
import { PropsWithChildren, DOMAttributes, HTMLAttributes } from 'react';
import styles from './Container.module.scss';
import { conditionalString, names } from './utils';

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  blur?: boolean;
  radius?: boolean;
  shadow?: boolean;
}

export default function Card(props: PropsWithChildren<ContainerProps>) {
  return (
    <div className={names(
      props.className,
      styles.container,
      conditionalString(blur, styles.blur),
      conditionalString(props.radius, styles.radius),
      conditionalString(props.shadow, styles.shadow),
    )}>{props.children}</div>
  )
}
