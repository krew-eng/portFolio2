import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, query, stagger, keyframes } from '@angular/animations';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [
    trigger('toMove', [
      // state('move', style({
      //   transform: 'scale(0.9)'
      // })),
      // state('still', style({
      //   transform: 'scale(1)'
      // })),
      // transition('move<=>still', [animate('0.5s')])
      transition('still=>move', [
        query('.to-animate', [
          style({transform: 'scale(1)'}),
          stagger(0, [
            animate('2s', keyframes ( [
              style({  transform: 'scale(1)', offset: 0.05 }),
              style({  transform: 'scale(1.01)', offset: 0.2 }),
              style({  transform: 'scale(1.03)', offset: 0.5 }),
              style({  transform: 'scale(1.01)', offset: 0.8 }),
              style({  transform: 'scale(1)', offset: 0.95 }),

            ]))
          ])
        ])]
    ),
    transition('move=>still', [
      query('.to-animate', [
        style({transform: 'scale(1)'}),
        stagger(0, [
          animate('2s', keyframes ( [
              style({  transform: 'scale(1)', offset: 0.05 }),
              style({  transform: 'scale(1.01)', offset: 0.2 }),
              style({  transform: 'scale(1.03)', offset: 0.5 }),
              style({  transform: 'scale(1.01)', offset: 0.8 }),
              style({  transform: 'scale(1)', offset: 0.95 }),
          ]))
        ])
      ])]
  )
    
  ])]
})
export class MainPageComponent implements OnInit {
  public isMove = false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(
      ()=>{
        setInterval( ()=>{
          this.isMove = !this.isMove;
        }, 1900);
      },2000
    )
    
  }

}
