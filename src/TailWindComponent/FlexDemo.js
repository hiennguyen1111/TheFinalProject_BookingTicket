import React from 'react'

export default function FlexDemo() {
    return (
        <div className="w-screen h-screen bg-pink-100">
            <div className="flex flex-row h-1/2 w-full bg-yellow-100 justify-between items-center">
                <div className="fItem h-10 w-20 bg-blue-500"></div>
                <div className="fItem h-10 w-20 bg-green-500"></div>
                <div className="fItem h-10 w-20 bg-red-500"></div>
            </div>
            <div className="flex flex-row h-1/2 w-full bg-gray-100 justify-start flex-wrap gap-4 items-center">
                <div className="fItem h-10 w-20 bg-pink-500"></div>
                <div className="fItem h-10 w-20 bg-black"></div>
                <div className="fItem h-10 w-20 bg-yellow-500"></div>
            </div>
        </div>
    )
}
