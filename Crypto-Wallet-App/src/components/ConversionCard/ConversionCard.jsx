import {RiArrowDownSLine, RiBitCoinFill, RiRepeat2Fill} from "@remixicon/react";


export const ConversionCard = () => {
    return (
        <div className="bg-light-gray-7 mr-10 px-7.5 py-10 relative flex flex-col">
            <div className="flex">
                <div className="flex flex-col mt-5">
                    <div className="flex items-center bg-white p-5">
                        <div>
                            <div className='labelBlock mr-5'>
                                <p className='label'>BitCoin</p>
                                <p className='name font-lato font-semibold text-[10px] text-light-gray-3 mt-1.25'>
                                    5.04
                                    BTC ($53 378.91)
                                </p>
                            </div>
                        </div>
                        <div
                            className='p-2.5 rounded-full bg-light-gray-2 flex justify-center items-center ml-auto mr-1.25'>
                            <RiBitCoinFill size={19.2} className='text-light-purple-2'/>
                        </div>
                        <RiArrowDownSLine size={16} className='text-light-gray-3'/>
                    </div>
                    <div className='my-7.5'>
                        <p className='font-semibold text-[10px] text-light-gray-1'>Your spend</p>
                        <div className='flex w-full justify-between'>
                            <p className='font-semibold text-[1.4rem] text-dark-gray-3 scale-y-[1.5]'>3.000000</p>
                            <p className='font-semibold text-[1.4rem] text-dark-gray-3 scale-y-[1.5]'>BTC</p>
                        </div>
                        <hr className='border-t-2 border-light-purple my-1.25'/>
                        <div className='flex w-full justify-between'>
                            <p className='font-lato font-semibold text-[10px] text-light-gray-3'>19 392.20</p>
                            <p className='font-lato font-semibold text-[10px] text-light-gray-3'>USD</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center mx-7.5">
                    <div className="flex border-l border-light-gray-2 h-[40%]"></div>
                    <div className="bg-dark-gray-3 p-2.5 rounded-full flex justify-center items-center">
                        <RiRepeat2Fill size={16} className='text-light-gray-4'/>
                    </div>
                    <div className="flex border-l border-light-gray-2 h-[40%]"></div>
                </div>
                <div className="flex flex-col mt-5">
                    <div className="flex items-center bg-white p-5">
                        <div>
                            <div className='labelBlock mr-5'>
                                <p className='label'>Ethereum</p>
                                <p className='name font-lato font-semibold text-[10px] text-light-gray-3 mt-1.25'>
                                    160 ETH ($532 672.99)
                                </p>
                            </div>
                        </div>
                        <div
                            className='p-2.5 rounded-full bg-light-gray-2 flex justify-center items-center ml-auto mr-1.25'>
                            <RiBitCoinFill size={19.2} className='text-light-purple-2'/>
                        </div>
                        <RiArrowDownSLine size={16} className='text-light-gray-3'/>
                    </div>
                    <div className='my-7.5'>
                        <p className='font-semibold text-[10px] text-light-gray-1'>Your get</p>
                        <div className='flex w-full justify-between'>
                            <p className='font-semibold text-[1.4rem] text-light-gray-5 scale-y-[1.5]'>
                                94.426101
                            </p>
                            <p className='font-semibold text-[1.4rem] text-light-gray-5 scale-y-[1.5]'>
                                ETH
                            </p>
                        </div>
                        <hr className='border-t-2 border-light-gray-2 my-1.25'/>
                        <div className='flex w-full justify-between'>
                            <p className='font-lato font-semibold text-[10px] text-light-gray-3'>19 392.20</p>
                            <p className='font-lato font-semibold text-[10px] text-light-gray-3'>USD</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center mt-10 relative">
                <div>
                    <p className="font-semibold text-[10px] text-light-gray-1 mb-1.25">Market rate</p>
                    <p className="font-lato scale-y-[1.5] font-bold text-xs text-dark-gray-3">
                        1 BTC = 31.47 ETH
                    </p>
                </div>
                <div className="ml-7.5">
                    <p className="font-semibold text-[10px] text-light-gray-1 mb-1.25">
                        Conversion fee
                    </p>
                    <p className="font-lato scale-y-[1.5] font-bold text-xs text-dark-gray-3">
                        12.938539 BNB
                    </p>
                </div>
                <button className="ml-auto absolute bg-dark-gray-3 text-light-gray-2 border-none px-11.25 py-3.75 font-semibold -right-5">Convert Now</button>
            </div>
        </div>
    )
}
