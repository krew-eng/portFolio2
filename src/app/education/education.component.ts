import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  animations:[
    trigger('animeHeader', [
    transition('void => *', [
      style({ position: 'relative',
      transform: 'scale(2);rotate(180deg)'}),
      animate('3s 4s ease-in-out', style({ transform: 'scale(1) rotate(0deg)'})), 
    ]),
  ]),
    
  ]
})
export class EducationComponent implements OnInit {
  isLoaded:any = true;
  constructor() { }

  ngOnInit(): void {
  }

}
