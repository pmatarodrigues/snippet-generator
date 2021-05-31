// REACT, STYLE, STORIES & COMPONENT
import React from 'react';
import styles from './Copyright.module.css';

// COMPONENT: Copyright
const Copyright = (props) => {

    // RENDER: Copyright
    return (
        // TODO: Add icon and possibility to open in new tab
        <div className={styles.copyright}>
            <a href="https://github.com/pmatarodrigues/snippet-generator" target="_blank">
                Source Code
            </a>
            <a href="https://pmatarodrigues.com" target="_blank">
                by Pedro Mata Rodrigues
            </a>
        </div>
    );
};

export default Copyright;