import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PictureComponent } from './picture.component';
import { pictureRoutes } from './picture.routes';

@NgModule({
	declarations: [
		PictureComponent
	],
  	imports: [
    	RouterModule.forChild(pictureRoutes)
  	]
})
export class PictureModule { }
