import { css } from 'lit-element';

export const ItemAppCss = css`
    :host {
        margin: 0px 1% 20px;
        width: 31.33%;
        padding: 5px 15px 0;
        border-radius: 5px;
        box-shadow: 0 0 10px #b1b0b0;
        box-sizing: border-box;
        background: #fff;
        animation-duration: .5s;
        animation-name: fadeIn;
    }

    @media(max-width: 768px) {
        :host {
            width: 48%;
        }
    }

    @media(max-width: 550px) {
        :host {
            width: 98%;
        }
    }

    h2 {
        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;
    }

    h2 sup {
        font-size: 10px;
        font-weight: normal;
    }

    p {
        text-transform: capitalize;
        font-size: 12px;
        line-height: 18px;
    }

    p:last-child {
        color: #0d9aec;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    `