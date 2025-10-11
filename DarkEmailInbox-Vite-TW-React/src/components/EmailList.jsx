import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faPlus} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {EmailCard} from "./EmailCard.jsx";


export const EmailList = ({ onSelectEmail }) => {
    const [emails, setEmails] = useState([
        {
            id: 1,
            image: 'bg-red-100',
            from: 'Dribbble Team',
            subject: 'Welcome to Dribbble!',
            body: 'We’re excited to have you on board. Start exploring amazing designs today.',
            hasAttachment: false,
            time: '8:45 AM',
            isSelected: false,
        },
        {
            id: 2,
            image: 'bg-lime-300',
            from: 'Notifications',
            subject: 'New Pull Request: Update README.md',
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            hasAttachment: true,
            time: '9:20 AM',
            isSelected: false,
        },
        {
            id: 3,
            image: 'bg-green-100',
            from: 'Figma Updates',
            subject: 'Your shared file has been commented on',
            body: 'Someone left a comment on your recent Figma design “Landing Page v2”.',
            hasAttachment: false,
            time: '10:10 AM',
            isSelected: false,
        },
        {
            id: 4,
            image: 'bg-yellow-100',
            from: 'Slack',
            subject: 'You have unread messages in Design Channel',
            body: 'Your teammates are waiting for your feedback on the new wireframe discussion.',
            hasAttachment: false,
            time: '11:30 AM',
            isSelected: false,
        },
        {
            id: 5,
            image: 'bg-purple-100',
            from: 'Notion Team',
            subject: 'Weekly workspace summary',
            body: 'Here’s what your team accomplished this week — 5 new pages and 12 updates.',
            hasAttachment: true,
            time: '1:15 PM',
            isSelected: false,
        },
        {
            id: 6,
            image: 'bg-pink-100',
            from: 'Google Calendar',
            subject: 'Meeting Reminder: Design Review',
            body: 'Your meeting “Homepage Redesign Review” starts in 30 minutes.',
            hasAttachment: false,
            time: '3:45 PM',
            isSelected: false,
        },
    ])

    // ✅ Khi chọn email
    const handleSelect = (selectedEmail) => {
        setEmails((prevEmails) =>
            prevEmails.map((email) =>
                email.id === selectedEmail.id
                    ? { ...email, isSelected: true }
                    : { ...email, isSelected: false }
            )
        );

        // 🔥 Gửi email được chọn về Main để hiển thị ở EmailDetails
        if (onSelectEmail) {
            onSelectEmail(selectedEmail);
        }
    };

    return (
        <div className='flex flex-col bg-dark-500 w-2/5 mr-1 px-0 h-full'>
            <div className='flex items-center py-6 px-10'>
                <span className='font-light text-xl text-light-200'>Inbox</span>
                <div className='ml-2 w-5 h-4 rounded-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center text-2xs font-normal text-light-200'>
                    3
                </div>
                <FontAwesomeIcon
                    icon={faPlus}
                    className='cursor-pointer px-3 py-3 rounded-xl bg-gradient-to-br from-blue-200 to-blue-300 text-light-200 drop-shadow-3xl ml-auto'
                />
            </div>
            <div className='px-10 pb-5'>
                <span className='text-xs text-light-200'>Recent</span>
                <FontAwesomeIcon icon={faCaretDown} className='text-light-200 text-xs ml-2'/>
            </div>
            <div className='flex flex-col px-10 pb-10 overflow-y-auto flex-1 email-scroll'>
                {
                    emails.map((email, index) => (
                        <EmailCard
                            key={`${email.id}-${index}`}
                            {...email}
                            onClick={() => handleSelect(email)}
                        />
                    ))
                }
            </div>
        </div>
    )
}
