import { ReactNode } from 'react';
import * as styles from './test.css';

export const Test = ({children}: {children: ReactNode}) => {
  return <div className={styles.root}>{children}</div>;
};
