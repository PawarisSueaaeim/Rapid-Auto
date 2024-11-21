import ButtonPrimary from "@/common/button/ButtonPrimary";
import { BLACK_PRIMARY, WHITE_PRIMARY } from "@/constants/COLORS";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

export default function SectionWelcome({}: Props) {
    return (
        <div className="relative w-full h-screen">
            <div className="absolute h-full w-full z-[2] pt-28 pb-2">
                <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-4 items-center">
                        <div className="flex flex-col md:flex-row text-[24px] gap-1">
                            <span>Thailand first Digital</span>
                            <span> Pre-owned car center</span>
                        </div>
                        <div className="flex flex-col md:flex-row text-WHITE_PRIMARY text-[20px] font-light">
                            <span>ประสบการณ์ดีดี ซื้อขายรถที่นี่ ประทับใจ</span>
                            <span>แน่นอนผ่าน Platform Rapid Auto</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 px-4 md:grid-cols-2 md:px-60 gap-2">
                        <Link href="buycar">
                            <ButtonPrimary
                                text="ซื้อรถ"
                                onClick={() => {}}
                                bgColor={WHITE_PRIMARY}
                                textColor={BLACK_PRIMARY}
                            />
                        </Link>
                        <Link href="sellcar">
                            <ButtonPrimary
                                text="ขายรถ"
                                onClick={() => {}}
                                bgColor={WHITE_PRIMARY}
                                textColor={BLACK_PRIMARY}
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <Image
                src="/picture/car/bg-desktop-main-01.jpg"
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
