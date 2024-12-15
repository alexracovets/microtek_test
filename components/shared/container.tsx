import { cn } from "@/lib/utils"
import React from "react"

interface ContainerType {
    children: React.ReactNode,
    className: string
}

export const Container = ({ children, className }: ContainerType) => {

    return (
        <div
            className={cn(
                "w-full px-[2rem]",
                className
            )}
        >
            {children}
        </div>
    )
}