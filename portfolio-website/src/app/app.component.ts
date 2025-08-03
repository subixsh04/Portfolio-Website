import { Component, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit() {
    const options = {
      strings: ["Hi, I'm Subiksha Vaidhyanathan"],
      typeSpeed: 70,
      backSpeed: 40,
      loop: true
    };
    new Typed('#typed-name', options);

    AOS.init({
      duration: 800,
      once: true
    });
  }

  scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  downloadResume() {
    window.open('assets/Subiksha_Vaidhyanathan.pdf', '_blank');
  }
}
