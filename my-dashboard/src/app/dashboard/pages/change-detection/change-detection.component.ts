import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './change-detection.component.html',
  // Change detection es la forma de decir de utilizar zoonless sin ZoneJs, donde
  // este menos pendiente de esos estados y sincronias y utilice mas los signals.

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class  ChangeDetectionComponent {

  public currentFramework = computed(
    ()=> `Change detection - ${this.frameworkAsSignal().name}`
  )

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  })

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  }

  /**
   *
   */
  constructor() {
    setTimeout(()=>{
      // this.frameworkAsProperty.name = "Rect";
      this.frameworkAsSignal.update(value =>({
        ...value,
        name: "React"
      }));

      console.log("realizado");
    },3000)
  }

}
