import { css } from 'lit-element';

export const TitleAppCss = css`
    h1 {
        font-size: 24px;
        letter-spacing: .3px;
        margin-top: 5px;
        margin-bottom: 30px;
        padding: 0 0 0 40px;
    }

    @media(max-width: 650px) {
        h1 {
            padding-left: 20px;
        }
    }
    `