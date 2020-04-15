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

export const searchBusinesses = (search) => {
  return $.ajax({
    method: "GET",
    url: "/api/businesses",
    data: { search },
  });
};

export const fetchCategories = (businessId) => {
  return $.ajax({
    method: "GET",
    url: `api/businesses/${businessId}/categories`,
  });
};

export const fetchAllCategories = () => {
  return $.ajax({
    method: "GET",
    url: "/api/categories",
  });
};
