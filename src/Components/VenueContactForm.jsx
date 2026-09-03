import { useState } from "react";

const inputClassName =
  "mt-1 w-full p-2 rounded bg-gray-800 text-white border border-gray-700 outline-none focus:border-pink-500 [color-scheme:dark]";

const VenueContactForm = ({ venueName, formType = "schedule", className = "" }) => {
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    if (formType === "schedule" && (!date || !time)) {
      alert("Please select both date and time for your visit.");
      return;
    }

    setSubmitting(true);

    const payload = {
      phone,
      venue: venueName,
      ...(formType === "schedule" && { date, time }),
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (response.ok) {
        alert(data.message ?? "Your request has been submitted!");
        setPhone("");
        setDate("");
        setTime("");
      } else {
        alert(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      alert("Network error; please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${className} p-6 bg-gray-900 text-white rounded-lg shadow-lg`}
    >
      <h3 className="text-xl font-semibold mb-4">
        {formType === "schedule" ? "📅 Schedule a visit" : "📞 Have us call you"}
      </h3>

      {formType === "schedule" && (
        <div className="space-y-4 mb-4">
          <div>
            <label htmlFor="visit-date" className="block text-sm font-medium">
              Date
            </label>
            <input
              id="visit-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className={inputClassName}
            />
          </div>
          <div>
            <label htmlFor="visit-time" className="block text-sm font-medium">
              Time
            </label>
            <input
              id="visit-time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className={inputClassName}
            />
          </div>
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="visit-phone" className="block text-sm font-medium">
          Phone Number
        </label>
        <div className="flex mt-1">
          <span className="inline-flex items-center px-3 bg-gray-800 border border-gray-700 rounded-l">
            +91
          </span>
          <input
            id="visit-phone"
            type="tel"
            inputMode="numeric"
            maxLength="10"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
            placeholder="10-digit mobile"
            required
            className="flex-1 p-2 rounded-r bg-gray-800 text-white border border-gray-700 outline-none focus:border-pink-500"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-2 bg-pink-600 hover:bg-pink-700 rounded-lg font-semibold transition disabled:opacity-60"
      >
        {submitting
          ? "Sending..."
          : formType === "schedule"
            ? "Schedule Visit"
            : "Submit Callback"}
      </button>
    </form>
  );
};

export default VenueContactForm;
