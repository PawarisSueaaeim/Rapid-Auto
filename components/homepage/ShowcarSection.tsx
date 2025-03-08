"use client";
import ButtonPrimary from "@/common/button/ButtonPrimary";
import CardItemList from "@/common/card/CardItemList";
import { BLACK_PRIMARY, WHITE_PRIMARY } from "@/constants/COLORS";
import { getCarList } from "@/api/homepage";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
    getClientMessage,
    getDataSelector,
    getDataVehicles,
    loadingData,
} from "@/store/slices/getDataSlice";

type Props = {};
export default function ShowcarSection({}: Props) {
    const dispatch = useDispatch();
    const { listVehicles } = useSelector(getDataSelector);

    const [loading, setLoading] = useState(false);
    const [clientMessage, setClientMessage] = useState("");

    // useEffect(() => {
    //     const getVehiclesData = async () => {
    //         try {
    //             setLoading(true);
    //             const response: any = await getCarList({
    //                 orderby: "vehicle_id",
    //                 page: 1,
    //                 per_page: 6,
    //                 search: "",
    //                 sort: "desc",
    //             });
    //             if (response.status === "OK") {
    //                 dispatch(
    //                     getDataVehicles({
    //                         value: response.data,
    //                         keyValue: "homePage",
    //                     })
    //                 );
    //             } else {
    //                 setClientMessage("ไม่พบรายการสินค้า");
    //             }
    //         } catch (error) {
    //             setClientMessage("เกิดข้อผิดพลาด api ขออภัยในความไม่สะดวก");
    //             console.log(error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     getVehiclesData();
    // }, []);

    return (
        <div className="relative w-full h-auto">
            <div className="bg-GRAY_PRIMARY opacity-95 h-full w-full z-[2] sm:p-4 pb-2">
                <div className="flex flex-col justify-between h-full md:px-8 gap-8">
                    <div>
                        {loading && (
                            <div className="flex justify-center items-center">
                                Loading...
                            </div>
                        )}
                        {!loading && clientMessage && (
                            <div className="flex justify-center items-center">
                                {clientMessage}
                            </div>
                        )}
                        {!loading && !clientMessage && (
                            <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 sm:gap-2">
                                {listVehicles.map(
                                    (item: iItemList, index: number) => {
                                        return (
                                            <div
                                                key={index}
                                                className="flex justify-center items-center"
                                            >
                                                <CardItemList
                                                    img={item.main_image}
                                                    brand={item.brand}
                                                    model={item.model}
                                                    year={item.year}
                                                    submodel={item.series}
                                                    milage={item.milage}
                                                    price={
                                                        item.listing_price_label
                                                    }
                                                />
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        )}
                    </div>
                    <div className="px-8">
                        <Link href="buycar">
                            <ButtonPrimary
                                text="ดูรถยอดนิยมเพื่มเติม"
                                onClick={() => {}}
                                bgColor={WHITE_PRIMARY}
                                textColor={BLACK_PRIMARY}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
