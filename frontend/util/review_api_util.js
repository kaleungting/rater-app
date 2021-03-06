export const fetchReviews = (businessId) => {
  return $.ajax({
    method: "GET",
    url: `api/businesses/${businessId}/reviews`,
  });
};

export const createReview = (review) => {
  return $.ajax({
    method: "POST",
    url: `api/businesses/${review.business_id}/reviews`,
    data: { review },
  });
};

export const updateReview = (review) => {
  return $.ajax({
    method: "PATCH",
    url: `api/businesses/${review.business_id}/reviews/${review.id}`,
    data: { review },
  });
};

export const deleteReview = (review) => {
  return $.ajax({
    method: "DELETE",
    url: `api/businesses/${review.business_id}/reviews/${review.id}`,
  });
};
