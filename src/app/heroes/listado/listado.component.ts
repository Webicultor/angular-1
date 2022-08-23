import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Hulk', 'Thor', 'Capitán América', 'Bruja Escarlata']
  heroeBorrado: string = "";
  borrarHeroe() {
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
