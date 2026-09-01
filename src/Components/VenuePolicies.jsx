const VenuePolicies = ({ policies }) => {  if (!policies?.categories?.length) {
    return null;
  }

  const categories = policies.categories;

  return (
    <section className="p-6 md:p-8 bg-white shadow-md rounded-lg">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-2xl" aria-hidden="true">
          📜
        </span>
        <h2 className="text-2xl font-bold text-gray-800">Venue Policies</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <article
            key={category.title}
            className="rounded-lg border border-gray-200 bg-gray-50 p-4"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl" aria-hidden="true">
                {category.icon}
              </span>
              <h3 className="font-semibold text-gray-900">{category.title}</h3>
            </div>
            <ul className="space-y-1.5 text-sm text-gray-600 list-disc pl-4">
              {(category.items?.length ? category.items : ["Not available from source"]).map(
                (item, index) => (
                  <li key={`${category.title}-${index}`}>{item}</li>
                )
              )}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default VenuePolicies;
