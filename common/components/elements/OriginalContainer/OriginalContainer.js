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

    const detectKeyPress = (e) => {
        const keyCode = e.key;
        if (keyCode === 'Tab') {    // TAB
            e.preventDefault();
            const TAB_SIZE = 4;
            // Insert TAB element
            // FIX: Tab is only added at the end of the Code
            const currentCode = insertAtCursor(' '.repeat(TAB_SIZE));
            setCode(currentCode)
        } else if (e.ctrlKey && keyCode >= 0 && keyCode <= 9) {  // CTRL + [NUM]
            e.preventDefault();
            // Show pressed number as placeholder number
            const currentCode = insertAtCursor('${' + keyCode + ':placeholder}');
            setCode(currentCode)
            selectPlaceholderWord();
        }
    }

    const selectPlaceholderWord = (codeElement = document.activeElement) => {
        // "- 1" to avoid selecting the curly brace " } "
        var startPos = codeElement.selectionStart - 1;
        var endPos = startPos - "placeholder".length;

        // Select word "placeholder" to ease user input
        if (typeof (startPos) != "undefined") {
            codeElement.selectionStart = endPos;
            codeElement.selectionEnd = startPos;
        }
    }

    const insertAtCursor = (textToInsert, codeElement = document.activeElement) => {
        //IE support
        if (document.selection) {
            codeElement.focus();
            sel = document.selection.createRange();
            sel.text = textToInsert;
        }
        //MOZILLA and others
        else if (codeElement.selectionStart || codeElement.selectionStart == '0') {
            var startPos = codeElement.selectionStart;
            var endPos = codeElement.selectionEnd;
            codeElement.value = codeElement.value.substring(0, startPos)
                + textToInsert
                + codeElement.value.substring(endPos, codeElement.value.length);
            codeElement.selectionStart = startPos + textToInsert.length;
            codeElement.selectionEnd = startPos + textToInsert.length;
        } else {
            codeElement.value += textToInsert;
        }
        return codeElement.value;
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
            <p className={styles.hint}>
                {`Hint: Press CTRL + NUM [0-9] to add a placeholder like \$\{3\:placeholder}. `}
                <a className={styles.hint} href="https://code.visualstudio.com/docs/editor/userdefinedsnippets" target="_blank">{`Learn more.`}</a>
            </p>
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