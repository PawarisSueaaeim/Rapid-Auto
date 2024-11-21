import ButtonPrimary from "@/common/button/ButtonPrimary";
import {
    BLACK_PRIMARY,
    GRAY_PRIMARY,
} from "@/constants/COLORS";
import Image from "next/image";
import React from "react";

type Props = {};

export default function SecondSection({}: Props) {
    return (
        <div className="relative w-full h-screen">
            <div className="absolute bg-WHITE_PRIMARY opacity-95 h-full w-full z-[2] pb-2">
                <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col md:justify-center md:items-center gap-1 py-10 px-4">
                            <span className="text-[24px] font-semibold">
                                Rapid Certified Car
                            </span>
                            <span className="text-[20px] font-light">
                                รับประกันคุณภาพ โดยผู้เชี่ยวชาญตรวจเช็คกว่า 50
                                รายการ ซื้อขายรถกับเรา ราคาดี ถูกใจ ไร้กังวล
                            </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col md:items-center px-4 gap-2">
                                <div className="text-[22px]">
                                    ซื้อรถกับ Rapid Auto นัดพบจบเลย
                                </div>
                                <div className="flex flex-col gap-4 px-8">
                                    <div className="flex gap-4 items-center">
                                        <Image
                                            src="/icons/icon-wing.png"
                                            alt="icon-wing"
                                            width={50}
                                            height={50}
                                        />
                                        <span className="text-[16px] font-light">
                                            สภาพนางฟ้า
                                        </span>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <Image
                                            src="/icons/icon-thumbs-up.png"
                                            alt="icon-thumbs-up"
                                            width={50}
                                            height={50}
                                        />
                                        <span className="text-[16px] font-light">
                                            งานดี ไม่มีย้อมแมว
                                        </span>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <Image
                                            src="/icons/icon-cash-flow.png"
                                            alt="icon-cash-flow"
                                            width={50}
                                            height={50}
                                        />
                                        <span className="text-[16px] font-light">
                                            จัด โอน จบแน่นอน
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col md:items-center px-4 gap-2">
                                <div className="text-[22px]">
                                    ขายรถกับ Rapid Auto จบใน 45 นาที
                                </div>
                                <div className="flex flex-col px-8 gap-4">
                                    <div className="flex gap-4 items-center">
                                        <Image
                                            src="/icons/icon-best-price.png"
                                            alt="icon-best-price"
                                            width={50}
                                            height={50}
                                        />
                                        <span className="text-[16px] font-light">
                                            ราคาโคตรดี
                                        </span>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <Image
                                            src="/icons/icon-money.png"
                                            alt="icon-money"
                                            width={50}
                                            height={50}
                                        />
                                        <span className="text-[16px] font-light">
                                            รับเงินทันที
                                        </span>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <Image
                                            src="/icons/icon-checkhand.png"
                                            alt="icon-checkhand"
                                            width={50}
                                            height={50}
                                        />
                                        <span className="text-[16px] font-light">
                                            ที่นี่ที่เดียว
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 px-4 md:grid-cols-2 md:px-60 gap-2">
                        <ButtonPrimary
                            text="ซื้อรถ"
                            onClick={() => {}}
                            bgColor={GRAY_PRIMARY}
                            textColor={BLACK_PRIMARY}
                        />
                        <ButtonPrimary
                            text="ขายรถ"
                            onClick={() => {}}
                            bgColor={GRAY_PRIMARY}
                            textColor={BLACK_PRIMARY}
                        />
                    </div>
                </div>
            </div>
            <Image
                src="/picture/car/bg-desktop-main-02.jpg"
                alt="bg-desktop-main-01"
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
