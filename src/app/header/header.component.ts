import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './header.component.html',
  selector: 'app-header',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  collapsed = true;

  @Output() featureSelected = new EventEmitter<string>();

  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  // }

  toRecipes() {
    this.router.navigate(['/recipes']);
  }

  toShoppingList() {
    this.router.navigate(['/shopping-list']);
  }
}
