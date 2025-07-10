export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(amount);
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("id-ID");
};
