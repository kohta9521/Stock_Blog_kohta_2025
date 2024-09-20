import React from "react";

// next
import Image from "next/image";
import Link from "next/link";

// scss
import styles from "./styles/Logo.module.scss";

// props
export type LogoProps = {
    id: string;
    size?: "small" | "medium" | "large";
}

const Logo = ({
    id,
    size = "medium",
}: LogoProps) => {
    return (
        <div key={id} className={styles.logoBox}>
            <Link href="/" className={styles.link}>
                <Image
                    className={`${styles.logo} ${styles[size]}`}
                    src="/images/logo.png"
                    width={250}
                    height={70}
                    alt="ロゴ画像"
                />
            </Link>
        </div>
    )
}

export default Logo;