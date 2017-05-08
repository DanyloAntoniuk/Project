import { Component, OnInit } from '@angular/core';
import { HttpService } from '../data.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
  hobbies: string[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getData().subscribe((data) => {
      this.hobbies = data.hobby;
    });
  }

}
