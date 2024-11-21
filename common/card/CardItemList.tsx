import { currency } from "@/utils/format";
import React from "react";

type Props = {
    img: string;
    brand: string;
    model: string;
    year: string;
    submodel: string;
    milage: string;
    price: number;
};

export default function CardItemList({
    img,
    brand,
    model,
    year,
    submodel,
    milage,
    price,
}: Props) {
    return (
        <div className="flex flex-col justify-between max-w-xs md:rounded-lg md:shadow-xl h-full">
            <img className="md:rounded-t-lg w-full bg" src={img} alt=""/>
            <div className="bg-WHITE_PRIMARY p-1 md:rounded-b-lg md:p-4">
                <div className="flex items-center font-semibold text-[12px] md:text-[16px] gap-2">
                    <span>{brand}</span>
                    <span>{model}</span>
                </div>
                <div className="flex flex-col text-[10px] md:text-[12px] text-DRAKGRAY_PRIMARY">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Year: </span>
                        <span className="font-normal">{year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Submodel: </span>
                        <span className="font-normal">{submodel}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Milage: </span>
                        <span className="font-normal">{milage} km.</span>
                    </div>
                </div>
                <div className="flex items-center justify-between text-[12px] md:text-[14px]">
                    <span className="font-semibold">Price: </span>
                    <span className="font-normal">{currency(price, 0)} บาท</span>
                </div>
            </div>
        </div>
    );
}
