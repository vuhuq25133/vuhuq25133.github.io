export class WikipediaAPI {
    static BASE_URL = 'https://en.wikipedia.org/w/api.php';

    /**
     * @param {string} query 
     * @returns {Promise<Array>}
     */
    static async searchArticles(query) {

        const url =
            `${this.BASE_URL}?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=20&prop=pageimages|extracts&exintro&explaintext&exlimit=max&format=json&origin=*`;
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Unable to connect to Wikipedia server');

            const data = await response.json();

            // Wikipedia API trả về dữ liệu dạng Object lồng nhau, ta chuyển đổi sang Array cho dễ dùng
            if (data.query && data.query.pages) {
                return Object.values(data.query.pages);
            }
            return [];
        } catch (error) {
            console.error("Error when search: ", error);
            throw error;
        }
    }

    /**
     * Tìm kiếm nhanh gợi ý
     * @param {string} query 
     * @returns {Promise<Array>}
     */
    static async getSuggestions(query) {
        const url = `${this.BASE_URL}?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=3&prop=pageimages|extracts&exintro&explaintext&exlimit=max&format=json&origin=*`;
        try {
            const response = await fetch(url);
            if (!response.ok) return [];
            const data = await response.json();
            if (data.query && data.query.pages) {
                return Object.values(data.query.pages);
            }
            return [];
        } catch (error) {
            return [];
        }
    }

    /**
     * @param {string} title 
     * @returns {Promise<Object|null>}
     */
    static async getArticleDetail(title) {
        const url = `${this.BASE_URL}?action=query&titles=${encodeURIComponent(title)}&prop=extracts|pageimages|info&pithumbsize=400&inprop=url&redirects=&format=json&origin=*`;
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Cannot search detail article');
            const data = await response.json();
            if (data.query && data.query.pages) {
                return Object.values(data.query.pages)[0];
            }
            return null;
        } catch (error) {
            console.error("Error when search detail article", error);
            throw error;
        }
    }
}