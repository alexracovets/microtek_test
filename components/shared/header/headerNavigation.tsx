"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link"

import { HeaderNavigationDash } from "./headerNavigationDash"
import { cn } from "@/lib/utils";

import useHeader from "@/store/useHeader";

export const HeaderNavigation = () => {
    const setCurrentPage = useHeader(state => state.setCurrentPage);
    const currentPage = useHeader(state => state.currentPage);
    const menuRef = useRef<HTMLUListElement>(null);
    const [lineStyles, setLineStyles] = useState({
        left: '0px',
        width: '0px'
    });

    const links = [
        {
            name: "Головна",
            route: "/"
        },
        {
            name: "Продукція",
            route: "/product"
        },
        {
            name: "Про нас",
            route: "/about"
        },
        {
            name: "Контакти",
            route: "/contact"
        }
    ];

    const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const linkRect = e.currentTarget.getBoundingClientRect();
        const menuRect = menuRef.current?.getBoundingClientRect();

        if (menuRect) {
            setLineStyles({
                left: `${linkRect.left - menuRect.left}px`,
                width: `${linkRect.width}px`
            });
        }
    }, []);

    const handleMouseLeave = useCallback(() => {

    }, []);

    useEffect(() => {

    }, [currentPage])

    return (
        <>
            <ul
                ref={menuRef}
                onPointerLeave={handleMouseLeave}
                className="flex justify-start items-center font-tektur gap-x-[1rem] menu_links uppercase text-[3.5rem] tracking-[.2rem] select-none"
            >
                {
                    links.map((link, idx) => {
                        return (
                            <li key={idx}>
                                <Link
                                    href={link.route}
                                    onMouseEnter={handleMouseEnter}
                                    onClick={() => setCurrentPage(link.route)}
                                    className={cn(
                                        "relative inline-block p-[1rem] text-transparent",
                                        "before:absolute before:content-[attr(data-text)] before:left-0 before:top-0 before:w-full before:h-full",
                                        "before:flex before:justify-center before:items-center hover:before:font-[600] before:text-[#ffffff54]",
                                        "hover:before:text-regal_white"
                                    )}
                                    data-text={link.name}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <HeaderNavigationDash styles={lineStyles} />
        </>
    )
}