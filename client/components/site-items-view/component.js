class SiteItemsView extends HTMLElement {
    constructor() {
        super();

        const template = this.getElementsByTagName('template').item(0);
        const content = template.content;

        const shadow = this.attachShadow({mode: 'open'});

        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'site-items-view');

        const cssLink = document.createElement('link');
        cssLink.setAttribute('href', new URL(componentBaseUrl.pathname + '/site-items-view/component.css', componentBaseUrl));
        cssLink.setAttribute('rel', 'stylesheet');

        wrapper.appendChild(content);

        shadow.appendChild(cssLink);
        shadow.appendChild(wrapper);
    }
}

export function defineSiteItemsView() {
    customElements.define('site-items-view', SiteItemsView);
  }
