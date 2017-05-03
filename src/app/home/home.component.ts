import { Component, OnInit } from '@angular/core';
import { HttpService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  })
export class HomeComponent implements OnInit {
  dateOfBirth: string;
  placeOfLiving: string;
  educations: string[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getData().subscribe( (data) => {
        this.dateOfBirth = data.dateOfBirth;
        this.placeOfLiving = data.placeOfLiving;
        this.educations = data.education;
    });
  }

}
