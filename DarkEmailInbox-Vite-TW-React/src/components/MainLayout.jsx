import {SideNav} from "./SideNav.jsx";
import {Main} from "./Main.jsx";

export const MainLayout = () => {
    return (
        <div className='w-10/12 flex h-[90vh] bg-blue-200'>
            <SideNav />
            <Main/>
        </div>
    )
}
