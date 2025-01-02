function getAttributes() {
  const link = document.querySelector("#w3r");
  class Attributes {
    constructor() {
      this.href = link.getAttribute("href");
      this.hrefLang = link.getAttribute("hreflang");
      this.rel = link.getAttribute("rel");
      this.target = link.getAttribute("target");
      this.type = link.getAttribute("type");
    }
  }

  const attributes = new Attributes();

  for (let attribute of Object.entries(attributes)) {
    let [key, value] = attribute;
    console.log(`${key} : ${value}`);
  }
}
