import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  animations:[
    trigger('animeHeader', [
    transition('void => *', [
      style({ position: 'relative',
      transform: 'scale(0,2);rotate(180deg)'}),
      animate('300 ease-in-out', style({ transform: 'scale(1) rotate(0deg)'})), 
    ]),
  ]),
    
  ]
})
export class EducationComponent implements OnInit {
  isLoaded:any = true;
  constructor() { }

  ngOnInit(): void {
    this.isLoaded = false;
    setTimeout(() => {
      this.isLoaded = !this.isLoaded;
    }, 100);
  }

}
