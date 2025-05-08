import React from 'react'
export default function CardPayment() {
    return (
        <div>
            <div className="w-full bg-white flex items-center justify-between p-2 rounded mb-2 shaodow">
                <div className="flex items-center gap-2">
                    <div className="col">
                        <div className="w-10 h-10 bg-gray-200"></div>
                    </div>
                    <div className="col text-sm">
                        nama product
                    </div>
                    <div className="col text-md font-semi-bold text-gray-400 ">
                        3x
                    </div>
                </div>
            </div>
        </div>
    )
}
