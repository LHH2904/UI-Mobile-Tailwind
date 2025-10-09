
export const WalletItem = ({icon, label, name, value, usd}) => {
    return (
        <div className='WalletItem my-7.5'>
            <div className='flex items-center'>
                <div className="flex items-center justify-center p-2.5 bg-white rounded-full">{icon}</div>
                <div className='ml-3.75'>
                    <p className="text-dark-gray-3">{label}</p>
                    <p className="font-lato font-semibold text-[10px] text-light-gray-3 mt-1.25">{name}</p>
                </div>
                <div className='flex flex-col ml-auto items-end'>
                    <p className="font-lato font-bold text-xs text-dark-gray-3 scale-y-[1.5] mb-1.25">{value}</p>
                    <p className="font-lato font-semibold text-[10px] text-light-gray-3 mt-1.25 ">{usd}</p>
                </div>
            </div>
        </div>
    )
}
