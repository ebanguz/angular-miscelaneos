import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [
    `
 
  .text-center{
    text-align: center
  }
  .text-right{
    text-align: right 
  }
  `,
  ],
})
export class ClasesComponent {
  alerta: string = 'alert-info';
  loading: boolean = false


  alignCenter: any = {
    direction: true,
  };

  constructor() {}

  ejecutar(){
     

    this.loading = true

    setTimeout(()=> this.loading = false, 3000)
  }
}
