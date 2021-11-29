import { AfterViewInit, Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [
    trigger('animationRightSecond', [
      transition('void => *', [
        style({ position: 'relative',
        right: '-70%' }),
        animate('3s 4s ease-in-out', style({ right: 0 })), 
      ]),
    ]),
    trigger('animationLeftFirst', [
      transition('void => *', [
        style({ position: 'relative',
        left: '-70%' }),
        animate('3s ease-in-out', style({ left: 0 })), 
      ]),
    ]),
    trigger('animationRightFirst', [
      transition('void => *', [
        style({ position: 'relative',
        right: '-70%' }),
        animate('3s ease-in-out', style({ right: 0 })), 
      ]),
    ]),
    trigger('animationLeftSecond', [
      transition('void => *', [
        style({ position: 'relative',
        left: '-70%' }),
        animate('3s 2s ease-in-out', style({ left: 0 })), 
      ]),
    ]),

  ]
})
export class ProjectComponent implements OnInit, AfterViewInit{

  public isVisible = false;

  constructor() { }

  ngOnInit(): void {
    this.isVisible = false;
    setTimeout(() => {
      this.isVisible = !this.isVisible;
    }, 100);
   
  }

  ngAfterViewInit(): void {
    
  }

}
