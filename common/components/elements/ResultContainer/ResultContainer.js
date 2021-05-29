// REACT, STYLE, STORIES & COMPONENT
import React, { useContext } from 'react';
import styles from './ResultContainer.module.css';
import CodeContext from '../../../../context/state';

const generateCode = (originalCode) => {
    return originalCode + "------";
}

// COMPONENT: ResultContainer
const ResultContainer = (props) => {
    const { code, setCode } = useContext(CodeContext);

    // Convert user input code into the snippet
    let resultCode = generateCode(code);

    // RENDER: ResultContainer
    return (
        <div className={styles.container}>
            <textarea className={styles.result} value={resultCode} />
        </div>
    );
};

export default ResultContainer;