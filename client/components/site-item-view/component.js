class SiteItemView extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});

        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'site-item-view');

        const description = document.createElement('div');
        description.setAttribute('class', 'site-item-view-description');
        const textDescription = this.getAttribute('data-description');
        description.textContent = textDescription;  
        wrapper.appendChild(description);

        const cssLink = document.createElement('link');
        cssLink.setAttribute('href', new URL(componentBaseUrl.pathname + '/site-item-view/component.css', componentBaseUrl));
        cssLink.setAttribute('rel', 'stylesheet');

        shadow.appendChild(cssLink);

        const price = document.createElement('div');
        price.setAttribute('class', 'site-item-view-price');
        const textPrice = this.getAttribute('data-price');
        price.textContent = textPrice;
        wrapper.appendChild(price);

        shadow.appendChild(wrapper);
    }
}

export function defineSiteItemView() {
    customElements.define('site-item-view', SiteItemView);
  }
