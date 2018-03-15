import { trigger, state, style, transition, animate, keyframes} from '@angular/animations';
export const flyIn = trigger('flyIn',[
	/*transition('void => *',[
		animate(30000,keyframes([
			style({opacity:0,transfrom:'translateX(-100%)',offset:0}),
			style({opacity:1,transfrom:'translateX(25px)',offset:0.3}),
			style({opacity:1,transfrom:'translateX(0)',offset:1.0})
		]))
	]),
	transition('* => void',[
		animate(30000,keyframes([
			style({opacity:1,transfrom:'translateX(0)',offset:0}),
			style({opacity:1,transfrom:'translateX(-25px)',offset:0.7}),
			style({opacity:0,transform:'translateX(100%)',offset:1.0})
		]))
	])*/
	state('inactive', style({
        backgroundColor: 'yellow',
        transform: 'scale(1)'
    })),
	state('active',   style({
        backgroundColor: 'green',
        transform: 'scale(1.1)'
    })),
    transition('inactive => active', animate('300ms ease-in')),
    transition('active => inactive', animate('300ms ease-out'))
])
