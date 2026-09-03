import VenueContactForm from "./VenueContactForm";

const buildDirectionsUrl = (address) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

const buildMapEmbedUrl = (address, name) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(`${name}, ${address}`)}&z=15&output=embed`;

const VenueAddress = ({ venue }) => {
  const address = venue.location?.displayAddress ?? venue.address;
  const directionsUrl =
    venue.location?.directionsUrl ?? buildDirectionsUrl(address);
  const mapEmbedUrl =
    venue.location?.mapEmbedUrl ?? buildMapEmbedUrl(address, venue.name);
  const venueLabel = `${venue.name}, ${venue.cityLocality ?? ""}`.trim();

  if (!address) return null;

  return (
    <section className="p-6 bg-gray-50 shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">📍 Venue Address</h2>

      <p className="text-gray-700 mb-4">
        {address}
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline ml-2"
        >
          Get Directions →
        </a>
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-lg overflow-hidden border shadow-lg">
          <iframe
            title={`Google Maps — ${venue.name}`}
            width="100%"
            height="420"
            style={{ border: 0, borderRadius: "10px" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={mapEmbedUrl}
          />
        </div>

        <div className="rounded-lg shadow-lg self-start">
          <VenueContactForm venueName={venueLabel} formType="schedule" />
        </div>
      </div>
    </section>
  );
};

export default VenueAddress;
