class DoWhile extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    document.addEventListener('DOMContentLoaded', () => {
      const array = this.getArray();
      const template = this.getTemplate();

      const html = array.map(item => {
        const variables = this.getVariables();
        let content = template;

        variables.forEach(variable => {
          if(item[variable] !== undefined) {
            content = content.replace(`{${variable}}`, item[variable]);
          } else if(eval(variable) !== undefined) {
            content = content.replace(`{${variable}}`, eval(variable));
          } else {
            content = content.replace(`{${variable}}`, '');
          }
        });

        return content;
      }).join('');

      this.innerHTML = html;
    });
  }

  getTemplate() {
    return this.innerHTML;
  }

  getVariables() {
    return this.innerHTML.match(/{(.*?)}/g).map(item => item.replace('{', '').replace('}', ''));
  }

  getArray() {
    const arrayName = this.getAttribute('array');
    const arrayObject = eval(arrayName);

    if(arrayObject.constructor === Array) {
      return arrayObject;
    } else {
      throw new Error('Array should be an array');
    }
  }
}

//<do-while> tag
customElements.define('do-while', DoWhile);