export class MessageBroker {

    constructor() {
        this._subscribers = new Set;
    }

    subscribe(subscriber) {
        if (!subscriber.constructor.prototype.hasOwnProperty('newMessage')) {
            throw Error('Invalid operation.');
        }
        this._subscribers.add(subscriber);
    }

    sendMessage(message) {
        if (!message.constructor.prototype.hasOwnProperty('data')) {
            throw Error('Invalid operation.');
        }
        this._subscribers.forEach(s => s.newMessage(message));
    }
}

export class Subscriber {
    newMessage() {
        throw Error('Not subclassed.')
    }
}

export class Message {
    constructor(data) {
        this._data = data;
    }

    get data() {
        return this._data;
    }
}