"use client"

import Link from "next/link"
import { useState } from "react";

export default function Header() {

    const [open, setOpen] = useState(false);

    return(
        <>
            <header>
                <div className="logo-container">
                    <img className="logo" src="/logo.png" alt="" />
                </div>
                <div className="header-navigation">
                    <Link href={'/'} className="header-link">Why Oneflow?</Link>
                    <Link href={'/'} className="header-link">Learn</Link>
                    <Link href={'/'} className="header-link">Pricing</Link>
                    <Link href={'/'} className="header-link">About</Link>
                    <Link href={'/'} className="header-link">Blog</Link>
                    <div className="header-buttons">
                        <button className="demo">Get a demo</button>
                        <button className="login">Log in</button>
                    </div>
                    <img className="globe" src="/globe.png" alt="" />
                </div>

                <button className={`burger ${open ? "open" : ""}`}  onClick={() => setOpen(!open)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`mobileMenu ${open ? "show" : ""}`}>
                    <Link className="header-link" href={'/'} onClick={() => setOpen(false)}>Why Oneflow?</Link>
                    <Link className="header-link" href={'/'} onClick={() => setOpen(false)}>Learn</Link>
                    <Link className="header-link" href={'/'} onClick={() => setOpen(false)}>Pricing</Link>
                    <Link className="header-link" href={'/'} onClick={() => setOpen(false)}>About</Link>
                    <Link className="header-link" href={'/'} onClick={() => setOpen(false)}>Blog</Link>
                </nav>
            </header>
        </>
    )
}