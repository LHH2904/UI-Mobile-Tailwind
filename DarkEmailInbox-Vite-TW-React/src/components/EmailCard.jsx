import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperclip} from "@fortawesome/free-solid-svg-icons";

export const EmailCard = (props) => {
    const {image, from, time, subject, body, hasAttachment, isSelected, onClick} = props;
    return (
        <div
            onClick={onClick}
            className={`
                flex flex-row py-10 px-6 cursor-pointer rounded-3xl drop-shadow-2xl
                ${isSelected ? "bg-gradient-to-br from-dark-200 to-dark-300" : ""}
                hover:bg-gradient-to-br hover:from-dark-200 hover:to-dark-300
              `}
        >
            <div className={`w-12 h-10 mt-3 rounded-xl ${image}`}></div>
            <div className='flex flex-col w-full ml-3'>
                <div className='flex items-center mt-2'>
                    <span className='text-xs text-light-500 font-medium mr-auto'>
                        {from}
                    </span>
                    {
                        hasAttachment ? <FontAwesomeIcon icon={faPaperclip} className='text-light-500 mr-2' /> : null
                    }
                    <span className='text-xs text-light-500 font-medium bg-dark-400 px-3 py-1 rounded-xl'>
                        {time}
                    </span>
                </div>
                <span className='text-sm text-light-200 font-medium mt-2'>{subject}</span>
                <span className='line-clamp-2 text-xs text-light-500 font-normal mt-4 w-full'>{body}</span>
            </div>
        </div>
    )
}
