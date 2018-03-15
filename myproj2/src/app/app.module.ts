import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';//要想用双向绑定，必须导入这个

import { AppComponent } from './app.component';
import { TemplateInterpolationComponent } from './template-interpolation/template-interpolation.component';
import { TemplateRefVarComponent } from './template-ref-var/template-ref-var.component';
import { ValueBindingComponent } from './value-binding/value-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { FontResizerComponent } from './twoway-binding/font-resizer/font-resizer.component';
import { TestNgIfComponent } from './test-ng-if/test-ng-if.component';
import { TestNgForComponent } from './test-ng-for/test-ng-for.component';
import { TestNgSwitchComponent } from './test-ng-switch/test-ng-switch.component';
import { TestNgClassComponent } from './test-ng-class/test-ng-class.component';
import { TestNgStyleComponent } from './test-ng-style/test-ng-style.component';
import { TestNgModelComponent } from './test-ng-model/test-ng-model.component';
import { TestPipeComponent } from './test-pipe/test-pipe.component';
import { SaveNavComponent } from './save-nav/save-nav.component';
import { ParentAndChildComponent } from './parent-and-child/parent-and-child.component';
import { ChildComponent } from './parent-and-child/child/child.component';
import { LocalStorageComponent } from './local-storage/local-storage.component';
import { LocalChild1Component } from './local-storage/local-child1/local-child1.component';
import { LocalChild2Component } from './local-storage/local-child2/local-child2.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { TestOnChangesComponent } from './test-on-changes/test-on-changes.component';
import { Child111Component } from './test-on-changes/child111/child111.component';
import { TestNgContentComponent } from './test-ng-content/test-ng-content.component';
import { Child222Component } from './test-ng-content/child222/child222.component';
import { BrotherComponent } from './brother/brother.component';
import { Child1Component } from './brother/child1/child1.component';
import { Child2Component } from './brother/child2/child2.component';
import { EventBusService } from './brother/service/event-bus.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestDynamicComponent } from './test-dynamic/test-dynamic.component';
import { ChildOneComponent } from './test-dynamic/child-one/child-one.component';
import { TestShadowDomComponent } from './test-shadow-dom/test-shadow-dom.component';
import { TestNgContent222Component } from './test-ng-content222/test-ng-content222.component';
import { ChildTwoComponent } from './test-ng-content222/child-two/child-two.component';
import { ChildThreeComponent } from './test-ng-content222/child-three/child-three.component';
import { TestContentChildComponent } from './test-content-child/test-content-child.component';
import { ChildFourComponent } from './test-content-child/child-four/child-four.component';
import { ChildFiveComponent } from './test-content-child/child-five/child-five.component';
import { TestContentChildsComponent } from './test-content-childs/test-content-childs.component';
import { ChildFoursComponent } from './test-content-childs/child-fours/child-fours.component';
import { ChildFivesComponent } from './test-content-childs/child-fives/child-fives.component';
import { TestViewChildComponent } from './test-view-child/test-view-child.component';
import { MyHightLightDirective } from './common-directive/my-hight-light.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplateInterpolationComponent,
    TemplateRefVarComponent,
    ValueBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    FontResizerComponent,
    TestNgIfComponent,
    TestNgForComponent,
    TestNgSwitchComponent,
    TestNgClassComponent,
    TestNgStyleComponent,
    TestNgModelComponent,
    TestPipeComponent,
    SaveNavComponent,
    ParentAndChildComponent,
    ChildComponent,
    LocalStorageComponent,
    LocalChild1Component,
    LocalChild2Component,
    LifeCycleComponent,
    TestOnChangesComponent,
    Child111Component,
    TestNgContentComponent,
    Child222Component,
    BrotherComponent,
    Child1Component,
    Child2Component,
    TestDynamicComponent,
    ChildOneComponent,
    TestShadowDomComponent,
    TestNgContent222Component,
    ChildTwoComponent,
    ChildThreeComponent,
    TestContentChildComponent,
    ChildFourComponent,
    ChildFiveComponent,
    TestContentChildsComponent,
    ChildFoursComponent,
    ChildFivesComponent,
    TestViewChildComponent,
    MyHightLightDirective,
    //EventBusService,这个不能引，引入就错了
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule //动效
  ],
  providers: [EventBusService],
  bootstrap: [AppComponent],
  entryComponents:[ChildOneComponent]//动态创建组件用，要把被创建的组件的那个类加上
})
export class AppModule { }
