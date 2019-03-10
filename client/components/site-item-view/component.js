class SiteItemView extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});

        this._wrapper = document.createElement('div');
        this._wrapper.setAttribute('class', 'site-item-view');

        this._description = document.createElement('div');
        this._description.setAttribute('class', 'site-item-view-description');
        const textDescription = this.getAttribute('data-description');
        this._description.textContent = textDescription;  
        this._wrapper.appendChild(this._description);

        this._price = document.createElement('div');
        this._price.setAttribute('class', 'site-item-view-price');
        const textPrice = this.getAttribute('data-price');
        this._price.textContent = textPrice;
        this._wrapper.appendChild(this._price);
        
        const cssLink = document.createElement('link');
        cssLink.setAttribute('href', new URL(componentBaseUrl.pathname + '/site-item-view/component.css', componentBaseUrl));
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

    get price() {
        return this._price.textContent;
    }

    set price(value) {
        this._price.textContent = value;
    }
}

export function defineSiteItemView() {
    customElements.define('site-item-view', SiteItemView);
  }
