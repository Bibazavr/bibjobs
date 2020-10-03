export const loadData = async (url: string, data: {}) => {
    try {
        const response = await fetch(url);
        return await response.json(); // parses JSON response into native JavaScript objects).catch(e => console.error(e))
    } catch (e) {
        console.error("loadData", e);
    }
};
