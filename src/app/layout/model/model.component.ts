import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent {
  @Input() isVisible: boolean = false;
  @Input() title: string = '';
  @Output() onClose = new EventEmitter<void>();

  handleClose(event: MouseEvent): void {
    if ((event.target as HTMLElement).id === 'wrapper') {
      this.onClose.emit();
    }
  }
}
