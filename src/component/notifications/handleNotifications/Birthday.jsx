import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

function BirthdayNotification({ data }) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const processedMessages = processBirthdays(data);
        setMessages(processedMessages);
    }, [data]);

    function processBirthdays(data) {
        const today = new Date();
        const processedMessages = [];

        data.forEach(person => {
            const birthDate = new Date(person.BIRTH_DATE);
            const nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());

            if (nextBirthday < today) {
                nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
            }

            const daysUntilBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));
            if (daysUntilBirthday < 200) {
                const birthdayMessage = {
                    title: "Birthday Notification",
                    dateTime:  dayjs(person.BIRTH_DATE).format('DD-MM-YYYY'),
                    fullName: `${person.CURRENT_FIRST_NAME} ${person.CURRENT_LAST_NAME}`,
                    message: `${person.CURRENT_FIRST_NAME} ${person.CURRENT_LAST_NAME}'s birthday is in ${daysUntilBirthday} ${daysUntilBirthday > 1 ? "days" : "day"} !`
                };

                processedMessages.push(birthdayMessage);
            }

        });

        return processedMessages;
    }

    return messages;
}

export default BirthdayNotification;

