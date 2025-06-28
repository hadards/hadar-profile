import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Expertise } from './components/expertise/expertise';
import { Experience } from './components/experience/experience';
import { Articles } from './components/articles/articles';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { Innovation } from './components/innovation/innovation';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    Innovation,
    Hero,
    About,
    Expertise,
    Experience,
    Articles,
    Contact,
    Footer
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  title = 'Hadar Dashty - Senior Software & Data Leader';
}