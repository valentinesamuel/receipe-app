import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  templateUrl: './header.component.html',
  selector: 'app-header',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  collapsed = true;

  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
}


}
