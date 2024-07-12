import { Component, Input, Output, output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-diretivas',
  standalone: true,
  imports: [],
  templateUrl: './diretivas.component.html',
  styleUrl: './diretivas.component.css'
})
export class DiretivasComponent {
  isActive = true;

  @Input() info = 'todos os direitos'
  
  @Output() infoChange = new EventEmitter<any>();
}

export 