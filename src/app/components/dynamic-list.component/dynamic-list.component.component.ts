import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-list.component',
  templateUrl: './dynamic-list.component.component.html',
  styleUrls: ['./dynamic-list.component.component.css']
})
export class DynamicListComponentComponent {
  components: number[] = [1]; 

  addComponent(): void {
    this.components.push(this.components.length + 1);
  }

  removeComponent(index: number): void {
    this.components.splice(index, 1);
  }
}
