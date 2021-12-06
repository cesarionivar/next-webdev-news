import styles from '../styles/Layout.module.css';
import { Header } from './Header';
import { Nav } from './Nav';

export const Layout = ({ children }) => {
  return (
    <>
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
