export const loadData = async (url: string, data: {}) => {
    const response = await fetch(url);
    return await response.json();
};
