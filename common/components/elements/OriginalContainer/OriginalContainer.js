// REACT, STYLE, STORIES & COMPONENT
import React, { createContext, useContext, useReducer, useState } from 'react';
import CodeContext from '../../../../context/state';
import styles from './OriginalContainer.module.css';

// COMPONENT: OriginalContainer
const OriginalContainer = (props) => {
    const { code, setCode, title, setTitle, trigger, setTrigger } = useContext(CodeContext);
    const [totalSnippets, setTotalSnippets] = useState(0)

    // Verify if any code was input into original container
    const didUserStartTyping = () => {
        if (code.length > 0) {
            return true;
        }
        return false;
    }

    const detectKeyPress = (e) => {
        const keyCode = e.key;
        if (keyCode === 'Tab') {    // TAB
            e.preventDefault();
            const TAB_SIZE = 4;
            // Insert TAB element
            // FIX: Tab is only added at the end of the Code
            const currentCode = insertAtCursor(' '.repeat(TAB_SIZE));
            setCode(currentCode)
        } else if (e.ctrlKey && keyCode === ' ') {  // CTRL + SPACE
            e.preventDefault();
            const currentCode = insertAtCursor('{$' + totalSnippets + ':placeholder}');
            setCode(currentCode)
            // Number of snippets needs to be counted to show different data
            setTotalSnippets(totalSnippets + 1);
        }
    }

    const insertAtCursor = (myValue, myField = document.activeElement) => {
        //IE support
        if (document.selection) {
            myField.focus();
            sel = document.selection.createRange();
            sel.text = myValue;
        }
        //MOZILLA and others
        else if (myField.selectionStart || myField.selectionStart == '0') {
            var startPos = myField.selectionStart;
            var endPos = myField.selectionEnd;
            myField.value = myField.value.substring(0, startPos)
                + myValue
                + myField.value.substring(endPos, myField.value.length);
            myField.selectionStart = startPos + myValue.length;
            myField.selectionEnd = startPos + myValue.length;
        } else {
            myField.value += myValue;
        }
        return myField.value;
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
                onKeyDown={(e) => detectKeyPress(e)}
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