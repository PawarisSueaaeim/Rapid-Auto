import TitlePage from "@/common/text/TitlePage";
import DropImages from "@/components/sellcar/DropImages";
import React from "react";

type Props = {};

export default function SellCar({}: Props) {
    return <div className="flex flex-col justify-center items-center min-h-screen w-full">
		<TitlePage text="Sell Car"/>
		<DropImages/>
    </div>;
}
