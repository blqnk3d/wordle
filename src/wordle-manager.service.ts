import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WordleManagerService {
  private apiUrl = 'https://wordle-api.vercel.app/api/wordle';

  needToGuesWord = ""

  constructor() {
    this.getWord()
    this.needToGuesWord.toLowerCase()
  }


  checkIfWordIsRight(word : string){
    let all : CharCheck[] = []


    if (word === this.needToGuesWord){
      return true
    }

    let guessedWordSplitted  = word.split("")
    let wordSplitted  = this.needToGuesWord.split("")
    for (const wordKey in guessedWordSplitted) {

      let dic : CharCheck  = {
        "isInWord" : false,
        "isInRightSpot": false,
        "char": ""
      }

      let guessedChar = guessedWordSplitted[wordKey]
      console.log(guessedChar)
      if ( this.needToGuesWord.includes( guessedChar)){
        dic.isInWord = true
        console.log("To gues: ",guessedChar , "guessed",wordSplitted[wordKey])
        if (guessedChar === wordSplitted[wordKey]){
        dic.isInRightSpot = true
        }
      }
      dic.char = guessedChar
      all.push(dic)
    }
    return all
  }


  getWord(){
    this.needToGuesWord = "abend"
  }



}
interface CharCheck {
  isInWord: boolean;
  isInRightSpot: boolean;
  char: string;
}
