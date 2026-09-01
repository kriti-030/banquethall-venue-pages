import Footer from "../Components/Footer.jsx";

const PlaceholderPage = ({ title }) => {
  return (
    <>
      <div className="min-h-screen bg-blue-50 pt-20 pb-16 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-600 mt-4">Placeholder page for local routing preview.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PlaceholderPage;
