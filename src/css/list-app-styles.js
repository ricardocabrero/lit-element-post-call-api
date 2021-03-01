import { css } from 'lit-element';

export const ListAppCss = css`
    ul {
        padding: 0px 40px 50px;
        margin: 0 -1%;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        width: 101%;
        box-sizing: border-box;
    }

    @media(max-width: 650px) {
        ul {
            padding: 0px 20px 65px;
        }
    }
    `