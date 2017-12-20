import {CustomElement} from './../../custom-element';

CustomElement.define('app-custom', class extends CustomElement {

    $style() {
        return `
        p {
            color: ${this.color};
        }
        `;
    }

    $template() {
        return `
        <p>Hello World</p>
        <button onclick="this.changeColor('red')">Red</button>
        <button onmousedown="this.changeColor('yellow')">Yellow</button>
        <button onmouseup="this.changeColor('green')">Green</button>
        <button onclick="this.countUp()">Count Up</button>
        <button onclick="this.countReset()">Count Reset</button>
        ${Array(this.count).fill().map((element, i) => `
        <div>
        I am item number ${i}.
        </div>
        `.trim()).join('')}
        `;
    }

    $vars() {
        this._color = 'yellow';
        this.count = 0;
    }

    set color(color) {
        this._color = color;
    }

    get color() {
        return this._color;
    }

    static $attributes() {
        return ['color'];
    }

    constructor() {
        super();
    }
 
    attributeChangedCallback(name, oldValue, newValue) {
        this.color = newValue;
        this.repaint();
        console.log(name, oldValue, newValue);
    }

    changeColor(color) {
        this.color = color;
        this.repaint();
        console.log('changeColor called: ' + color);
    }

    repaintCallback() {
        
    }

    countUp() {
        this.count++;
        this.repaint();
    }

    countReset() {
        this.count = 0;
        this.repaint();
    }

});
