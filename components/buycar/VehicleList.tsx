import axios from 'axios'
import React from 'react'

type Props = {}

const baseUrl = process.env.NEXT_PUBLIC_SHOWROOM_API_URL

export default async function VehicleList({}: Props) {
    const response = await axios.get('http://localhost:9001/api/vehicles');
    console.log(response);
    return (
        <div>VehicleList</div>
    )
}