import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html', 
})
export class ListadoComponent   {

   heroes: string[] = ['Spiderman', 'IronMan', 'Hulk', 'Thor', 'Capitan America'];
   heroeBorrado: string = '';
   mostrar: boolean = false;

   borrarHeroe(): void{    
    
     this.heroeBorrado = this.heroes.pop() || '';    
   }



}
