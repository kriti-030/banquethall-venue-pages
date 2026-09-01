export const formatInr = (value) =>
  typeof value === "number" ? value.toLocaleString("en-IN") : value;

export const getRatingBadge = (rating, reviewCount) => {
  const count =
    reviewCount != null ? formatInr(reviewCount) : "Not available";
  if (rating != null) {
    return `⭐ ${rating}/5 | ${count}`;
  }
  return `⭐ Rating not available | ${count} reviews`;
};

export const getAggregateRatingLabel = (rating) =>
  rating != null ? rating : "Not available";

export const getReviewCountLabel = (reviewCount) =>
  reviewCount != null ? formatInr(reviewCount) : "Not available";
