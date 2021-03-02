import { html, LitElement } from 'lit-element';
import './list-data';

class FetchApp extends LitElement {
    static get properties() {
        return {
            data: { type: Array },
            counter: { type: String },
        }
    }

    constructor() {
        super();
        this.data = [];
        this.counter = '1';
    }

    connectedCallback() {
        super.connectedCallback();
        this.callFetch(this.counter);
        this.addEventListener('click-btn', this.handleCounter);
    }

    callFetch(param) {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${param}`)
            .then(res => res.json())
            .then(data => this.data = data);
    }

    handleCounter({detail}) {
        this.callFetch(detail);
        this.counter = detail;
    }

    update() {
        super.update();
        window.scrollTo(0, 0);
    }
   
    render() {
        return html`
            <list-data counter=${this.counter} .data=${this.data}></list-data>`
    }
}

customElements.define('fetch-app', FetchApp);