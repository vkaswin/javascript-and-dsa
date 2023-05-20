/*

Implement DOM like structure tree

const vDocument = new VDocument();
const body = vDocument.createElement("body");
const div = vDocument.createElement("div");

div.innerHTML = "Hello, I am a div!";
body.appendChild(div);
vDocument.appendChild(body);

proper html structure 
const html = vDocument.render();

<html>
	<body>
		<div>
			Hello, I am a div!
		</div>
	</body>
</html>

*/

interface IDOMElement {
  tag: string;
  innerHTML: string;
  childrens: IDOMElement[];
  appendChild: (element: IDOMElement) => void;
}

export class DOMElement {
  childrens: IDOMElement[] = [];
  innerHTML: string = "";

  constructor(public tag: string) {}

  appendChild(element: IDOMElement) {
    this.childrens.push(element);
  }
}

export class VDocument extends DOMElement {
  private spaces = 4;

  constructor() {
    super("html");
  }

  createElement(tag: string) {
    return new DOMElement(tag);
  }

  render() {
    let html = "";

    html += `<${this.tag}>\n`;
    html += this.convertToString(this.childrens, this.spaces);
    html += `</${this.tag}>`;

    return html;
  }

  convertToString(childrens: IDOMElement[], space: number) {
    let html = "";

    for (let element of childrens) {
      html += `${" ".repeat(space)}<${element.tag}>\n`;
      if (element.innerHTML)
        html += `${" ".repeat(space + this.spaces)}${element.innerHTML}\n`;
      html += this.convertToString(element.childrens, space + this.spaces);
      html += `${" ".repeat(space)}</${element.tag}>\n`;
    }

    return html;
  }
}

const vDocument = new VDocument();
const body = vDocument.createElement("body");
const div = vDocument.createElement("div");
const span = vDocument.createElement("span");
const p = vDocument.createElement("p");
span.appendChild(p);
p.innerHTML = "Hello World!";
span.innerHTML = "Loreum Ispum...";
div.appendChild(span);
div.appendChild(p);
div.innerHTML = "Hello, I am a div!";
body.appendChild(div);
div.innerHTML = "Hello, I am a div!";
const div1 = vDocument.createElement("div");
const div2 = vDocument.createElement("div");
div1.innerHTML = "Hello, I am a div 1!";
div2.innerHTML = "Hello, I am a div 2!";
div.appendChild(div1);
div1.appendChild(div2);
vDocument.appendChild(body);

let html = vDocument.render();
console.log(html);
