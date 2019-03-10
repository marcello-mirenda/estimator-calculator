class SiteItemsView extends HTMLElement {
    constructor() {
        super();

        this._shadow = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'site-items-view');

        const cssLink = document.createElement('link');
        cssLink.setAttribute('href', new URL(componentBaseUrl.pathname + '/site-items-view/component.css', componentBaseUrl));
        cssLink.setAttribute('rel', 'stylesheet');

        this._shadow.appendChild(cssLink);
        this._shadow.appendChild(wrapper);
    }

    connectedCallback() {
        Promise.all([
            customElements.whenDefined('site-item-view'),
        ])
            .then(_ => {
                this.querySelectorAll('site-item-view').forEach(element => {
                    element.margin = '0 5px 5px 0';
                    this._shadow.querySelector('div').appendChild(element);
                });
            });
    }
}

export function defineSiteItemsView() {
    customElements.define('site-items-view', SiteItemsView);
}
