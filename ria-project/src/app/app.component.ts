import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {DiretivasComponent } from "./components/diretivas/diretivas.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FirstComponentComponent, FormsModule, MatSlideToggleModule, MatInputModule, MatFormFieldModule, DiretivasComponent]
})

export class AppComponent {
  title = 'ria-project';
  
}
