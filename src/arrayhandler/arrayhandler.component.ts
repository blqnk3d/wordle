import {Component, Input} from '@angular/core';
import {CharCheck} from "../char-check";
import {NgForOf} from "@angular/common";
import {SingleCharackterComponent} from "../single-charackter/single-charackter.component";

@Component({
  selector: 'app-arrayhandler',
  standalone: true,
  imports: [
    NgForOf,
    SingleCharackterComponent
  ],
  templateUrl: './arrayhandler.component.html',
  styleUrl: './arrayhandler.component.css'
})
export class ArrayhandlerComponent {
  @Input() array : CharCheck[]|null = null

}


