import { html, LitElement } from 'lit-element';
import './item-data';
import './pager-app';
import { ListAppCss } from '../css/list-app-styles';

class ListData extends LitElement {
    static get properties() {
        return {
            data: { type: Array },
            counter: { type: String },
        }
    }

    static get styles() {
        return [ListAppCss];
    }

    update() {
        super.update();
        //console.log('shadow', this.shadowRoot.querySelector('ul'));
    }

    render() {
        return html`<ul>${this.data.map(el =>
            html`<item-data .data=${el}></item-data>`)}</ul>
                <pager-app counter=${this.counter}></pager-app>`
    }
}

customElements.define('list-data', ListData);