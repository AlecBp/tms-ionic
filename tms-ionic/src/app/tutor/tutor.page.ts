import { Component, OnInit } from '@angular/core';

export interface Subject {
  title: string;
  level: number;
}

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.page.html',
  styleUrls: ['./tutor.page.scss'],
})
export class TutorPage implements OnInit {
  description: string;

  subjects: Subject[];

  constructor() {
    this.description =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores commodi ea adipisci porro similique, quam in sapiente deserunt expedita, illo aspernatur voluptatibus omnis ipsa corporis quisquam dicta? Exercitationem, debitis dolorum! Quod ipsam eius dolores excepturi. Incidunt dolorem quisquam molestias reprehenderit voluptatum, aperiam ut impedit mollitia, aspernatur, quod commodi doloremque. Consequuntur.';
    this.subjects = [];
    this.loadSubjects();
  }

  ngOnInit() {}

  loadSubjects(): void {
    const subejcts: Subject[] = [
      { title: 'Math', level: 2 },
      { title: 'Math', level: 3 },
      { title: 'English', level: 1 },
      { title: 'English', level: 2 },
      { title: 'French', level: 1 },
    ];

    this.subjects = [...subejcts];
  }
}
