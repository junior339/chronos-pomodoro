

import styles from './Styles.module.css'


type HeadingProps={
    children:React.ReactNode;
};

export function Heading({children}:HeadingProps){

    return(
        <div className={styles.container}>
            <div className={styles.content}>
              <a href="www.google.com.br">{children}</a>
            </div>
        </div>

    );

}