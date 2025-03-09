"use client";
import DropArea from "@/common/droparea/DropArea";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

export type IImage = {
    path: string;
    relativePath: string;
    lastModified: number;
    lastModifiedDate: Date;
    name: string;
    size: number;
    type: string;
    webkitRelativePath: string;
    preview?: any;
};

export default function DropImages({}: Props) {
    const [imagesFont, setImageFont] = useState<IImage>();
    const [imagesFontLeft, setImageFontLeft] = useState<IImage>();
    const [imagesFontRight, setImageFontRight] = useState<IImage>();
    const [imagesBack, setImageBack] = useState<IImage>();
    const [imagesBackLeft, setImageBackLeft] = useState<IImage>();
    const [imagesBackRight, setImageBackRight] = useState<IImage>();
    const [imagesSideLeft, setImageSideLeft] = useState<IImage>();
    const [imagesSideRight, setImageSideRight] = useState<IImage>();
    const [imagesInside, setImageInside] = useState<IImage>();
    const [imagesBook, setImageBook] = useState<IImage>();

    const dataImage = [
        { image: imagesFont, text: "เพิ่มรูป 'หน้าตรง'", keyValue: "font" },
        {
            image: imagesFontLeft,
            text: "เพิ่มรูป 'หน้าซ้าย'",
            keyValue: "fontLeft",
        },
        {
            image: imagesFontRight,
            text: "เพิ่มรูป 'หน้าขวา'",
            keyValue: "fontRight",
        },
        { image: imagesBack, text: "เพิ่มรูป 'หลังตรง'", keyValue: "back" },
        {
            image: imagesBackLeft,
            text: "เพิ่มรูป 'หลังซ้าย'",
            keyValue: "backLeft",
        },
        {
            image: imagesBackRight,
            text: "เพิ่มรูป 'หลังขวา'",
            keyValue: "backRight",
        },
        {
            image: imagesSideLeft,
            text: "เพิ่มรูป 'ข้างซ้าย'",
            keyValue: "left",
        },
        {
            image: imagesSideRight,
            text: "เพิ่มรูป 'ข้างขวา'",
            keyValue: "right",
        },
        { image: imagesInside, text: "เพิ่มรูป 'ภายใน'", keyValue: "inside" },
        { image: imagesBook, text: "เพิ่มรูป 'เล่มทะเบียน'", keyValue: "book" },
    ];

    const handleFiles = (files: any, keyValue: string) => {
        if (files?.length) {
            files.map((file: any) => {
                switch (keyValue) {
                    case "font": {
                        setImageFont(
                            Object.assign(file, {
                                preview: URL.createObjectURL(file),
                            })
                        );
                        break;
                    }
                    case "fontLeft": {
                        setImageFontLeft(
                            Object.assign(file, {
                                preview: URL.createObjectURL(file),
                            })
                        );
                        break;
                    }
                    case "fontRight": {
                        setImageFontRight(
                            Object.assign(file, {
                                preview: URL.createObjectURL(file),
                            })
                        );
                        break;
                    }
                    case "back": {
                        setImageBack(
                            Object.assign(file, {
                                preview: URL.createObjectURL(file),
                            })
                        );
                        break;
                    }
                    case "backLeft": {
                        setImageBackLeft(
                            Object.assign(file, {
                                preview: URL.createObjectURL(file),
                            })
                        );
                        break;
                    }
                    case "backRight": {
                        setImageBackRight(
                            Object.assign(file, {
                                preview: URL.createObjectURL(file),
                            })
                        );
                        break;
                    }
                    case "left": {
                        setImageSideLeft(
                            Object.assign(file, {
                                preview: URL.createObjectURL(file),
                            })
                        );
                        break;
                    }
                    case "right": {
                        setImageSideRight(
                            Object.assign(file, {
                                preview: URL.createObjectURL(file),
                            })
                        );
                        break;
                    }
                    case "inside": {
                        setImageInside(
                            Object.assign(file, {
                                preview: URL.createObjectURL(file),
                            })
                        );
                        break;
                    }
                    case "book": {
                        setImageBook(
                            Object.assign(file, {
                                preview: URL.createObjectURL(file),
                            })
                        );
                        break;
                    }
                }
            });
        }
    };

    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-1 w-full">
            {dataImage.map((item, index) => {
                return (
                    <DropArea
                        key={index}
                        className="flex justify-center items-center border border-dashed border-gray-500 rounded-sm p-6"
                        image={item.image}
                        text={item.text}
                        handleImage={(file) => handleFiles(file, item.keyValue)}
                    />
                )
            })}
        </div>
    );
}
