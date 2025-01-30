import React, { useState } from 'react'
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Display a loading message while the form is being sent
        setStatus('Sending...');

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' }); // Clear form
            } else {
                setStatus('Something went wrong, please try again.');
            }
        } catch (error) {
            setStatus('Error: Could not send message.');
        }
     };

     return (
        <div className=" contact-form w-full h-screen flex flex-col justify-center pt-20">
            <div className='p-9'>
          <h1
            className="text-7xl p-8 tracking-tight border-b-2 border-gray-500 "
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              textShadow:
              "3px 3px 5px rgba(13, 13, 17, 0.91), 0 0 25px rgba(17, 9, 21, 0.98), 0 0 50px rgba(31, 28, 66, 0.61)",
            }}
          >
            {/* Header */}
            Contact
          </h1>
      
          <form onSubmit={handleSubmit} 
          className=" flex flex-col w-full space-y-6 bg-gradient-to-b from-gray-800 via-orange-100 to-black to-gray-800 bg-slate-900 p-10 justify-center "
          >
             {/* Name input */}
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-3 bg-slate-800 w-full"
                placeholder="Name:"
              />
      
            {/* Email input */}
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className=" p-3 bg-slate-800 w-full "
                placeholder='Email:'
              />
      
            {/* Message input */}
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                className=" p-2 bg-slate-800 w-full "
                placeholder='Message:'
              ></textarea>
      
            {/* Submit Button */}
            <button
              type="submit"
              className=" px-3 py-2 bg-slate-800 text-gray-400 hover:bg-slate-600" //px-3 py-2 Horizontal and vertical padding to size the button appropriately.
            >
              Send Message
            </button>
          </form>
      
          {status && <p>{status}</p>}
        </div>
        </div>
      );
    }
    export default ContactForm;