'use client'
import ButtonPrimary from "@/common/button/ButtonPrimary";
import InputPrimary from "@/common/input/InputPrimary";
import React, { useState } from "react";

type Props = {};

export default function LoginComponent({}: Props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        console.log(username, password);
    }

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <span className="text-2xl font-bold">เข้าสู่ระบบ</span>
            <div className="flex flex-col gap-2">
                <InputPrimary
                    label="Username"
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <InputPrimary
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <ButtonPrimary text="เข้าสู่ระบบ" onClick={() => handleSubmit()} bgColor="#000" textColor="#fff"/>
            </div>
        </div>
    );
}
