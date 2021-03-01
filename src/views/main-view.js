import { LitElement, html } from 'lit-element';
import '../components/title-app';
import '../components/fetch-app';
import { MainAppCss } from '../css/main-app-styles';

class MainView extends LitElement {

    static get styles() {
        return [MainAppCss];
    }

    render() {
        return html`
            <title-app></title-app>
            <fetch-app></fetch-app>`
    }
}

customElements.define('main-view', MainView);