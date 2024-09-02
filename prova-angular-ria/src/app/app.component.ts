import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // standalone: true,
})
export class AppComponent {
  title = 'prova-angular-ria';
  hoverIndex: number = -1;

  lista: string[] = [];
  valorParaAdicionar: string = ''; 

  adicionarValorALista() {
    if (this.valorParaAdicionar.trim() !== '') {
      this.lista.push(this.valorParaAdicionar.trim());
      this.valorParaAdicionar = '';
    }
  }

  quandoMouseEnter(index: number) {
    this.hoverIndex = index;
  }

  quandoMouseLeave() {
    this.hoverIndex = -1;
  }

}
