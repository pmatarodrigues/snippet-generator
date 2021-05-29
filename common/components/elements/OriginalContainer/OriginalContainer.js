// REACT, STYLE, STORIES & COMPONENT
import React, { createContext, useContext, useReducer, useState } from 'react';
import CodeContext from '../../../../context/state';
import styles from './OriginalContainer.module.css';

// COMPONENT: OriginalContainer
const OriginalContainer = (props) => {
    const { code, setCode, title, setTitle, trigger, setTrigger } = useContext(CodeContext);

    // Verify if any code was input into original container
    const didUserStartTyping = () => {
        if (code.length > 0) {
            return true;
        }
        return false;
    }

    const addTabCharacter = (e) => {
        const keyCode = e.key;
        if (keyCode === 'Tab') {
            e.preventDefault();
            const TAB_SIZE = 4;
            // Insert TAB element
            // FIX: Tab is only added at the end of the Code
            setCode(code + ' '.replaceAll(TAB_SIZE))
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.snippetInfo}>
                <input
                    className={styles.snippetTitle}
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title" />
                <input
                    className={styles.snippetPrefix}
                    type="text"
                    value={trigger}
                    onChange={(e) => setTrigger(e.target.value)}
                    placeholder="Trigger" />
            </div>
            <textarea
                className={styles.originalInput}
                onKeyDown={(e) => addTabCharacter(e)}
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