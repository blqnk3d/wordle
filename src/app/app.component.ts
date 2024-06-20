import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {WordleManagerService} from "../wordle-manager.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentToDisplay : CharCheck[][] = []
  inputedWord = ""
  constructor(public wordManager : WordleManagerService) {
  }

checkWord(){

    let checked = this.wordManager.checkIfWordIsRight(this.inputedWord.trim())
  if (checked == true){
    alert("You won congratulation")
  }else {
    this.currentToDisplay.push(checked)
  }
  console.log(this.currentToDisplay)
}

}

interface CharCheck {
  isInWord: boolean;
  isInRightSpot: boolean;
  char: string;
}
