const BASE_URL = "https://dummyjson.com/products";
export const getProducts = async () => {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error("Xəta baş verdi");
    }
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.log(error);
    return [];
  }
};
