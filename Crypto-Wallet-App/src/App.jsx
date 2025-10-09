import {NavBar} from "./components/NavBar/NavBar.jsx";
import {WalletList} from "./components/WalletList/WalletList.jsx";
import {Steps} from "./components/Steps/Steps.jsx";
import {ConvertDetails} from "./components/ConvertDetails/ConvertDetails.jsx";

function App() {
    return (
        <>
            <div className='w-screen h-auto tablet:h-screen bg-light-gray-6 flex justify-center items-center'>
                <div
                    className='w-full tablet:w-[67%]
                                tablet:h-[80%]
                                tablet:p-5
                                border-6 border-black rounded-[60px]
                                overflow-hidden
                                grid
                                grid-cols-1 tablet:grid-cols-[70px_25%_auto]
                                grid-rows-[auto_auto_auto] tablet:grid-rows-[10%_90%]'
                >
                    {/*mobile:"wallet-list"*/}
                    {/*        "steps"*/}
                    {/*        "convert-details"*/}
                    {/*tablet:"nav wallet-list steps"*/}
                    {/*        "nav wallet-list convert-details"*/}
                    <div className="hidden tablet:block tablet:col-start-1 tablet:row-start-1 tablet:row-span-2">
                        <NavBar />
                    </div>
                    <div className="row-start-1 tablet:col-start-2 tablet:row-start-1 tablet:row-span-2">
                        <WalletList />
                    </div>
                    <div className="row-start-2 tablet:col-start-3 tablet:row-start-1 ">
                        <Steps />
                    </div>
                    <div className="row-start-3 tablet:col-start-3 tablet:row-start-2 overflow-x-auto custom-scrollbar">
                        <ConvertDetails />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
