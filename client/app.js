import { definePopUpInfo } from "./components/pop-up-info/pop-up-info.js"
import { defineSiteItemView } from "./components/site-item-view/component.js"
import { defineSiteItemsView } from "./components/site-items-view/component.js"

export function run() {
    window.componentBaseUrl = new URL('client/components', window.location);
    definePopUpInfo();
    defineSiteItemView();
    defineSiteItemsView();
    console.log('app started');
}