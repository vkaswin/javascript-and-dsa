/*

Implement getElementsByClassName

*/

export const getElementByClassName = (names: string) => {
  let elements: Element[] = [];
  let classNames = names.split(" ");

  let search = (childrens: HTMLCollection) => {
    for (let element of childrens) {
      let hasClass = classNames.every((name) =>
        element.classList.contains(name)
      );
      if (hasClass) elements.push(element);
      if (element.children.length > 0) search(element.children);
    }
  };

  search(document.body.children);

  return elements;
};

document.body.innerHTML = `<h1>The Document Object</h1>
<h2>The getElementsByClassName() Method</h2>

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

console.log(getElementByClassName("example color"));
