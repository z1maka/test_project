import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../static/styles/main.scss';

const Nav = () => {
    return (
        <nav className={styles.navigation}>
            <Link to="/">Home</Link>
            <Link to="/another">Another Page</Link>
        </nav>
    );
};

export default Nav;
