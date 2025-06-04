"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import sendData from "@/lib/api/SendData";
import toast from "react-hot-toast";

export default function ContactForm() {
  const t = useTranslations("contactPage");
  const [loading, setLoading] = useState(false);

  const schema = z.object({
    name: z.string().min(1, { message: "nameRequired" }),
    email: z
      .string()
      .email({ message: "emailInvalid" })
      .min(1, { message: "emailRequired" }),
    subject: z.string().min(1, { message: "subjectRequired" }),
    message: z.string().min(1, { message: "messageRequired" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const sendContactData = async (data: any) => {
    setLoading(true);
    try {
      await sendData({ data, url: "contact_us" });
      toast.success(t("messagesent"));
      reset();
    } catch (error) {
      toast.error(`${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(sendContactData)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t("nameLabel")}
          </label>
          <input
            {...register("name")}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition"
            placeholder={t("namePlaceholder")}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {t(errors.name.message)}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t("emailLabel")}
          </label>
          <input
            {...register("email")}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition"
            placeholder={t("emailPlaceholder")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {t(errors.email.message)}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {t("subjectLabel")}
        </label>
        <input
          {...register("subject")}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition"
          placeholder={t("subjectPlaceholder")}
        />
        {errors.subject && (
          <p className="text-red-500 text-sm mt-1">
            {t(errors.subject.message)}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {t("messageLabel")}
        </label>
        <textarea
          {...register("message")}
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition"
          placeholder={t("messagePlaceholder")}></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">
            {t(errors.message.message)}
          </p>
        )}
      </div>

      <div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-medium py-3 px-6 rounded-lg transition shine ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-primary hover:bg-primary/90"
          }`}>
          {loading ? t("sending") : t("submitButton")}
        </button>
      </div>
    </form>
  );
}
