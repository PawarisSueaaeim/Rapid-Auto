"use client"
import SelectMultiple from "@/common/select/SelectMultiple";
import React, { useEffect, useState } from "react";

type Props = {};

const options = [
    { value: "01", displayValue: "Honda" },
    { value: "02", displayValue: "Toyota" },
    { value: "03", displayValue: "BMW" },
    { value: "04", displayValue: "Benz" },
];

export default function SearchSection({}: Props) {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSetSelectedOptions = (selectedOptions: any) => {
        setSelectedOptions(selectedOptions)
    }

    useEffect(() => {
        console.log(selectedOptions);
    },[selectedOptions])

    return (
        <div>
            <SelectMultiple
                label="เลือกยี่ห้อ"
                options={options}
                value={selectedOptions}
                onChange={(value) => handleSetSelectedOptions(value)}
            />
        </div>
    );
}
