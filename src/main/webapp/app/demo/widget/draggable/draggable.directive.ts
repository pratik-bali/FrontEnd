import { Directive, HostBinding, Output, EventEmitter, HostListener, Input, TemplateRef, ViewContainerRef, ContentChild, ContentChildren, ElementRef } from '@angular/core';
import { DraggableHelperDirective } from './draggable-helper.directive';

@Directive({
  selector: '[jhiDraggable]'
})
export class DraggableDirective {
  @HostBinding('class.draggable') draggable = true;
  @HostBinding('class.dragging') dragging = false;

  @Output() dragStart = new EventEmitter<PointerEvent>();
  @Output() dragMove = new EventEmitter<PointerEvent>();
  @Output() dragEnd = new EventEmitter<PointerEvent>();

  @ContentChild(DraggableHelperDirective) helper: DraggableHelperDirective;

  constructor(public element: ElementRef) {}

  @HostListener('mousedown', ['$event'])
  onPointerDown(event): void {
    this.dragging = true;
    event.stopPropagation();
    this.dragStart.emit(event);

    // render the helper
    // 1 // this.viewContainerRef.createEmbeddedView(this.helper.templateRef);
    // 2 // this.helper.onDragStart();
  }

  @HostListener('document:mousemove', ['$event'])
  onPointerMove(event): void {
    if (this.dragging === true) {
      this.dragMove.emit(event);
    }
  }

  @HostListener('document:mouseup', ['$event'])
  onPointerUp(event): void {
    if (this.dragging === true) {
      this.dragEnd.emit(event);
    this.dragging = false;
    }

    // remove the helper
    // 1 // this.viewContainerRef.clear();
    // 2 // this.helper.onDragEnd();
  }

}
