import { useState, type FormEvent } from 'react';

export default function ContactForm() {
    const [responseMessage, setResponseMessage] = useState('');

    async function submit(e: FormEvent) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const response = await fetch('/api/send', {
            method: 'POST',
            body: formData,
        });
        const data = await response.json();
        if (data.message) {
            setResponseMessage(data.message);
        }
    }

    return (
        <form
            className="flex flex-col gap-10 items-center p-5 w-96 rounded-md shadow-2xl dark:bg-gray-900"
            onSubmit={submit}
        >
            <h3 className="w-full text-xl text-center">Message Me</h3>
            <label className="flex flex-col w-full">
                email
                <input
                    className="bg-transparent border-2 border-x-slate-50 border-b-black border-t-slate-50 dark:border-x-gray-900 dark:border-t-gray-900 dark:border-b-white"
                    type="email"
                    name="email"
                    required
                />
            </label>
            <label className="flex flex-col w-full">
                message
                <input
                    className="bg-transparent border-2 border-x-slate-50 border-b-black border-t-slate-50 dark:border-x-gray-900 dark:border-t-gray-900 dark:border-b-white"
                    id="message-field"
                    type="text"
                    name="message"
                    required
                />
            </label>
            <button className="py-1 px-3 text-center rounded-lg border-2 border-black dark:bg-gray-800 dark:border-none w-fit">
                Send
            </button>
            {responseMessage}
        </form>
    );
}
