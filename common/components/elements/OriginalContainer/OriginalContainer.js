// REACT, STYLE, STORIES & COMPONENT
import React, { createContext, useContext, useReducer, useState } from 'react';
import CodeContext from '../../../../context/state';
import styles from './OriginalContainer.module.css';

// COMPONENT: OriginalContainer
const OriginalContainer = (props) => {
    const { code, setCode } = useContext(CodeContext);

    // Verify if any code was input into original container
    const didUserStartTyping = () => {
        if (code.length > 0) {
            return true;
        }
        return false;
    }

    return (
        <div className={styles.container}>
            <textarea
                className={styles.originalInput}
                value={code}
                onChange={(e) => setCode(e.target.value)}
            />
            {
                didUserStartTyping() ? (
                    <div></div>
                ) : (
                    <h1 className={styles.initialText}>Start typing...</h1>
                )
            }
        </div>
    );
};

export default OriginalContainer;