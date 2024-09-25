
/**
 * 
 * @param {string} url 
 * @param {string[][]} params 
 */
export async function fetchHtml(url, params) {
    let fetchedHtml = await (await fetch(`/src/routes/${url || 'index'}.html`)).text()

    // If there are no routes match it 
    // will just return the contents of the 404 html string.
    if (fetchedHtml === await (await fetch('index.html')).text()) 
        fetchedHtml = await (await fetch('/src/routes/404.html')).text()

    for (const param of params) {
        // Parameter replacement based on the name that it searches inside of the fetched HTML
        fetchedHtml = fetchedHtml.replace(`{${param[0]}}`, param[1]) 
    }

    return fetchedHtml
}

export function hash() {
    const hash = window.location.hash
    const url = hash.split('?')[0].slice(1) || 'home'

    if (hash.split('?').length === 1) 
        return {
            url,
            params: []
        }
    const params = hash.split('?')[1].split('&').map(param => param.split('='))
    
    return { url, params }
}