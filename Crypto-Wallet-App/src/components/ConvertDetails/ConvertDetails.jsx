import {ConversionCard} from "../ConversionCard/ConversionCard.jsx";

export const ConvertDetails = () => {
    return (
        <div className="flex tablet:pt-12.5 cursor-pointer">
            <div className="flex tablet:w-max">
                {
                    [1,2,3,4].map((item,index) => <ConversionCard key={index} />)
                }
            </div>
        </div>
    )
}
