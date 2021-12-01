import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAppResaltado]',
})
export class AppResaltadoDirective {
  constructor(el: ElementRef) {
    console.log('Directiva activa');
    console.log(el);
  }
}
