// REACT, STYLE, STORIES & COMPONENT
import React from 'react';
import styles from './OriginalContainer.module.css';

// COMPONENT: OriginalContainer
const OriginalContainer = (props) => {

    return (
        <div className={styles.container}>
            <textarea className={styles.originalInput} />
        </div>
    );
};

export default OriginalContainer;