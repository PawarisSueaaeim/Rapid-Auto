"use client"
import ButtonPrimary from "@/common/button/ButtonPrimary";
import CardItemList from "@/common/card/CardItemList";
import { BLACK_PRIMARY, WHITE_PRIMARY } from "@/constants/COLORS";
import { getCarList } from "@/api/homepage";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {};

export default function ShowcarSection({}: Props) {
    const [loading, setLoading] = useState(false);
    const [clientMessage, setClientMessage] = useState("");
    const [listItem, setListItem] = useState([]);

    useEffect(() => {
        const getCarListData = async () => {
            try {
                setLoading(true);
                const response = await getCarList();
                if(response.status === 'OK'){
                    setListItem(response.data);
                }else{
                    setClientMessage("ไม่พบรายการสินค้า");
                }
            } catch (error) {
                console.log(error);
            }finally{
                setLoading(false);
            }
        };
        getCarListData();
    }, []); 

    return (
        <div className="relative w-full h-screen">
            <div className="absolute bg-GRAY_PRIMARY opacity-95 h-full w-full z-[2] px-4 pt-4 pb-2">
                <div className="flex flex-col justify-between h-full md:px-8">
                    <div className="grid grid-cols-2">

                        <CardItemList
                            img="/picture/car/bg-desktop-main-03.jpg"
                            brand="BMW"
                            model="series 5"
                            year="2024"
                            submodel="m sport"
                            milage="20,000 km"
                            price={2000000}
                        />
                    </div>
                    <div className="px-8">
                        <ButtonPrimary
                            text="ดูรถยอดนิยมเพื่มเติม"
                            onClick={() => {}}
                            bgColor={WHITE_PRIMARY}
                            textColor={BLACK_PRIMARY}
                        />
                    </div>
                </div>
            </div>
            <Image
                src="/picture/car/bg-desktop-main-03.jpg"
                alt="bg-desktop-main-03"
                className="z-0"
                quality={100}
                fill
                sizes="100vw"
                style={{
                    objectFit: "cover",
                }}
            />
        </div>
    );
}
