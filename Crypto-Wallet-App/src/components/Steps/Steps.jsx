
export const Steps = () => {
    return (
        <div className="flex justify-between items-center p-5 tablet:pb-13.75">
            <div className="Label">
                <p className='Small'>1st Step</p>
                <span className="active text-sm text-light-gray-3 font-semibold">Select</span>

            </div>
            <div className="Line active w-[20%] h-0.25 bg-light-gray-2 relative">
                <div className="absolute h-0.25 w-1/2 bg-light-gray-4"></div>
            </div>
            <div className="Label">
                <p className='Small'>2nd Step</p>
                <span className="text-sm text-light-gray-1">Confirm</span>
            </div>
            <div className="Line w-[20%] h-0.25 bg-light-gray-2 relative">
            </div>
            <div className="Label">
                <p className='Small'>3rd Step</p>
                <span className="text-sm text-light-gray-1">Success</span>
            </div>
        </div>
    )
}
