import { html, LitElement } from 'lit-element';
import { TitleAppCss } from '../css/title-app-styles';

class TitleApp extends LitElement {
    static get properties() {
        return {
            text: { type: String }
        }
    }

    static get styles() {
        return [TitleAppCss];
    }

    constructor() {
        super();
        this.text = 'Api LitElement Pagination';
    }

    render() {
        return html`<h1>${this.text}</h1>`
    }
}

customElements.define('title-app', TitleApp);