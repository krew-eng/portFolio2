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
      transform: 'scale(0.5) rotate(180deg)'}),
      animate('2s ease-in-out', style({ transform: 'scale(1) rotate(0deg)' })), 
    ]),
    
  ]),
  trigger('animeText', [
    transition('void => *', [
      style({ position: 'relative',
      top: '-100%'}),
      animate('3s ease-in-out', style({ top:'0%' })), 
    ]),
    
  ]),
    
  ]
})
export class EducationComponent implements OnInit {
  isLoaded:any = false;
  constructor() { }

  ngOnInit(): void {
    this.isLoaded = false;
    setTimeout(() => {
      this.isLoaded = !this.isLoaded;
    }, 100);
  }

}
