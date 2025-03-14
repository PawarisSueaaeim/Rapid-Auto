import PaperPrimary from "@/common/paper/PaperPrimary";
import LoginComponent from "@/components/auth-component/LoginComponent";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Login({}: Props) {
    return (
        <div className="min-h-screen flex items-center justify-center">
			<PaperPrimary className="p-8 gap-4 md:gap-10">
				<div className="flex justify-center items-center">
					<Image
						src="/picture/logo/rapid-logo.png"
						alt="Rapid Logo"
						width={200}
						height={200}
					/>
				</div>
				<div className="flex flex-col gap-4">
					<LoginComponent/>
					<hr className="w-full"/>
					<div className="flex justify-center items-center gap-2">
						<span className="text-xs">ยังไม่มีบัญชีผู้ใช้ ?:</span>
						<Link href="/register" className="text-blue-500 hover:underline">ลงทะเบียน</Link>
					</div>
				</div>
			</PaperPrimary>
        </div>
    );
}
