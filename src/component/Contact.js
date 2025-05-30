import React from 'react';

export default function Contact() {
  const containerStyle = {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
    fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
    color: '#333',
  };

  const headingStyle = {
    marginBottom: '20px',
    color: '#007BFF',
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    lineHeight: 1.6,
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Contact Me</h2>
      <p style={paragraphStyle}>
        My name is Aryan. I am a software engineer with a passion for web development. I have experience in building responsive and user-friendly applications using React.js, Node.js, and other modern web technologies. I enjoy solving complex problems and continuously learning new skills to enhance my expertise in the field. If you have any questions or would like to connect, feel free to reach out!
      </p>
    </div>
  );
}
