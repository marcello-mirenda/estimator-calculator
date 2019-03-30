class SiteDetailView extends HTMLElement {

    constructor() {
        super();

        this._shadow = this.attachShadow({ mode: 'open' });

        this._wrapper = document.createElement('div');
        this._wrapper.setAttribute('class', 'main-container');

        this._title = document.createElement('h1');
        this._title.setAttribute('class', 'title');
        const textTitle = this.getAttribute('data-title');
        this._title.textContent = textTitle;
        this._wrapper.appendChild(this._title);

        const cssLink = document.createElement('link');
        cssLink.setAttribute('href', new URL(componentBaseUrl.pathname + '/site-details-view/component.css', componentBaseUrl));
        cssLink.setAttribute('rel', 'stylesheet');

        this._shadow.appendChild(cssLink);

        this._shadow.appendChild(this._wrapper);
    }

    connectedCallback() {
        Promise.all([
            customElements.whenDefined('site-detail-view'),
        ])
            .then(_ => {
                this.querySelectorAll('site-detail-view').forEach(element => {
                    element.margin = '0 5px 5px 0';
                    this._shadow.querySelector('div').appendChild(element);
                });
            });
    }

    get title() {
        return this._title.textContent;
    }

    set title(value) {
        this._title.textContent = value;
    }

    clear() {
        const container = this._shadow.querySelector('div');
        while (container.firstChild) {
            //The list is LIVE so it will re-index each call
            container.removeChild(container.firstChild);
        }
    }

    refresh() {
        this.querySelectorAll('site-detail-view').forEach(element => {
            element.margin = '0 5px 5px 0';
            this._shadow.querySelector('div').appendChild(element);
        });
    }
}

export function defineSiteDetailsView() {
    customElements.define('site-details-view', SiteDetailView);
}
