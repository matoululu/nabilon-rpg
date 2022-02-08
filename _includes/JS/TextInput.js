class TextInput extends HTMLElement {
  constructor() {
    super();
    this.input = this.querySelector('input');
    this.submit = this.querySelector('button');

    this.inputValue = this.input.value;

    this.init();
  }

  init() {
    this.input.addEventListener('keyup', e => {
      if (e.code === 'Enter') {
        this.handleSubmit(this.input.value);
      }
    });

    this.submit.addEventListener('click', e => {
      this.handleSubmit(this.input.value);
    });
  }

  handleSubmit(content) {
    const submitEvent = new CustomEvent('text:submit', {
      detail: {
        content
      },
      bubbles: true,
    });

    this.dispatchEvent(submitEvent);
    this.input.value = '';
  }
}

customElements.define('text-input', TextInput);
