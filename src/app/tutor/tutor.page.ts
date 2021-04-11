import {Component, OnInit} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {ActivatedRoute} from '@angular/router';

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
  userId: string;
  tutor: string;
  loading = true;
  error: any;

  USER = gql`
    query user($id: ID!) {
      user(id: $id) {
        id
        fullName
        bio
        subjects {
          name
          level
        }
      }
    }
  `;

  constructor(
    private apollo: Apollo,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(p => {
      this.userId = p.id;
    });
  }

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: this.USER,
        variables: {
          id: this.userId
        }
      })
      .valueChanges.subscribe((result: any) => {
      console.log(result?.data?.user);
      this.tutor = result?.data?.user;
      this.loading = result.loading;
      this.error = result.error;
    });
  }

}
