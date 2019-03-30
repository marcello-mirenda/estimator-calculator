import { definePopUpInfo } from "./components/pop-up-info/pop-up-info.js"
import { defineSiteItemView } from "./components/site-item-view/component.js"
import { defineSiteItemsView } from "./components/site-items-view/component.js"
import { defineSiteDetailsView } from "./components/site-details-view/component.js"
import { defineSiteDetailView } from "./components/site-detail-view/component.js"
import { MessageBroker, Subscriber, Message } from "./message-broker.js"

class Subscriber1 extends Subscriber {
    newMessage(message) {
        console.log('subscriber1:' + JSON.stringify(message));
    }
}

class Subscriber2 extends Subscriber {
    newMessage(message) {
        console.log('subscriber2:' + JSON.stringify(message));
    }
}

class SiteItemsSubscriber extends Subscriber {
    constructor(siteDetailsView, data) {
        super();
        this._siteDetailsView = siteDetailsView;
        this._data = data;
    }

    newMessage(message) {
        const data = this._data.packages.find(x => x.id === message.data).detail;
        this._siteDetailsView.clear();
        data.forEach(element => {
            this._siteDetailsView.appendChild(createDetailView(element));
        });
        this._siteDetailsView.refresh();
    }
}

class Application {
    constructor(messageBrokers, messageSubscribers, data) {
        this.messageBrokers = messageBrokers;
        this.messageSubscribers = messageSubscribers;
        this.data = data;
    }
}

export function run() {
    window.componentBaseUrl = new URL('client/components', window.location);
    definePopUpInfo();
    defineSiteItemView();
    defineSiteItemsView();
    defineSiteDetailView();
    defineSiteDetailsView();

    const siteDetailsView = document.querySelector('site-details-view');

    const data = getData();
    const app = new Application({
        siteItemsViewMessageBroker: new MessageBroker
    }, {
        siteItemsViewSubscriber: new SiteItemsSubscriber(siteDetailsView, data)
    },
    data);
    app.messageBrokers.siteItemsViewMessageBroker.subscribe(app.messageSubscribers.siteItemsViewSubscriber);

    const siteItemsView = document.querySelector('site-items-view');
    siteItemsView.messageBroker = app.messageBrokers.siteItemsViewMessageBroker;

    app.data.packages.forEach(element => {
        siteItemsView.appendChild(createSiteItemView(element));
    });

    console.log('app started');
    return app;
}

export function test() {
    const messageBroker = new MessageBroker;
    const subscriber1 = new Subscriber1
    const subscriber2 = new Subscriber2
    messageBroker.subscribe(subscriber1);
    messageBroker.subscribe(subscriber2);
    messageBroker.sendMessage(new Message({text:'hello'}));
}

function createSiteItemView(site) {
    const element = document.createElement('site-item-view');
    element.description = site.description;
    element.price = site.price;
    element.info = site.id;
    return element;
}

function createDetailView(site) {
    const element = document.createElement('site-detail-view');
    element.description = site.description;
    return element;
}

function getData() {
    return {
        packages: [
            {
                id: 1,
                description: "Vetrina",
                price: 100,
                detail: [
                    {
                        description: "Pagina Home"
                    },
                    {
                        description: "Chi siamo"
                    },
                    {
                        description: "Contatti"
                    },
                    {
                        description: "I nostri servizi"
                    }
                ]
            },
            {
                id: 2,
                description: "E-Commerce",
                price: 500,
                detail: [
                    {
                        description: "Pagina Home"
                    },
                    {
                        description: "I nostri prodotti"
                    },
                    {
                        description: "Contatti"
                    },
                    {
                        description: "I Termini di Servizio + Gestione E-commerce"
                    }
                ]
            },
            {
                id: 3,
                description: "Booking",
                price: 320,
                detail: [
                    {
                        description: "Pagina Home"
                    },
                    {
                        description: "La struttura"
                    },
                    {
                        description: "Prenota"
                    },
                    {
                        description: "Contatti + Gestione Booking"
                    }
                ]
            }
        ]
    }
}