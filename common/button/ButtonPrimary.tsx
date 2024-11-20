import React from "react";

type Props = {
    text: string;
    onClick: Function;
    bgColor?: string;
    textColor?: string;
};

export default function ButtonPrimary({
    text,
    onClick,
    bgColor,
    textColor,
}: Props) {
    return (
        <div
            className={`flex justify-center items-center rounded-md hover:cursor-pointer duration-300 p-4 respond`}
            onClick={onClick()}
            style={{
                backgroundColor: bgColor || undefined,
                color: textColor,
            }}
        >
            {text}
        </div>
    );
}