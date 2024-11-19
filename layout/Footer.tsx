import Image from "next/image";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
    return (
        <div className="relative h-[150px]">
            <div className="absolute h-full w-full bg-white opacity-50 z-[2] px-4 pt-4 pb-1">
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <div className="font-semibold text-[16px]">บริษัท แรพพิด มอเตอร์ จำกัด</div>
                        <div className="font-light text-[14px]">358 ถนน นราธิวาสราชนครินทร์</div>
                        <div className="font-light text-[14px]">ช่องนนทรี เขตยานนาวา กรุงเทพมหานคร 10120</div>
                    </div>
                    <div className="flex justify-center font-light text-[14px]">© 2022 RAPID GROUP CO., LTD | v1.1.0</div>
                </div>
            </div>
            <Image
                src="/picture/car/bg_footer.jpg"
                quality={100}
                fill
                sizes="100vw"
                style={{
                    objectFit: "cover",
                }}
                alt="footer-picture"
            />
        </div>
    );
}
