import { definePopUpInfo } from "./components/pop-up-info/pop-up-info.js"
import { defineSiteItemView } from "./components/site-item-view/component.js"
import { defineSiteItemsView } from "./components/site-items-view/component.js"

export function run() {
    window.componentBaseUrl = new URL('client/components', window.location);
    definePopUpInfo();
    defineSiteItemView();
    defineSiteItemsView();

    const element = document.querySelector('site-items-view');
    element.appendChild(createSiteItemView('Vetrina', 340));
    element.appendChild(createSiteItemView('E-Commerce', 695));
    element.appendChild(createSiteItemView('Booking', 841));
    console.log('app started');
}

function createSiteItemView(description, price) {
    const element = document.createElement('site-item-view');
    element.description = description;
    element.price = price;
    return element;
}