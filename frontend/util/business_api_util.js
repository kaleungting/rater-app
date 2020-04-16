export const fetchBusinesses = (filters) => {
  return $.ajax({
    method: "GET",
    url: "/api/businesses",
    data: {filters}
  });
};

export const fetchBusiness = (businessId) => {
  return $.ajax({
    method: "GET",
    url: `/api/businesses/${businessId}`,
  });
};

export const searchBusinesses = (search) => {
  return $.ajax({
    method: "GET",
    url: "/api/businesses",
    data: { search },
  });
};
