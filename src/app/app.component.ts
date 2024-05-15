import { Section6Component } from './section-6/section-6.component';
import { Section3Component } from './section-3/section-3.component';
import { Section8Component } from './section-8/section-8.component';
import { Section9Component } from './section-9/section-9.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Section2Component } from './section-2/section-2.component';
import { Section4Component } from './section-4/section-4.component';
import { Section5Component } from './section-5/section-5.component';
import { FooterComponent } from './footer/footer.component';
import { Section7Component } from './section-7/section-7.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component,
    Section7Component,
    Section8Component,
    Section9Component,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '3ayez-doctor';
}
// register();
