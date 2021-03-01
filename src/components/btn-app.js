import { html, LitElement } from 'lit-element';
import { BtnAppCss } from '../css/btn-app-styles';

class BtnApp extends LitElement {
    static get properties() {
        return {
            text: { type: String },
            counter: { type: String}, 
        }
    }

    static get styles() {
        return [BtnAppCss];
    }

    handleClick() {
        this.dispatchEvent(new CustomEvent('click-btn', {
            detail: this.text,
            composed: true,
            bubbles: true,
        }))
    }

    render() {
        return html`<li>
                    <button @click=${this.handleClick}
                    ?disabled=${this.counter === this.text}>${this.text}</button></li>`
    }
}

customElements.define('btn-app', BtnApp);