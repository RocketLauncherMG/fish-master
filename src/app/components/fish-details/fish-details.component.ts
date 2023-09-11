import { Component, Input } from '@angular/core';
import {Fish} from '../../Fish'



@Component({
  selector: 'app-fish-details',
  templateUrl: './fish-details.component.html',
  styleUrls: ['./fish-details.component.css']
})
export class FishDetailsComponent {
  @Input()
  fish!: Fish;

  
}
