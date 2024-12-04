export default function ContactUsPage() {
    return (
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          Let’s start the journey to transform your business. Reach out to us!
        </p>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-left text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border rounded px-3 py-2"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border rounded px-3 py-2"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-left text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              className="w-full border rounded px-3 py-2"
              rows={4}
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </section>
    );
  }
  