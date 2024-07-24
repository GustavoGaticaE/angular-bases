import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

    public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
    public deletedHero?: string;

  removeLastHero (): void {
    // Este es para el ultimo Objeto
    this.deletedHero = this.heroNames.pop();
    // Este es para el Primer Objeto
    // this.heroNames.shift();
  }




}
