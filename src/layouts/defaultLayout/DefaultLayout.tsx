import styles from "./defaultLayout.module.scss"
import * as React from 'react';

interface Props {
    children: React.ReactNode
}

const DefaultLayout: React.FunctionComponent<Props> = (props: Props) => {
    return <>
        <div className={styles.draggable__menu} draggable >
            <h1>△</h1>
        </div>
        <div id="page-content-wrapper">
            {props.children}
        </div>
    </>
}

export default DefaultLayout;