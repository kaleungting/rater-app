export const fetchReviews = (businessId) => {
  return $.ajax({
    url: `api/businesses/${businessId}/reviews`,
    method: "GET",
  });
};
