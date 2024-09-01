"use client";

import React, { useState } from "react";
import MagicButton from "@/components/ui/magic-button"; // Import MagicButton
import { FaLocationArrow } from "react-icons/fa"; // Import icon

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Response from API:", result);

      // Reset form fields and show success message
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setSuccess("Your message has been sent successfully!");
      setError(null); // Clear any previous error message
    } catch (error: any) {
      setError(`Error submitting form: ${error.message}`);
      setSuccess(null); // Clear any previous success message
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="relative p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto"
    >
      <div className="mb-4">
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="w-full p-3 border-b-2 border-gray-300 bg-transparent text-lg focus:border-blue-500 focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          className="w-full p-3 border-b-2 border-gray-300 bg-transparent text-lg focus:border-blue-500 focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <input
          id="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          className="w-full p-3 border-b-2 border-gray-300 bg-transparent text-lg focus:border-blue-500 focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          className="w-full p-3 border-b-2 border-gray-300 bg-transparent text-lg focus:border-blue-500 focus:outline-none"
          rows={6}
          required
        />
      </div>
      <div className="flex justify-center">
        <MagicButton
          title="Send"
          icon={<FaLocationArrow />}
          position="right"
          handleClick={handleSubmit} // Handle form submission with MagicButton
        />
      </div>
      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      {success && <p className="mt-4 text-green-500 text-center">{success}</p>}
    </form>
  );
};

export default ContactForm;
