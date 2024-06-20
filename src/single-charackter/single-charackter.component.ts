import {Component, Input} from '@angular/core';
import {CharCheck} from "../char-check";

@Component({
  selector: 'app-single-charackter',
  standalone: true,
  imports: [],
  templateUrl: './single-charackter.component.html',
  styleUrl: './single-charackter.component.css'
})
export class SingleCharackterComponent {
  @Input() single : CharCheck | null= null
}
