   

  const city = "Jakarta";
  const street = "Jl. Kebon Jeruk";
 
export const getPosts = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const posts = await response.json();

    return posts;
  } catch (error) {
    console.error("Gagal mengambil data posts:", error);
    throw error;
  }
};
