"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

type Props = {};

const menuData: iMenuHeader[] = [
    { menu: "ซื้อรถ", link: "/buycar" },
    { menu: "ขายรถ", link: "/sellcar" },
    { menu: "ติดต่อเรา", link: "/contactus" },
    { menu: "เกี่ยวกับเรา", link: "/aboutus" },
    { menu: "เข้าสู่ระบบ", link: "/login" },
];

export default function Header({}: Props) {
    const router = useRouter();
    const [onOpen, setOnOpen] = useState(false);

    return (
        <div className="relative">
            <div className="flex justify-between items-center pr-4">
                <div>
                    <Image
                        src="/picture/logo/rapid-logo.png"
                        width={200}
                        height={200}
                        alt="Rapid Logo"
                        onClick={() => router.push("/")}
                    />
                </div>
                <IoIosMenu
                    className="md:hidden h-8 w-8"
                    onClick={() => setOnOpen(true)}
                />
                <div className="hidden md:flex flex-nowrap">
                    {menuData.map((item,index) => {
                        return (
                            <Link href={item.link} key={index} className="hover:bg-WHITE_PRIMARY rounded duration-200 p-4 respond">{item.menu}</Link>
                        )
                    })}
                </div>
            </div>
            <div
                className={`fixed top-0 bg-GRAY_PRIMARY ${
                    onOpen
                        ? "right-0 duration-300"
                        : "right-[-200px] duration-300"
                } h-screen p-2 z-[100]`}
            >
                <FaLongArrowAltRight onClick={() => setOnOpen(false)} />
                <div className="flex flex-col font-normal gap-4 mt-2">
                    {menuData.map((item, index) => {
                        return (
                            <Link
                                href={item.link}
                                className="py-2 px-8 respond"
                                key={index}
                            >
                                {item.menu}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
