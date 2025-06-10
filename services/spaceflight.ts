import axios from 'axios'

const baseUrl = process.env.SPACE_FLIGHT_BASE_URL || '';

export async function getArticles(): Promise<SpaceFlightResponse | null> {
    try {
        const res = axios.get('articles', {
            baseURL: baseUrl,
            params: {
                limit: 5,
                offset: 1,
            }
        });
        const articles = (await res).data as SpaceFlightResponse;
        return articles;
    } catch (error) {
        console.log("🚀 ~ getArticles ~ error:", error)
        return null;
    }

}