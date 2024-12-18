"use client";

interface HeaderNavigationDashType {
    styles: {
        left: string,
        width: string
    },
}

export const HeaderNavigationDash = ({ styles }: HeaderNavigationDashType) => {

    return (
        <div
            style={styles}
            className="absolute bottom-[0] h-[2px] bg-regal_yellow transition-all ease-out duration-300 flex justify-center items-center"
        >
            <div className="w-[50%] h-full bg-regal_red" />
        </div>
    )
}