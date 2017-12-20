export class CustomElement extends HTMLElement {
    $style() {
        return '';
    }

    $template() {
        return '';
    }

    $vars() {

    }

    static $attributes() {
        return [];
    }

    constructor() {
        super();
        this.$vars();
        this.$dom = this.attachShadow({mode: 'open'});
        this.repaint();
    }

    repaint() {
        this.$dom.innerHTML = '<style>' + this.$style() + '</style>' + this.$template();
        this.bindThisToEvents();
        this.repaintCallback();
    }

    repaintCallback() {

    }

    bindThisToEvents() {
        const eventElements = this.$dom.querySelectorAll(`
            [onclick],
            [oncontextmenu],
            [ondblclick],
            [onmousedown],
            [onmouseenter],
            [onmouseleave],
            [onmousemove],
            [onmouseover],
            [onmouseout],
            [onmouseup],
            [onkeydown],
            [onkeypress],
            [onkeyup],
            [ondrag],
            [ondragend],
            [ondragenter],
            [ondragleave],
            [ondragover],
            [ondragstart],
            [ondrop],
            [onwheel],
            [ontouchcancel],
            [ontouchend],
            [ontouchmove],
            [ontouchstart]
        `);

        const events = [
            'onclick',
            'oncontextmenu',
            'ondblclick',
            'onmousedown',
            'onmouseenter',
            'onmouseleave',
            'onmousemove',
            'onmouseover',
            'onmouseout',
            'onmouseup',
            'onkeydown',
            'onkeypress',
            'onkeyup',
            'ondrag',
            'ondragend',
            'ondragenter',
            'ondragleave',
            'ondragover',
            'ondragstart',
            'ondrop',
            'onwheel',
            'ontouchcancel',
            'ontouchend',
            'ontouchmove',
            'ontouchstart'
        ];

        // bind "this" for event functions
        // in this way we can use onclick="this.classMethod()"
        eventElements.forEach(element => {
            events.forEach(event => {                
                if (null !== element[event] && undefined !== element[event]) {
                    element[event] = element[event].bind(this);
                }
            });
        });
    }

    static define(tagName, classConstructor) {
        window.customElements.define(tagName, classConstructor);
    }

    static get observedAttributes() {
        return this.$attributes();
    }


}