// REACT, STYLE, STORIES & COMPONENT
import React, { useContext, useState } from 'react';
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
    return JSON.stringify(result, null, 4).replace('$', ' \\$').replace('\${', '${');
}


// COMPONENT: ResultContainer
const ResultContainer = (props) => {
    const { code, setCode, title, setTitle, trigger, setTrigger } = useContext(CodeContext);
    const [copied, setCopied] = useState(false)

    // Convert user input code into the snippet
    let resultCode = generateCode(title, trigger, code);

    const copyCodeToClipboard = (code) => {
        navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 2000)
    }

    // RENDER: ResultContainer
    return (
        <div className={styles.container} onClick={() => copyCodeToClipboard(resultCode)}>
            <p className={styles.copyTip}>{copied ? "Copied to clipboard" : "Click to copy"}</p>
            {/* ! Don't allow users to edit result code */}
            <textarea className={styles.result} value={resultCode} onChange={() => { }} />
        </div>
    );
};

export default ResultContainer;