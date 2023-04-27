import axios from 'axios'

export default async function getWikiResults(searchTerm: string) {
    const searchParams = new URLSearchParams({
        action: 'query',
        generator: 'search',
        gsrsearch: searchTerm,
        gsrlimit: '20',
        prop: 'pageimages|extracts',
        exchars: '100',
        exintro: 'true',
        explaintext: 'true',
        exlimit: 'max',
        format: 'json',
        origin: '*',
    })
    const api_url = `https://en.wikipedia.org/w/api.php?${searchParams}`
    console.log(api_url)
    
    const response = await axios.get(api_url)
    return response.data
}