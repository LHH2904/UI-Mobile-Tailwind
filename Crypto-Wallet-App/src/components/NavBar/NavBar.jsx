import {RiCheckboxBlankLine, RiStackFill, RiUserLine} from "@remixicon/react";
import {RiLayoutMasonryLine} from "@remixicon/react";
import {RiRepeat2Fill} from "@remixicon/react";
import {RiLayoutTopLine} from "@remixicon/react";

export const NavBar = () => {
    return (
        <nav
            className="flex flex-col justify-between items-center py-12.5 w-17.5 h-full  bg-dark-gray-1 rounded-[30px]">
            <li className="">
                <RiStackFill
                    size={16}
                    className="text-white cursor-pointer" // add custom class name
                />
            </li>
            <li className="">
                <RiLayoutMasonryLine
                    size={16}
                    className="text-dark-gray-2 cursor-pointer"
                />
            </li>
            <li className="">
                <span
                    className="
                      relative
                      flex items-center
                      after:content-['']
                      after:absolute
                      after:w-1 after:h-1
                      after:bg-white
                      after:rounded-full
                      after:-bottom-2
                        after:left-1/2
                        after:-translate-x-1/2
                    "
                >
                    <RiRepeat2Fill size={16} className="text-dark-gray-2 cursor-pointer"/>
                </span>
            </li>
            <li className=" ">
                <RiLayoutTopLine
                    size={16}
                    className="text-dark-gray-2 cursor-pointer" // add custom class name
                />
            </li>
            <li className="">
                <RiCheckboxBlankLine
                    size={16}
                    className="text-dark-gray-2 cursor-pointer" // add custom class name
                />
            </li>
            <li className="">
                <RiUserLine
                    size={16}
                    className="text-dark-gray-2 cursor-pointer" // add custom class name
                />
            </li>
        </nav>
    )
}
