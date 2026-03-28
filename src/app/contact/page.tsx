import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Tech Seeking Human.",
};

export default function ContactPage() {
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold mb-8">
          Get in <span className="text-[#03a9f4]">Touch</span>
        </h1>

        <div className="bg-gray-50 rounded-lg p-8">
          <p className="text-gray-600 mb-6">
            Want to be a guest on the show? Have a question or just want to say
            hi? Fill out the form below and we&apos;ll get back to you.
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03a9f4] focus:border-transparent outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03a9f4] focus:border-transparent outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03a9f4] focus:border-transparent outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-[#03a9f4] hover:bg-[#0288d1] text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
