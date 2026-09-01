import { useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

const buildDirectionsUrl = (address) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

const buildMapEmbedUrl = (address, name) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(`${name}, ${address}`)}&z=15&output=embed`;

const VenueAddress = ({ venue }) => {
  const [visitDate, setVisitDate] = useState("");
  const [visitTime, setVisitTime] = useState("");

  const address = venue.location?.displayAddress ?? venue.address;
  const directionsUrl =
    venue.location?.directionsUrl ?? buildDirectionsUrl(address);
  const mapEmbedUrl =
    venue.location?.mapEmbedUrl ?? buildMapEmbedUrl(address, venue.name);

  const handleSchedule = (e) => {
    e.preventDefault();
    if (!visitDate || !visitTime) {
      alert("Please select both date and time for your visit.");
      return;
    }
    alert(`Visit scheduled for ${visitDate} at ${visitTime}. Our team will contact you soon!`);
    setVisitDate("");
    setVisitTime("");
  };

  if (!address) return null;

  return (
    <section className="p-6 md:p-8 bg-white shadow-md rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        <MapPin className="h-6 w-6 text-red-500 shrink-0" aria-hidden="true" />
        <h2 className="text-2xl font-bold text-gray-800">Venue Address</h2>
      </div>

      <p className="text-gray-600 mb-6">
        {address}{" "}
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-medium hover:underline whitespace-nowrap"
        >
          Get Directions →
        </a>
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="min-h-[280px] rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
          <iframe
            title={`Map — ${venue.name}`}
            src={mapEmbedUrl}
            className="w-full h-full min-h-[280px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="rounded-lg bg-[#0f1a3d] p-6 md:p-8 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-white mb-6">
            <Calendar className="h-5 w-5 shrink-0" aria-hidden="true" />
            <h3 className="text-lg font-semibold">Schedule a visit to the venue</h3>
          </div>

          <form onSubmit={handleSchedule} className="space-y-4">
            <div className="relative">
              <input
                type="date"
                value={visitDate}
                onChange={(e) => setVisitDate(e.target.value)}
                className="w-full rounded-md border border-gray-600 bg-[#1a2744] px-4 py-3 pr-10 text-white outline-none focus:border-pink-400"
                required
              />
              <Calendar
                className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none"
                aria-hidden="true"
              />
            </div>

            <div className="relative">
              <input
                type="time"
                value={visitTime}
                onChange={(e) => setVisitTime(e.target.value)}
                className="w-full rounded-md border border-gray-600 bg-[#1a2744] px-4 py-3 pr-10 text-white outline-none focus:border-pink-400"
                required
              />
              <Clock
                className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none"
                aria-hidden="true"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-pink-500 py-3 text-white font-semibold hover:bg-pink-600 transition"
            >
              Schedule Visit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VenueAddress;
