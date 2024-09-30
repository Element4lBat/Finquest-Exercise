import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LanguagePipe } from './shared/pipes/language.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LanguagePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
