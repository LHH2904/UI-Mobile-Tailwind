import {RiArrowDownSLine, RiBitCoinFill, RiCopperDiamondFill, RiStackFill} from "@remixicon/react";
import {WalletItem} from "../WalletItem/WalletItem.jsx";
const list = [
    {
        icon: <RiBitCoinFill size={20.8} color="#FA996E"/>,
        label: "BTC",
        name: "Bitcoin",
        value: "5.040000",
        usd: "$35 578.91",
    },
    {
        icon: <RiCopperDiamondFill size={20.8} color="#353535"/>,
        label: "ETH",
        name: "Ethereum",
        value: "160.020000",
        usd: "$36 578.91",
    },
    {
        icon: <RiBitCoinFill size={20.8} color="#9B9B9B"/>,
        label: "LTC",
        name: "Litecoin",
        value: "135.890000",
        usd: "$7 035.02",
    },
    {
        icon: <RiStackFill size={20.8} color="#EBBA23"/>,
        label: "BNB",
        name: "Binancecoin",
        value: "5.040000",
        usd: "$35 578.91",
    },
];

export const WalletList = () => {
    return (
        <div className="WalletList pt-0 px-5 pb-5">
            <p className='text-xl text-dark-gray-3 my-5'>Wallets</p>
            <div className='flex justify-between items-center mt-10'>
                <div>
                    <div className='flex items-center gap-1'>
                        <p className='text-dark-gray-3'>USD</p>
                        <RiArrowDownSLine size={12} className='text-dark-gray-3'/>
                    </div>
                    <p className='font-semibold text-[10px] text-light-gray-1 mt-1.25'>Market Value</p>
                </div>
                <div className="flex flex-col items-end">
                    <p className="font-lato font-bold text-xs text-dark-gray-3 scale-y-[1.5]">
                        $ 159 001.212
                    </p>
                    <p className="font-semibold text-xs text-light-gray-1 mt-1.25 ">
                        Total Balance
                    </p>
                </div>
            </div>
            <hr className='border-t border-light-gray-2  my-7.5'/>
            <div>
                {
                    list.map((item,index) => <WalletItem key={index} {...item}/>)
                }
            </div>
        </div>
    )
}
