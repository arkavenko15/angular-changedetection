import { BehaviorSubject } from 'rxjs';
import {  Component} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public colors = ['red', 'orange', 'yellow'];
  public subjects = ['pen', 'table', 'laptop'];

  public countries = new BehaviorSubject(['USA', 'Ukraine','Germany']);

  public incrementedValue: number = 1;
  public live: boolean = true;

  public data: any[] = []
  constructor() {

    // setInterval(()=>{
    //   this.incrementedValue *= 2;
    //   this.data.push(1);

    // },1000)
  }

  addColor(item: any) {
    this.colors.push(item);
  }

  addSubject(item: any) {
    this.subjects.push(item);
  }

  addCountry(item: any) {
    this.countries.next(item);
  }

}

