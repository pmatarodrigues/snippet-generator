// REACT, STYLE, STORIES & COMPONENT
import React from 'react';
import styles from './Navbar.module.css';

// COMPONENT: Navbar
const Navbar = (props) => {
    // PROPS
    const { children } = props;

    // COMPONENT/UI STATE and REFS

    // METHODS

    // RENDER: Navbar
    return (
        <div className={styles.navbar}>
            <h2 className={styles.title}>Snippet Generator</h2>
            <h2 className={styles.subtitle}>by pmatarodrigues</h2>
        </div>
    );
};

export default Navbar;