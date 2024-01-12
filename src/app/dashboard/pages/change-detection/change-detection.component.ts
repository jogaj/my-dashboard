import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './change-detection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: ``,
})
export default class ChangeDetectionComponent {
  frameworkAsSignal = signal({ name: 'Angular', releaseDate: 2016 });
  frameworkAsProperty = { name: 'Angular', releaseDate: 2016 };
  currentFramework = computed(
    () => `Change Detection -  ${this.frameworkAsSignal().name}`
  );

  constructor() {
    setTimeout(() => {
      this.frameworkAsSignal.update(current => ({
        ...current,
        name: 'React',
      }));
      // this.frameworkAsProperty.name = 'React';
    }, 3000);
  }
}
