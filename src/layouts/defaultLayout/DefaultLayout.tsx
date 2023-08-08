import styles from "./defaultLayout.module.scss"
import * as React from 'react';

interface Props {
    children: React.ReactNode
}

const DefaultLayout: React.FunctionComponent<Props> = (props: Props) => {
    return <div className={styles.Main__Layout}>
                <div className={styles.Topbar} draggable >
                    <div className={styles.Topbar__Left}>

                    </div>
                    <div className={styles.Topbar__Center}>

                    </div>
                    <div className={styles.Topbar__Right}>

                    </div>
                </div>
                <div id="page-content-wrapper">
                    {props.children}
                </div>
                <div className={styles.draggable__menu} draggable >
                    <h1>△</h1>
                </div>
            </div>
}

export default DefaultLayout;