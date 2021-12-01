import { Component } from '@angular/core';

@Component({
  selector: `app-ng-style`,
  template: `<p [ngStyle]="{ 'font-size': tamano + 'px' }">
              Hola Mundo... esto es un tag
            </p>

            <p [style.fontSize.px]="tamano">
              Hola Mundo... esto es un tag
            </p>

            <button class="btn btn-primary" (click)="tamano = tamano + 5">+</button>
            <button class="btn btn-danger"  (click)="tamano = tamano - 5">-</button>
            `,
})
export class NgStyleComponent {
  tamano: number = 16;
}
