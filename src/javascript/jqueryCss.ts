/*

Implement jQuery.css method

*/

const jq = (selector: string) => {
  let elements = [...document.querySelectorAll<HTMLElement>(selector)];

  return {
    css: (
      property: string | string[] | Record<string, any>,
      value?: string | Function
    ) => {
      if (elements.length === 0 || typeof property === "undefined") return;

      // getter
      if (typeof property === "string" && typeof value === "undefined") {
        let styles = getComputedStyle(elements[0]);
        return styles[property as any];
      }
      //getter
      else if (Array.isArray(property) && typeof value === "undefined") {
        let styles = getComputedStyle(elements[0]);
        let obj: Record<string, any> = {};
        for (let key of property) {
          obj[key] = styles[key];
        }
        return obj;
      }
      // setter
      else if (typeof property === "object" && !Array.isArray(property)) {
        for (let element of elements) {
          for (let key in property) {
            element.style[key as any] = property[key];
          }
        }
      }
      //   setter
      else if (typeof property === "string" && typeof value !== "undefined") {
        elements.forEach((element, index) => {
          let propertyValue =
            typeof value === "function" ? value.call(element, index) : value;
          if (propertyValue) {
            element.style[property as any] = propertyValue;
          }
        });
      }
    },
  };
};

document.body.innerHTML = `<div>
<p id="test" style="color: red; opacity: 1;">Hello World</p>
<p>Hello</p>
</div>`;

console.log(jq("#test").css("color")); // rgb(255, 0, 0)

console.log(jq("#test").css(["color", "opacity"])); // { color: 'rgb(255, 0, 0)', opacity: '1' }

jq("#test").css("color", "green");

// sets every even p color as orange and odd as green
// if the function returns undefined then do not change the original value
jq("p").css("color", (index: number) => (index % 2 === 0 ? "orange" : "green"));

// sets all p tags color as red and opacity: 0
jq("p").css({ color: "yellow", background: "red" });
