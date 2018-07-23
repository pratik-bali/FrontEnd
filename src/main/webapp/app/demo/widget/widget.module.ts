import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DraggableModule } from './draggable/draggable.module';
import { GridComponent } from './grid/grid.component';

@NgModule({
    imports: [
        BrowserModule,
        DraggableModule
        ],
    declarations: [ GridComponent
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WidgetModule {}
