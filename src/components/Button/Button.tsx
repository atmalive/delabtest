import {FC, ReactNode} from "react";

interface ButtonProps {
    children: ReactNode,
    className: string,
    visible: boolean
}

export const Button: FC<ButtonProps> = ({ children, className, visible = true }) => {
    if (!visible) return null;

    return (
        <button className={`flex flex-row justify-center items-center px-2 py-0 gap-1 h-12 rounded-full flex-grow font-semibold leading-5 tracking-tighter text-base ${className}`}>
            {children}
        </button>
    );
};
