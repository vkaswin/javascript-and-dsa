let template = `
    <div>
        <span style='color:green'>Loreum Ispum...</span>
        <div><span style='color:red'>Loreum Ispum...</span></div>
        <div><span style='color:green'>Loreum Ispum...</span></div>
        <span><span style='color:red'>Loreum Ipsum...</span>
        <span style='color:green'>Loreum Ispum</span></span>
    </div>
    <div>
        <span style='color:green'>Loreum Ispum...</span>
        <div><span style='color:red'>Loreum Ispum...</span></div>
        <div><span style='color:green'>Loreum Ispum...</span></div>
        <span><span style='color:red'>Loreum Ipsum...</span>
        <span style='color:green'>Loreum Ispum</span></span>
    </div>
`;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = template;

let findElementsByColorCode = (colorCode: string): Element[] => {
  let output: Element[] = [];

  const checkElementColor = (element: Element) => {
    let { color } = window.getComputedStyle(element);
    if (colorCode !== color) return;
    output.push(element);
  };

  const iterateHTMLCollection = (
    childrens: HTMLCollection = document.body.children
  ) => {
    for (let element of childrens) {
      checkElementColor(element);
      if (element.childElementCount > 0) {
        iterateHTMLCollection(element.children);
      }
    }
  };

  let element = document.createElement("div");
  element.style.color = colorCode;
  document.body.append(element);
  let { color } = window.getComputedStyle(element);
  colorCode = color;
  element.remove();

  iterateHTMLCollection();

  return output;
};

let elements = findElementsByColorCode("green");
console.log(elements);

export {};
