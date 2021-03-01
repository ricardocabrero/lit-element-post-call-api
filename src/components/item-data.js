import { html, LitElement } from 'lit-element';
import { ItemAppCss } from '../css/item-app-styles';

class ItemData extends LitElement {
    static get properties() {
        return {
            data: { type: Object }
        }
    }

    static get styles() {
        return [ItemAppCss];
    }

    render() {
        const { id, name, body, email } = this.data;
        return html`<li id="item-${id}">
                        <h2>${name} <sup>${id}</sup></h2>
                        <p>${body}</p>
                        <p>${email}</p>
                    </li>`
    }
}

customElements.define('item-data', ItemData);