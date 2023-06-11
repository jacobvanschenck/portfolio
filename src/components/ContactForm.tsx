import { FormEvent, useState } from 'react';

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
      className="flex w-96 flex-col items-center gap-10 rounded-md p-5 shadow-2xl dark:bg-gray-900"
      onSubmit={submit}
    >
      <h3 className="w-full text-center text-xl">Message Me</h3>
      <label className="flex w-full flex-col">
        email
        <input
          className="border-2 border-x-blue-50 border-b-black border-t-blue-50 bg-transparent dark:border-x-gray-900 dark:border-t-gray-900 dark:border-b-white"
          type="email"
          name="email"
          required
        />
      </label>
      <label className="flex w-full flex-col">
        message
        <input
          className="border-2 border-x-blue-50 border-b-black border-t-blue-50 bg-transparent dark:border-x-gray-900 dark:border-t-gray-900 dark:border-b-white"
          id="message-field"
          type="text"
          name="message"
          required
        />
      </label>
      <button className="w-fit rounded-lg border-2 border-black px-3 py-1 text-center dark:border-none dark:bg-gray-800">
        Send
      </button>
      {responseMessage}
    </form>
  );
}
