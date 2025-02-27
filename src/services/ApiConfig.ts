const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "d3452b19e67f88ba98eebcd38a8426c8",
  originalImage: (imgPath: string) =>
    `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath: string) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
