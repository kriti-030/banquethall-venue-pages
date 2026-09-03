import { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import VenueContactForm from "./VenueContactForm";

const WHATSAPP_URL = "https://wa.me/918375967071";
const PHONE_HREF = "tel:+918375967071";

const FloatingContact = ({ venueName }) => {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [showCallback, setShowCallback] = useState(false);

  const openWhatsApp = () => {
    const message = venueName
      ? `Hi, I am interested in ${venueName}.`
      : "Hi, I am interested in booking a venue.";
    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const venueLabel =
    venueName || "BanquetHall.co";

  return (
    <>
      {/* Call — bottom LEFT */}
      <a
        href={PHONE_HREF}
        className="fixed left-4 bottom-4 z-[99999] flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-[0_4px_20px_rgba(0,0,0,0.35)] ring-4 ring-white transition hover:scale-105 hover:bg-green-600"
        aria-label="Call BanquetHall at +91-8375967071"
        title="Call +91-8375967071"
      >
        <FaPhone className="text-2xl" aria-hidden="true" />
      </a>

      {/* WhatsApp — bottom RIGHT */}
      <div className="fixed right-4 bottom-4 z-[99999]">
        {showWhatsApp && (
          <div className="absolute bottom-full right-0 mb-3 w-72 overflow-hidden rounded-lg bg-white shadow-2xl">
            <div className="flex items-center justify-between bg-[#25D366] px-4 py-3 text-white">
              <div className="flex items-center gap-2">
                <SiWhatsapp className="text-xl" aria-hidden="true" />
                <span className="text-sm font-semibold">BanquetHall.Co</span>
              </div>
              <button
                type="button"
                onClick={() => setShowWhatsApp(false)}
                className="text-xl leading-none hover:opacity-80"
                aria-label="Close WhatsApp chat"
              >
                ×
              </button>
            </div>

            <div className="bg-gray-100 p-4">
              <div className="rounded-lg bg-white p-3 shadow-sm">
                <p className="text-sm font-semibold text-gray-900">BanquetHall.co</p>
                <p className="mt-1 text-sm text-gray-700">Hi there! How can I help you?</p>
              </div>
            </div>

            <div className="bg-gray-100 px-4 pb-4">
              <button
                type="button"
                onClick={openWhatsApp}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-2.5 font-semibold text-white transition hover:bg-green-600"
              >
                <SiWhatsapp className="text-lg" aria-hidden="true" />
                Start Chat
              </button>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => setShowWhatsApp((open) => !open)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(0,0,0,0.35)] ring-4 ring-white transition hover:scale-105 hover:bg-green-600"
          aria-label="WhatsApp Chat"
          title="WhatsApp Chat"
        >
          <SiWhatsapp className="text-3xl" aria-hidden="true" />
        </button>
      </div>

      <div className="fixed left-0 top-1/2 z-[99998] -translate-y-1/2">
        <button
          type="button"
          onClick={() => setShowCallback(true)}
          className="rounded-r-full bg-red-500 px-4 py-2 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-red-600"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Call Back
        </button>
      </div>

      {showCallback && (
        <div
          className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/50 px-4"
          onClick={() => setShowCallback(false)}
          role="presentation"
        >
          <div
            className="relative w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Call back request"
          >
            <button
              type="button"
              onClick={() => setShowCallback(false)}
              className="absolute -right-3 -top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white font-bold text-gray-700 shadow-md"
              aria-label="Close"
            >
              ×
            </button>
            <VenueContactForm venueName={venueLabel} formType="callback" />
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingContact;
