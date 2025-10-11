import {ContentHeader} from "./ContentHeader.jsx";
import {EmailList} from "./EmailList.jsx";
import {EmailDetails} from "./EmailDetails.jsx";
import {useState} from "react";

export const Main = () => {
    const [selectedEmail, setSelectedEmail] = useState(null);
    return (
        <main className='flex flex-col w-full h-full bg-dark-600'>
           <ContentHeader/>
            <div className='flex flex-1 overflow-hidden'>
                <EmailList onSelectEmail={setSelectedEmail} />
                <EmailDetails email={selectedEmail} />
            </div>
        </main>
    )
}
