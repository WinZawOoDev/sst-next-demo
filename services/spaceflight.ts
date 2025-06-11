import axios from 'axios'

const baseUrl = process.env.SPACE_FLIGHT_BASE_URL || '';

export async function getArticles(): Promise<SpaceFlightResponse | null> {
    try {
        const res = axios.get('articles', {
            baseURL: baseUrl,
            params: {
                limit: 6,
                offset: 1,
            },
            timeout: 50000
        });
        const articles = (await res).data as SpaceFlightResponse;
        return articles;
    } catch (error) {
        console.log("🚀 ~ getArticles ~ error:", error)
        return null;
    }

}

export async function getArticleById(id: number): Promise<SpaceArticle | null> {
    try {
        const res = axios.get(`articles/${id}`, {
            baseURL: baseUrl,
            timeout: 50000
        });
        const article = (await res).data as SpaceArticle;
        return article;
    } catch (error) {
        console.log("🚀 ~ getArticleById ~ error:", error)
        return null;
    }
}