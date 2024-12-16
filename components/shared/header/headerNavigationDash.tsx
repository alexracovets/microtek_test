"use client";

import { cn } from "@/lib/utils";

interface HeaderNavigationDashType {
    styles: {
        left: string,
        width: string
    },
}

export const HeaderNavigationDash = ({ styles }: HeaderNavigationDashType) => {

    return (
        <div
            className={cn(
                "absolute bottom-[0] h-[2px] bg-regal_yellow transition-all ease-out duration-300 flex justify-center items-center"
            )}
            style={styles}
        >
            <div
                className="w-[50%] h-full bg-regal_red"
            />
        </div>
    )
}