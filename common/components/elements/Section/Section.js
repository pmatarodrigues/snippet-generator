// REACT, STYLE, STORIES & COMPONENT
import React from 'react';
import OriginalContainer from '../OriginalContainer/OriginalContainer';
import ResultContainer from '../ResultContainer/ResultContainer';
import styles from './Section.module.css';

// COMPONENT: Section
const Section = (props) => {

    // RENDER: Section
    return (
        <div className={styles.section}>
            {
                props.position === "original" ? (
                    <OriginalContainer />) : (
                    <ResultContainer />
                )

            }
        </div >
    );
};

export default Section;