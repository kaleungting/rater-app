export const fetchBusinesses = () => {
  return $.ajax({
    method: "GET",
    url: "/api/businesses",
  });
};

export const fetchBusiness = (businessId) => {
  return $.ajax({
    method: "GET",
    url: `/api/businesses/${businessId}`,
  });
};
