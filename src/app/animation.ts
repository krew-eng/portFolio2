import { trigger, transition, style, query, animateChild, animate, group } from '@angular/animations';


export const slideInAnimation =
  trigger('routeAnimations', [
    transition('HomePage <=> AboutPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '50%',top:'10vh', transform:'scale(0.2)' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-in-out', style({ opacity: '0', }))
        ]),
        query(':enter', [
          animate('3000ms ease-in-out', style({ left: 0,top:0, transform:'scale(1)', transformOrigin:'left'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('HomePage <=> WorksPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '-100%' })
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('300ms ease-out', style({ left: '100%' }))
          ]),
          query(':enter', [
            animate('300ms ease-out', style({ left: '0%' }))
          ])
        ]),
        query(':enter', animateChild()),
      ]),
      transition('HomePage <=> EducationPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '-100%' })
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('300ms ease-out', style({ left: '100%' }))
          ]),
          query(':enter', [
            animate('300ms ease-out', style({ left: '0%' }))
          ])
        ]),
        query(':enter', animateChild()),
      ]),
    transition('HomePage <=> ProjectPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: '0%',
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '50%', top:'50vh', transform:'scale(0.2)' })
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('1000ms ease-in-out', style({ opacity: '0', }))
          ]),
          query(':enter', [
            animate('3000ms ease-in-out', style({ left: 0,top:0, transform:'scale(1)', transformOrigin:'left' }))
          ])
        ]),
        query(':enter', animateChild()),
      ])
  ]);