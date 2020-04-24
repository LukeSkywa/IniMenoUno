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
      document.getElementById("password").setAttribute('type', 'text');
    
    } else {
      document.getElementById("password").setAttribute('type', 'password');
      
    }
  }
  setup() {
    const parent = this.el.nativeElement.parentNode;
    const button = this.el.nativeElement;
    
    button.addEventListener('click', (event) => {
      this.toggle(button);
    });
    
  }
}
