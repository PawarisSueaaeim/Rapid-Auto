import SelectMultiple from "@/common/select/SelectMultiple";
import TitlePage from "@/common/text/TitlePage";
import SearchSection from "@/components/buycar/SearchSection";
import React from "react";

type Props = {};

export default function BuyCar({}: Props) {
    return (
        <div className="flex flex-col bg-WHITE_PRIMARY min-h-screen pt-20">
            <TitlePage text="Showroom" />
			<div>
				<SearchSection/>
			</div>
        </div>
    );
}
