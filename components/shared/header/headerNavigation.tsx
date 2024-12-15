import { cn } from "@/lib/utils"
import Link from "next/link"

export const HeaderNavigation = () => {

    const links = [
        {
            name: "Головна"
        },
        {
            name: "Продукція"
        },
        {
            name: "Про нас"
        },
        {
            name: "Контакти"
        }
    ]

    return (
        <ul
            className="flex justify-start items-center font-tektur gap-x-[1rem] menu_links uppercase text-[3.5rem] tracking-[.2rem]"
        >
            {
                links.map((link, idx) => {
                    return (
                        <li
                            key={idx}
                            className={cn(
                                ""
                            )}
                        >
                            <Link
                                href={'/'}
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
    )
}