import { cn } from "@/lib/utils"

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
            className="flex justify-start items-center font-tektur gap-x-[2rem] menu_links"
        >
            {
                links.map((link, idx) => {
                    return (
                        <li
                            key={idx}
                            className={cn(
                                "uppercase text-regal_white text-[4rem] tracking-[.2rem]"
                            )}
                        >
                            {link.name}
                        </li>
                    )
                })
            }
        </ul>
    )
}