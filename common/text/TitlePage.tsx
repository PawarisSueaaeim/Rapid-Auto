import React from 'react'

type Props = {
    text: string;
}

export default function TitlePage({text}: Props) {
  return (
    <div className="flex justify-center items-center text-[14px] md:text-[18px] font-semibold text-DRAKGRAY_PRIMARY">
        {text}
    </div>
  )
}