// REACT, STYLE, STORIES & COMPONENT
import React from 'react';
import styles from './ResultContainer.module.css';

// COMPONENT: ResultContainer
const ResultContainer = (props) => {

    // RENDER: ResultContainer
    return (
        <div className={styles.container}>
            <textarea className={styles.result} />
        </div>
    );
};

export default ResultContainer;