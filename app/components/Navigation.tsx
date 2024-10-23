"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const Navigation = () => {

    const path = usePathname();
    const [count, setCount] = useState(0);

    return (
        <nav>
            <ul>
                <li>
                    <Link href={'/'}>home</Link> {path === "/" ? "⭐" : ""}
                </li>
                <li>
                    <Link href={'/about-us'}>about</Link> {path === "/about" ? "⭐" : ""}
                </li>
                <li>
                    <button onClick={() => setCount((c) => c+1)}>{count}</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation