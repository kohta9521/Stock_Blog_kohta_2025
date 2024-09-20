import React from 'react';

// scss
import styles from './styles/Header.module.scss';

// components
import Logo from '../atoms/Logo';

// props
export type HeaderProps = {
    children: React.ReactNode
}


const Header = ({
    children
}: HeaderProps) => {
    return (
        <div className={styles.header}>
            <div className={styles.leftBox}>
                <Logo id='header-logo' size='medium' />
            </div>
            <div className={styles.rightBox}>
                {children}
            </div>
        </div>
    )
}

export default Header;