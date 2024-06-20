import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WordleManagerService {
  private apiUrl = 'https://wordle-api.vercel.app/api/wordle';
  maxTrys = 10
  trys = this.maxTrys
  needToGuesWord = ""

  constructor(private http : HttpClient) {
    this.getWord()
    this.needToGuesWord.toLowerCase()
  }


  checkIfWordIsRight(word : string){
    this.trys-= 1
    let all : CharCheck[] = []

    if (this.trys <0 ){
      this.trys = 0
      return false
    }
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
    console.log("running")
    // @ts-ignore
    this.http.get("https://random-word-api.herokuapp.com/word?length=5").subscribe(a => this.needToGuesWord = a[0])
    this.needToGuesWord = "abend"
  }

  reset(){
    this.getWord()
    this.trys = this.maxTrys
  }

}
interface CharCheck {
  isInWord: boolean;
  isInRightSpot: boolean;
  char: string;
}
