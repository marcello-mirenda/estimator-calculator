class SiteDetailView extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        this._wrapper = document.createElement('div');
        this._wrapper.setAttribute('class', 'item-view');

        this._description = document.createElement('div');
        this._description.setAttribute('class', 'item-description');
        const textDescription = this.getAttribute('data-description');
        this._description.textContent = textDescription;
        this._wrapper.appendChild(this._description);

        const cssLink = document.createElement('link');
        cssLink.setAttribute('href', new URL(componentBaseUrl.pathname + '/site-detail-view/component.css', componentBaseUrl));
        cssLink.setAttribute('rel', 'stylesheet');

        shadow.appendChild(cssLink);

        shadow.appendChild(this._wrapper);
    }

    get margin() {
        return this._wrapper.style.margin;
    }

    set margin(margin) {
        this._wrapper.style.margin = margin;
    }

    get description() {
        return this._description.textContent;
    }

    set description(value) {
        this._description.textContent = value;
    }

}

export function defineSiteDetailView() {
    customElements.define('site-detail-view', SiteDetailView);
}
