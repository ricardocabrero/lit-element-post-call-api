import { css } from 'lit-element';

export const BtnAppCss = css`
    li {
        height: 100%;
    }
    
    button {
        padding: 0;
        border-radius: 3px;
        text-align: center;
        width: 40px;
        height: 25px;
        color: #fff;
        background: #17b9f7;
        margin-bottom: 5px;
        margin-right: 5px;
        border: 1px solid #04809c;
        outline: none;
        cursor: pointer;
    }

    button:hover {
        background: #0e85b4cf;
        border: 1px solid #033f70cf;      
    }

    button:disabled {
        background: #0e85b4cf;
        border: 1px solid #033f70cf;
        cursor: default;
    }
    `