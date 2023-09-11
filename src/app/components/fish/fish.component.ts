import { Component } from '@angular/core';
import { Fish } from '../../Fish'
import {FISH} from '../../mock-data'

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css']
})
export class FishComponent {
  fish: Fish[] = FISH;
}
