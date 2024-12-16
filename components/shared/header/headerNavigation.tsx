"use client";

import { useState, useCallback, useRef, useEffect } from "react";

import { HeaderNavigationDash, HeaderNavigationLink } from "@/components/shared/header";
import useHeader from "@/store/useHeader";

export const HeaderNavigation = () => {
    const menuRef = useRef<HTMLUListElement>(null);
    const currentPage = useHeader(state => state.currentPage);
    const [lineStyles, setLineStyles] = useState({ left: '0px', width: '0px' });

    const links = [
        {
            name: "Головна",
            route: "/",
            id: "main"
        },
        {
            name: "Продукція",
            route: "/product",
            id: "product"
        },
        {
            name: "Про нас",
            route: "/about",
            id: "about"
        },
        {
            name: "Контакти",
            route: "/contact",
            id: "contact"
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
        const menuRect = menuRef.current?.getBoundingClientRect();
        const linkRect = document.getElementById(currentPage)?.getBoundingClientRect();

        if (menuRect && linkRect) {
            setLineStyles({
                left: `${linkRect.left - menuRect.left}px`,
                width: `${linkRect.width}px`
            });
        }
    }, [currentPage]);

    useEffect(() => {
        handleMouseLeave();
    }, [currentPage, handleMouseLeave])

    return (
        <>
            <div>
                <ul
                    ref={menuRef}
                    onPointerLeave={handleMouseLeave}
                    className="flex justify-start items-center font-tektur gap-x-[1rem] menu_links uppercase text-[3.5rem] tracking-[.2rem] select-none"
                >
                    {
                        links.map((link, idx) => {
                            return (
                                <HeaderNavigationLink key={idx} link={link} handleMouseEnter={handleMouseEnter} />
                            )
                        })
                    }
                </ul>
                <HeaderNavigationDash styles={lineStyles} />
            </div>
        </>
    )
}