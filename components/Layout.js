import styles from '../styles/Layout.module.css';
import { Header } from './Header';
import { Meta } from './Meta';
import { Nav } from './Nav';

export const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main classnames={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};
