export const selectBusiness = ({ businesses }, businessId) => {
  return businesses[businessId] || { reviewIds: [], categoryIds: [] };
};

// export const selectReviewsForBusiness = ({ reviews }, business) => {
//   return business.reviewIds.map((reviewId) => reviews[reviewId]);
// };

// export const selectCategoriesForBusiness = ({ categories }, business) => {
//   return business.categoryIds.map((categoryId) => categories[categoryId]);
// };

export const selectReviewsForBusiness = (state, business) => {
  return business
    ? business.reviewIds.map((id) => state.entities.reviews.reviews[id])
    : [];
};

export const selectReviewersForBusiness = (state, business) => {
  return business
    ? Object.keys(state.entities.reviews.reviewers).map(
        (key) => state.entities.reviews.reviewers[key]
      )
    : [];
};

export const selectCategoriesForBusiness = (state, business) => {
  return business
    ? business.categoryIds.map((id) => state.entities.categories[id])
    : [];
};

export const asArray = ({ businesses }) =>
  Object.keys(businesses).map((key) => businesses[key]);
