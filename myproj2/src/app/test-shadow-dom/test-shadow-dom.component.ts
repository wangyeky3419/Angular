import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'test-shadow-dom',
  encapsulation:ViewEncapsulation.Emulated,//默认就是Emulated模式
  //encapsulation:ViewEncapsulation.Native,//渲染组件采用的是shadow-dom模式，如果运行的用户群都是crome，可以把模式改成shadow-dom，提高效率
  //encapsulation:ViewEncapsulation.None,//什么模式也没有,但是有可能会影响的上面的其他组件样式，（存在相同类名的情况下），所以尽量少用
  templateUrl: './test-shadow-dom.component.html',
  styleUrls: ['./test-shadow-dom.component.scss']
})
export class TestShadowDomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
