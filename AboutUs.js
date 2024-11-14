import React from 'react';

function AboutUs() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to our cake shop! We bake the best cakes in town.</p>
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default AboutUs;