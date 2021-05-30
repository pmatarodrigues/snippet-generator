// REACT, STYLE, STORIES & COMPONENT
import React from 'react';
import styles from './Copyright.module.css';

// COMPONENT: Copyright
const Copyright = (props) => {

    // RENDER: Copyright
    return (
        // TODO: Add icon and possibility to open in new tab
        <a href="https://pmatarodrigues.com">
            <div className={styles.copyright}>
                by Pedro Mata Rodrigues
            </div>
        </a>
    );
};

export default Copyright;