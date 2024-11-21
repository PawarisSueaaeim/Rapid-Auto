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
        <div className="max-w-sm bg-WHITE_PRIMARY md:rounded-lg md:shadow-xl">
            <a href="#">
                <img className="" src={img} alt="" />
            </a>
            <div className="p-1">
                <div className="flex items-center font-semibold text-[18px] gap-2">
                    <span>{brand}</span>
                    <span>{model}</span>
                </div>
                <div className="flex flex-col text-[12px] text-DRAKGRAY_PRIMARY">
                    <div className="flex items-center gap-2">
                        <span className="font-medium">Year: </span>
                        <span className="font-light">{year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-medium">Submodel: </span>
                        <span className="font-light">{submodel}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-medium">Milage: </span>
                        <span className="font-light">{milage}</span>
                    </div>
                </div>
                <div className="flex items-center justify-between text-[16px]">
                    <span className="font-medium">Price: </span>
                    <span className="font-light">{currency(price, 0)} บาท</span>
                </div>
            </div>
        </div>
    );
}
