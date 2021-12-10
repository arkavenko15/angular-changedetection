import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, ChangeDetectorRef, Input, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  inputs:['live'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit{
  @Input() data!: string[];
  @Input() data1!: any[];

  @Input() countries!: Observable<any>

  @Input() incrementedValueInput!: any;


  public recivedCountries: string[]=[];
  constructor(private cdr: ChangeDetectorRef){

  }
  set live(value:any) {

    if (value) {
      //this.cdr.detectChanges();
      this.cdr.reattach();
      //this.cdr.markForCheck();
    } else {
      this.cdr.detach();
    }
  }

  ngOnInit(): void {
    this.getCountry();
  }

  public getCountry():void {
    this.countries.subscribe((res)=>{
        this.recivedCountries = this.recivedCountries.concat(res)
        this.cdr.markForCheck();
        //this.cdr.detectChanges();
        //pipe(first()).
    })

  }


  public update() {
    this.cdr.detectChanges();

  }

  public trigger():void {

    console.log('child triggered');

  }
}
