import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponennt } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
declarations: [
    HeroeComponennt,
    ListadoComponent
],
exports: [
    ListadoComponent
],
imports: [
    CommonModule
]

})
export class HeroesModule {


}