const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-35">
      <h2 className="text-3xl font-bold mb-6 text-[#b59459]">Send us a Message</h2>
      <form
        action="https://formsubmit.co/santosh.iict06a@gmail.com"
        method="POST"
        className="space-y-6"
      >
        {/* FormSubmit config */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="box" />
        <input type="hidden" name="_autoresponse" value="Thank you for reaching out. We'll get back to you soon!" />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded border"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded border"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full p-3 rounded border h-32"
        />
        <button
          type="submit"
          className="bg-[#b59459] text-white px-6 py-2 rounded hover:bg-[#a7844a] transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
