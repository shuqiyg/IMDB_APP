const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'aef6c9d5a8c77566f14120b2e21e01a6',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;