import { html, LitElement } from 'lit-element';
import './btn-app';
import { PagerAppCss } from '../css/pager-app-styles';

class PagerApp extends LitElement {
    static get properties() {
        return {
            btns: { type: Number },
            text: { type: String },
            counter: { type: String}, 
        }
    }

    static get styles() {
        return [PagerAppCss];
    }

    constructor() {
        super();
        this.btns = 10;
    }

    _template() {
        const btnsHtml = [];

        for(let i = 0; i < this.btns; i++) {
            btnsHtml.push(html`<btn-app counter=${this.counter} text='${i+1}'></btn-app>`)
        }
        return html`<ul>${btnsHtml}</ul>`
    }

    render() {
        return this._template();
    }
}

customElements.define('pager-app', PagerApp);
