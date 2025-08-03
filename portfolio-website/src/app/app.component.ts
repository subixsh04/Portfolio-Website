import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  skills = ["AngularJS", "Python", "Java", "C++", "SQL", "Firebase", "Linux", "HTML", "CSS", "MongoDB", "Javascript", "Typescript", "Bootstrap"];
  
  projects = [
    { title: "Recipe App", description: "A smart pantry & recipe generator", link: "https://github.com/subixsh04/Event-Management" },
    { title: "Event Management Platform", description: "Full-stack event organizer", link: "https://github.com/subixsh04/Event-Management" },
  ];

  downloadResume() {
    window.open("assets/Subiksha_Vaidhyanthan.pdf", "_blank");
  }
}
