"use client";
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
                if (response.status === "OK") {
                    console.log(response.data);
                    setListItem(response.data);
                } else {
                    setClientMessage("ไม่พบรายการสินค้า");
                }
            } catch (error) {
                setClientMessage("เกิดข้อผิดพลาด api ขออภัยในความไม่สะดวก");
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        getCarListData();
    }, []); // จริงๆแล้วท่านี้ไม่ค่อยดีต่อ SEO ถ้ามีเวลาและ server พร้อมจะต้องทำเป็น server side
    // **เนื่องจากข้อมูลฝั่ง server ยังไม่พร้อม

    return (
        <div className="relative w-full min-h-screen">
            <div className="absolute bg-GRAY_PRIMARY opacity-95 h-full w-full z-[2] px-4 sm:pt-4 pb-2">
                <div className="flex flex-col justify-between h-full md:px-8">
                    <div>
                        {loading && <div className="flex justify-center items-center">Loading...</div>}
                        {!loading && clientMessage && (
                            <div className="flex justify-center items-center">{clientMessage}</div>
                        )}
                        {!loading && !clientMessage && (
                            <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-2">
                                {listItem.map((item: iItemList, index: number) => {
                                    return (
                                        <div key={index} className="flex justify-center items-center">
                                            <CardItemList
                                                img={item.main_image}
                                                brand={item.brand}
                                                model={item.model}
                                                year={item.year}
                                                submodel={item.series}
                                                milage={item.milage}
                                                price={item.listing_price}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        )}
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
