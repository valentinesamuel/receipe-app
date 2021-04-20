import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  templateUrl: './header.component.html',
  selector: 'app-header',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private dataStorage:DataStorageService) {}
  collapsed = true;
  onSaveData() {
    this.dataStorage.storeRecipes();
  }
  
  onFetchRecipe() {
    this.dataStorage.fetchRecipes().subscribe();
  }
}
