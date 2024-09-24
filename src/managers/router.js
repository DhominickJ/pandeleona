import routeHandlers from "../pages/handlers"
import { fetchHtml, hash } from "./fetcher"

export default class Router {
    /** @type {Router} */
    static #instance

    container = document.getElementById('replace')
    constructor() {
        if (Router.#instance)
            throw new Error('You cannot create another instance!')
    }

    static get instance() {
        if (!this.#instance)
            this.#instance = new Router()

        return this.#instance
    }

    setDefaults() {
        // if (window.location.hash !== "#")
        //     window.location.hash = "#"
    }

    init() {
        this.setDefaults()

        /** @type {HTMLAnchorElement[]} */
        const links = document.querySelector('nav').querySelectorAll('a')

        const handleFetch = async () => {
            const { url, params } = hash()
            const html = await fetchHtml(url, params)

            links.forEach(
                link =>
                    link.classList.toggle(
                        'active',
                        link.href.replace(
                            window.location.origin + '/', ''
                        ) === `#${url === 'home' ? '' : url}`
                    )
            )

            this.container.innerHTML = html
            this.container.className = `route-${url}`
            routeHandlers[url]()
        }

        window.onhashchange = handleFetch
        handleFetch()
    }
}