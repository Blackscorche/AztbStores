import React from "react";
import {
  Phone,
  Mail,
  Facebook,
  MessageCircle,
  Send,
  MapPin,
  Music2, // TikTok icon
  Camera, // Instagram icon
  Ghost, // Snapchat icon
} from "lucide-react";

const ContactOption = ({ href, icon: Icon, label }) => (
  <li>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-3 p-3 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
    >
      <Icon className="text-blue-500" />
      <span>{label}</span>
    </a>
  </li>
);

const ContactPage = () => {
  const contactOptions = [
    {
      href: "https://maps.google.com/?q=Shop 44, No 5 Otigba Street, Computer Village, Ikeja, Lagos State",
      icon: MapPin,
      label: "Shop 44, No 5 Otigba Street, Computer Village, Ikeja, Lagos State",
    },
    {
      href: "tel:+2348151162929",
      icon: Phone,
      label: "+2348151162929",
    },
    {
      href: "mailto:aztbstores@gmail.com",
      icon: Mail,
      label: "aztbstores@gmail.com",
    },
    {
      href: "https://wa.me/+2348151162929",
      icon: MessageCircle,
      label: "WhatsApp Us",
    },
    {
      href: "https://instagram.com/aztbstores",
      icon: Camera, // Instagram icon
      label: "@aztbstores",
    },
    {
      href: "https://facebook.com/aztbstores",
      icon: Facebook,
      label: "AztbStores",
    },
    {
      href: "https://snapchat.com/add/aztbstores",
      icon: Ghost, // Snapchat icon
      label: "Snapchat",
    },
    {
      href: "https://tiktok.com/@aztbstores",
      icon: Music2, // TikTok icon
      label: "TikTok",
    },
    {
      href: "https://t.me/aztbstores",
      icon: Send,
      label: "Telegram",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50 mt-15">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 mt-12 mb-3">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-4">
          Contact Us
        </h2>
        <p className="text-left text-gray-600 mb-6 text-[15px]">
          We’d love to hear from you! If you have a question about our products
          or need help with an order, feel free to reach us through any of the
          options below.
        </p>

        <ul className="space-y-4">
          {contactOptions.map((option, index) => (
            <ContactOption
              key={index}
              href={option.href}
              icon={option.icon}
              label={option.label}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;