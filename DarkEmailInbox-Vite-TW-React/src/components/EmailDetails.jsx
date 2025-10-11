import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisH, faReply, faTrashCan} from "@fortawesome/free-solid-svg-icons";


export const EmailDetails = ({email}) => {
    if (!email) {
        return (
            <div className="flex items-center justify-center w-2/3 bg-dark-500 text-light-400 text-sm">
                Select an email to view details
            </div>
        );
    }

    const { image, from, time, subject, body } = email;

    return (
        <div className="flex flex-col bg-dark-500 w-2/3">
            <span className="text-2xs text-center text-light-600 my-6">13 / 13</span>
            <div className="flex items-center px-10">
                <div className={`w-10 h-10 rounded-xl ${image} mr-4`}></div>
                <span className="text-sm text-light-200 font-medium">
                  {from}
                </span>
                <div className="flex relative ml-6">
                    <div className="w-6 h-6 rounded-full bg-red-200 border-2 border-dark-600"></div>
                    <div className="w-6 h-6 rounded-full bg-blue-200 border-2 border-dark-600 absolute ml-3"></div>
                    <div className="w-6 h-6 rounded-full bg-green-200 border-2 border-dark-600 absolute ml-6"></div>
                    <div className="w-6 h-6 rounded-full bg-yellow-200 border-2 border-dark-600 absolute ml-9"></div>
                </div>
                <div className="flex ml-auto">
                    <FontAwesomeIcon icon={faReply} className="mx-2 text-light-200"/>
                    <FontAwesomeIcon icon={faTrashCan} className="mx-2 text-light-200"/>
                    <FontAwesomeIcon icon={faEllipsisH} className="mx-2 text-light-200"/>
                </div>
            </div>
            <span className="px-10 text-2xs text-light-600 font-bold mt-6">
                {time}
            </span>
            <span className="px-10 text-lg text-light-100 font-light mb-6">
                {subject}
            </span>
            <div className="px-10 text-xs text-light-500 whitespace-pre-wrap break-words overflow-y-auto max-h-[calc(100vh-200px)]">{body}</div>
        </div>
    )
}

