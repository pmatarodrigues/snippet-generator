// REACT, STYLE, STORIES & COMPONENT
import React, { useContext } from 'react';
import styles from './ResultContainer.module.css';
import CodeContext from '../../../../context/state';

const transformFunctionIntoString = (originalCode) => {
    const result = originalCode.split("\n");

    return result;
}

// Create JSON string with necessary data
const generateCode = (title, trigger, originalCode) => {
    const result = {
        [title]: {
            "prefix": trigger,
            "body": [
                transformFunctionIntoString(originalCode)
            ]
        }
    }

    // Print object as a readable JSON
    // Replace and escape each necessary character to be read by the editor (i.e: $ -> \$)
    return JSON.stringify(result, null, 4).replace(/\\/g, '').replace('$', '\\$');
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