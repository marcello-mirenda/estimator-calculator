import { Message } from "../../message-broker.js"

class SiteItemsView extends HTMLElement {
    constructor() {
        super();

        this._children = new Set;
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
        this.addEventListener('newSiteItem', this._newSiteItem);
        Promise.all([
            customElements.whenDefined('site-item-view'),
        ])
            .then(_ => {
                this.querySelectorAll('site-item-view').forEach(element => {
                    element.margin = '0 5px 5px 0';
                    this._shadow.querySelector('div').appendChild(element);
                    this._newSiteItem(new CustomEvent('newSiteItem', {
                        detail: element
                    }));
                });
            });
    }

    disconnectedCallback() {
        this.removeEventListener('newSiteItem', this._newSiteItem);
        this._children.forEach(x => x.removeEventListener('click', _childOnClick));
    }

    _newSiteItem(event) {
        this._children.add(event.detail);
        event.detail.addEventListener('click', this);
    }

    handleEvent(event) {
        if (event.type === "click") {
            this._messageBroker.sendMessage(new Message(event.target.info));
        }
    }

    get messageBroker() {
        return this._messageBroker;
    }

    set messageBroker(value) {
        this._messageBroker = value;
    }
}

export function defineSiteItemsView() {
    customElements.define('site-items-view', SiteItemsView);
}
