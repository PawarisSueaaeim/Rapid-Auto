"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";

type Props = {};

const menuData: iMenuHeader[] = [
    { menu: "ซื้อรถ", link: "/buycar" },
    { menu: "ขายรถ", link: "/sellcar" },
    { menu: "ติดต่อเรา", link: "/contactus" },
    { menu: "เกี่ยวกับเรา", link: "/aboutus" },
];

export default function Header({}: Props) {
    const router = useRouter();
    const [onOpen, setOnOpen] = useState(false);
    const { data: session }: any = useSession();

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
                <div className="flex items-center gap-2">
                    {session ? (
                        <span
                            onClick={() => signOut()}
                            className="md:hidden active:scale-95 flex gap-1 items-center"
                        >
                            {session.user.username}
                            <span className="text-xs text-blue-500">
                                Logout
                            </span>
                        </span>
                    ) : (
                        <FaRegCircleUser
                            className="text-2xl md:hidden active:scale-95"
                            onClick={() => signIn()}
                        />
                    )}
                    <IoIosMenu
                        className="md:hidden h-8 w-8"
                        onClick={() => setOnOpen(true)}
                    />
                </div>
                <div className="hidden md:flex flex-nowrap items-center">
                    {menuData.map((item, index) => {
                        return (
                            <Link
                                href={item.link}
                                key={index}
                                className="hover:bg-WHITE_PRIMARY rounded duration-200 p-4 respond"
                            >
                                {item.menu}
                            </Link>
                        );
                    })}
                    {session ? (
                        <span
                            onClick={() => signOut()}
                            className="flex flex-col items-end justify-center hover:bg-WHITE_PRIMARY rounded duration-200 p-4 active:scale-95 gap-2"
                        >
                            <span>{session.user.username}</span>
                            <span className="text-blue-500 hover:underline text-xs">ออกจากระบบ</span>
                        </span>
                    ) : (
                        <span
                            onClick={() => signIn()}
                            className="flex items-center hover:bg-WHITE_PRIMARY rounded duration-200 p-4 active:scale-95"
                        >
                            เข้าสู่ระบบ
                        </span>
                    )}
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
