import {useState} from "react";

export const SideNav = () => {
    const [navItems, setNavItems] = useState([
        {id: 1, name: 'Dashboard' },
        {id: 2, name: 'Company'},
        {id: 3, name: 'Schedule' },
        {id: 4, name: 'Contacts' },
        {id: 5, name: 'Inbox', isActive: true },
        {id: 6, name: 'Reports' },
        {id: 7, name: 'Activity' },
    ]);
    return (
        <nav className='min-w-[180px] flex-shrink-0 w-1/5 md:w-3/10 h-full  bg-dark-600 flex flex-col items-center'>
            <div className='flex items-center my-14'>
                <div className='w-6 h-6 bg-blue-600 rounded-full'></div>
                <span className='font-semibold text-light-100 ml-4'>HieuLe</span>
            </div>
            <ul className='overflow-y-auto flex flex-col items-center flex-1 w-full border-t border-light-600 pt-10'>
                {
                    navItems.map((item, index) => (
                        <li
                            key={item.id}
                            className={`cursor-pointer ${item.isActive ? "flex items-center relative py-1" : ""} 
                                        ${index > 0 ? "my-6" : "mb-4"}`}
                        >
                            {
                                item.isActive ? <div className='w-8 md:w-10 h-0.5 bg-light-200 mr-2 absolute -left-12'></div> : null
                            }
                            <span className='text-light-200 text-xs'>{item.name}</span>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
