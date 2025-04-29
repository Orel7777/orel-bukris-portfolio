"use client";
import React, { useRef, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import emailjs from "@emailjs/browser";
import { MagicButton } from "./ui/MagicButton";
import { useLanguage } from "@/app/providers/language-provider";
import Image from "next/image";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const initialState: FormData = {
  name: "",
  email: "",
  message: "",
};

const Footer: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [form, setForm] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const { t } = useLanguage();
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!form.name.trim()) {
      newErrors.name = "Full name is required";
      isValid = false;
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          to_name: "Orel Bukris",
          from_email: form.email,
          to_email: "orelbukris7777@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setLoading(false);
      setForm(initialState);
      alert("Message sent successfully!");
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
};

  return (
    <footer
      className="relative w-full pb-10 mb-[100px] md:mb-5 overflow-hidden"
      id="contact">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl -top-20 -right-20 animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -bottom-20 -left-20 animate-pulse" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
        {t("footer.headerTitle")} <span className="text-purple">{t("footer.headerTitle1")}</span>{" "}
        {t("footer.headerTitle2")}
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
        {t("footer.headerDescription")}
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col space-y-7 w-full max-w-lg backdrop-blur-lg bg-white/5 p-8 rounded-2xl border border-white/10">
          <label className="space-y-3">
            <span className="text-white/80 font-medium">{t("footer.contact")}</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg bg-black/20 border ${
                errors.name ? 'border-red-500' : 'border-white/10'
              } text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
              placeholder={t("footer.placeholder")}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name}</span>
            )}
          </label>

          <label className="space-y-3">
            <span className="text-white/80 font-medium">{t("footer.contact1")}</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg bg-black/20 border ${
                errors.email ? 'border-red-500' : 'border-white/10'
              } text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all`}
              placeholder={t("footer.placeholder1")}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </label>

          <label className="space-y-3">
            <span className="text-white/80 font-medium">{t("footer.contact2")}</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className={`w-full px-4 py-3 rounded-lg bg-black/20 border ${
                errors.message ? 'border-red-500' : 'border-white/10'
              } text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none`}
              placeholder={t("footer.placeholder2")}
            />
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message}</span>
            )}
          </label>
          <div className="flex items-center justify-center">
            <MagicButton
              title={loading ? t("footer.button1") : t("footer.button")}
              icon={!loading ? <FaLocationArrow /> : null}
              position="center"
              handleClick={handleSubmit}
              otherClasses="max-w-lg"
            />
          </div>
        </form>
      </div>

      <div className="relative z-10 flex mt-16 md:flex-row flex-col justify-between items-center px-4">
        <p className="md:text-base text-sm text-white/80 font-light">
          {t("footer.end")}
        </p>

        <div className="flex items-center md:gap-4 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-10 h-10 flex justify-center items-center rounded-lg border mt-3 border-white/10 backdrop-blur-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
              <Image
                src={info.img}
                alt={`${info.id} icon`}
                width={24}
                height={24}
                className="group-hover:scale-75 transition-all duration-200"
                style={{ height: "auto" }}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;