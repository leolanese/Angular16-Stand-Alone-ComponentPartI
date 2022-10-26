import { Component } from '@angular/core';
import { NgIf, TitleCasePipe } from '@angular/common';
import { ImageComponent } from './image.component';
import { LabelHighlightDirective } from './highlight.directive';

let comps = [ImageComponent, LabelHighlightDirective];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // import standalone Components, Directives and Pipes
    comps,
    NgIf,
    TitleCasePipe,
  ],
  template: `
    <h1>{{title}}</h1>
    <div *ngIf="url">
      <app-image-component [url]="url"></app-image-component>
      <h2 app-label-highlight>{{name | titlecase}}</h2>
    </div>
  `,
})

export class AppComponent {
  title = 'Angular standalone component implementation';
  name = 'Leo';
  url = 'https://avatars.githubusercontent.com/u/252649?v=4';
}
