// REACT, STYLE, STORIES & COMPONENT
import React, { useContext } from 'react';
import styles from './ResultContainer.module.css';
import CodeContext from '../../../../context/state';

const inputUserTitle = () => {

}

const generateCode = (title, trigger, originalCode) => {
    const result = {
        [title]: {
            "prefix": trigger,
            "body": [
                originalCode
            ]
        }
    }

    // Print object as a readable JSON
    return JSON.stringify(result, null, 2);
}

// COMPONENT: ResultContainer
const ResultContainer = (props) => {
    const { code, setCode, title, setTitle, trigger, setTrigger } = useContext(CodeContext);

    // Convert user input code into the snippet
    let resultCode = generateCode(title, trigger, code);

    // RENDER: ResultContainer
    return (
        <div className={styles.container}>
            {/* ! Don't allow users to edit result code */}
            <textarea className={styles.result} value={resultCode} onChange={() => { }} />
        </div>
    );
};

export default ResultContainer;