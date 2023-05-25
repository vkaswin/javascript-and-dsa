/*

Implement getElementsByTagName

*/

export const getElementByTagName = (tagName: string) => {
  let elements: Element[] = [];
  tagName = tagName.toUpperCase();

  let search = (childrens: HTMLCollection) => {
    for (let element of childrens) {
      if (element.children.length > 0) search(element.children);
      if (element.tagName === tagName) elements.push(element);
    }
  };

  search(document.body.children);

  return elements;
};

document.body.innerHTML = `<h1>The Document Object</h1>
<h2>The getElementsByTagName() Method</h2>

<p>Change the background color of the first element with the classes "example" and "color":</p>

<div class="example">
  <p>This is a paragraph.</p>
</div>
<br>
<div class="example color">
  <p>This is a paragraph.</p>
</div>
<br>
<div class="example color">
  <p>This is a paragraph.</p>
</div>

<script>
const collection = document.getElementsByClassName("example color");
collection[0].style.backgroundColor = "red";
</script>`;

console.log(getElementByTagName("div"));
