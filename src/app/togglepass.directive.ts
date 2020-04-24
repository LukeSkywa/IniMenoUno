import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTogglepass]'
})
export class TogglepassDirective {
  private _shown = false;
  constructor(private el: ElementRef) {
    this.setup();
  }
  toggle(button: HTMLElement) {
    this._shown = !this._shown;
    if (this._shown) {
      this.el.nativeElement.setAttribute('type', 'text');
      button.innerHTML = 'Hide password';
    } else {
      this.el.nativeElement.setAttribute('type', 'password');
      button.innerHTML = 'Show password';
    }
  }
  setup() {
    const parent = this.el.nativeElement.parentNode;
    const button = document.createElement('button');
    button.innerHTML = `Show password`;
    button.addEventListener('click', (event) => {
      this.toggle(button);
    });
    parent.appendChild(button);
  }
}
