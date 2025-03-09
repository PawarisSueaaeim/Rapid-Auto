"use client";

import { IImage } from "@/components/sellcar/DropImages";
import Image from "next/image";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

type Props = {
    text: string;
    className?: string;
    image?: IImage;
    handleImage: (file: any) => void;
};

export default function DropArea({
    text,
    className,
    image,
    handleImage,
}: Props) {
    const onDrop = useCallback((acceptedFiles: any) => {
        handleImage(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });

    return (
        <div
            className={className}
            {...getRootProps()}
        >
            <input {...getInputProps()} />
            {isDragActive ? (
                <p className="text-gray-400">วางที่นี่</p>
            ) : (
                <p className="text-gray-400">
                    {image?.preview ? (
                        <Image
                            src={image?.preview}
                            alt={image?.name}
                            width={100}
                            height={100}
                        />
                    ) : (
                        text
                    )}
                </p>
            )}
        </div>
    );
}
