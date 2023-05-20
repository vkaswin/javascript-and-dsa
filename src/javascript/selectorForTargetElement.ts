/*

Generate CSS selector for the target element

Given a valid DOM tree and a target element, generate a valid selector to target it.

Example 1

<div>
    <h1>Devtools Tech</h1>
    <div>
        <p>Subscribe to our YT channel </p>
        <a href="youtube.com/c/devtoolstech">here</a>
    </div>
</div>

const selector = generateSelector(root, target);
console.log(selector); // div > div > a

Example 2

<section>
    <ul>
        <li>Home</li>
        <li>Services</li>
        <li>Product</li>
    </ul>
</section>

selecting li with text Product
const selector = generateSelector(root, target);
console.log(selector); // section > ul > li:nth-of-type(3)

*/

export const generateSelector = (
  root: HTMLAllCollection,
  target: HTMLElement
) => {
  let str = "";
  console.log(root, target);
  return str;
};
