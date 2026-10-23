"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.from_name || !form.from_email || !form.message) {
      setStatus("⚠ Please fill all fields.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_bdqom9g",
        "template_mcehdzt",
        {
          from_name: form.from_name,
          from_email: form.from_email,
          subject: "Portfolio Contact",
          message: form.message,
        },
        "e7Iwbm0HdK9XKP9Pf"
      );

      setStatus("✅ Message sent successfully!");

      setForm({
        from_name: "",
        from_email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-24 lg:py-36"
    >
      <div className="text-center mb-12 lg:mb-16">
        <p className="uppercase tracking-[0.3em] sm:tracking-[0.4em] text-cyan-400 text-xs sm:text-sm">
          CONTACT
        </p>

        <h2 className="text-4xl sm:text-5xl font-bold mt-4">
          Let's Build Secure Infrastructure
        </h2>

        <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-8">
          Interested in SOC engineering, Wazuh deployments,
          enterprise infrastructure, or cybersecurity automation?
          Let's connect.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

        {/* Contact Info */}

        <motion.div
          whileHover={{ y: -5 }}
          className="rounded-3xl border border-cyan-500/20 bg-[#111827] p-6 sm:p-8"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-8">
            Contact Information
          </h3>

          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <Mail className="text-cyan-400 shrink-0" />
              <a
                href="mailto:shu6h4m45@gmail.com"
                className="break-all text-sm sm:text-base hover:text-cyan-400 transition"
              >
                shu6h4m45@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaLinkedin className="text-cyan-400 text-xl sm:text-2xl shrink-0" />

              <a
                href="https://linkedin.com/in/shubham-sharma-44656422a"
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-sm sm:text-base hover:text-cyan-400 transition"
              >
                linkedin.com/in/shubham-sharma-44656422a
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaGithub className="text-cyan-400 text-xl sm:text-2xl shrink-0" />

              <a
                href="https://github.com/Shubh4m26"
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-sm sm:text-base hover:text-cyan-400 transition"
              >
                github.com/Shubh4m26
              </a>
            </div>

          </div>
        </motion.div>

        {/* Contact Form */}

        <motion.form
          whileHover={{ y: -5 }}
          onSubmit={sendEmail}
          className="rounded-3xl border border-cyan-500/20 bg-[#111827] p-6 sm:p-8 space-y-5"
        >

          <input
            type="text"
            name="from_name"
            value={form.from_name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full bg-[#0b1220] border border-zinc-700 rounded-xl p-4 outline-none focus:border-cyan-400 transition"
          />

          <input
            type="email"
            name="from_email"
            value={form.from_email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full bg-[#0b1220] border border-zinc-700 rounded-xl p-4 outline-none focus:border-cyan-400 transition"
          />

          <textarea
            rows={6}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full bg-[#0b1220] border border-zinc-700 rounded-xl p-4 outline-none resize-none focus:border-cyan-400 transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-xl font-semibold disabled:opacity-50"
          >
            <Send size={18} />
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="text-sm text-cyan-400">
              {status}
            </p>
          )}

        </motion.form>

      </div>
    </section>
  );
}