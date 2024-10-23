"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import styles from '../styles/navigation.module.css'

const Navigation = () => {

    const path = usePathname();

    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href={'/'}>home</Link> {path === "/" ? "⭐" : ""}
                </li>
                <li>
                    <Link href={'/about-us'}>about</Link> {path === "/about" ? "⭐" : ""}
                </li>
            </ul>
        </nav>
    )
}

export default Navigation