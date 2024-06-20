import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {WordleManagerService} from "../wordle-manager.service";
import {FormsModule} from "@angular/forms";
import {CharCheck} from "../char-check";
import {ArrayhandlerComponent} from "../arrayhandler/arrayhandler.component";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {retry} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ArrayhandlerComponent, NgForOf, NgIf, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentToDisplay : CharCheck[][] = []
  inputedWord = ""

  constructor(public wordManager : WordleManagerService) {
  }



checkWord(){

    let checked = this.wordManager.checkIfWordIsRight(this.inputedWord.toLowerCase().trim())
  this.inputedWord = ""
  if (checked == true){
    alert("You won congratulation\n word was "+this.inputedWord)
  }else if (checked == false){
    alert("Used All trys L")
    alert("reloading Word and trys")
    this.retry()
  }else {
    this.currentToDisplay.push(checked)
  }
}

  retry(){
    this.currentToDisplay = []
    this.wordManager.reset()
  }
}


