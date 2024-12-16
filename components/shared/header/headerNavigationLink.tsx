"use client";

import { usePathname } from 'next/navigation';
import { useEffect } from "react";
import Link from "next/link";

import useHeader from "@/store/useHeader";
import { cn } from "@/lib/utils";

interface LinkType {
    link: {
        name: string,
        route: string,
        id: string
    },
    handleMouseEnter: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}

export const HeaderNavigationLink = ({ link, handleMouseEnter }: LinkType) => {
    const setCurrentPage = useHeader(state => state.setCurrentPage);
    const currentPage = useHeader(state => state.currentPage);
    const pathname = usePathname();

    useEffect(() => {
        if (pathname.includes(link.id)) {
            setCurrentPage(link.id);
        } else if (pathname === "/") {
            setCurrentPage("main");
        }
    }, [pathname, link.id, setCurrentPage]);

    return (
        <li>
            <Link
                href={link.route}
                onMouseEnter={handleMouseEnter}
                id={link.id}
                className={cn(
                    "relative inline-block p-[1rem] text-transparent",
                    "before:content-[attr(data-text)] before:text-regal_white",
                    "hover:before:text-regal_yellow",
                    currentPage === link.id ? "before:text-regal_yellow before:font-[700]" : ""
                )}
                data-text={link.name}
            >
                {link.name}
            </Link>
        </li>
    )
}