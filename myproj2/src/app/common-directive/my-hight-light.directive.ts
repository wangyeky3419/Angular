import { Directive, ElementRef, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  	//selector: '[myHightLight]'
  	selector: '[my-hight-light]'//自动生成的selector里面不要用驼峰命名法
})
export class MyHightLightDirective {
	@Input()
	highlightColor:string;
  	constructor(private el: ElementRef) {
  		//console.log('el',el);
  		//el.nativeElement.style.backgroundColor = 'red';
  	}
  	@HostListener('mouseenter') onMouseEnter(){
  		//this.highlight('yellow');//可以直接传入
  		this.highlight(this.highlightColor);//也可以从外部传入
  	}
  	@HostListener('mouseleave') onMouseDown(){
  		this.highlight(null)
  	}

  	private highlight(color:string){
  		this.el.nativeElement.style.backgroundColor = color;
  	}
  	//================================================
  	@HostBinding("style.border")//border的属性是绑定到数组上的，
  			//对于现在这个指令，他的数组就是那个p标签，这里绑定
  			//到p标签上的style.border上面
  	border:string;
  	@HostListener('click') onClick() {
  		if(this.border){
  			this.border = '';
  		}else {
  			this.border = '1px solid #000000';
  		}
  	}

}
