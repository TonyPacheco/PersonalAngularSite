import { Component, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements AfterViewInit {

  inputbox: HTMLInputElement;
  outputbox: HTMLTextAreaElement;
  input: String;

  constructor() { }

  ngAfterViewInit(){
    var year = new Date().getFullYear();
    this.inputbox = <HTMLInputElement> document.getElementById("inputbox");
    this.outputbox = <HTMLTextAreaElement> document.getElementById("output");
    this.outputbox.innerHTML = "Welcome to Tony Pacheco\'s personal website!";
    this.writeToConsole(false, "You can type 'help' for a list of commands");
    this.writeToConsole(false, "or 'exit' if you don't love terminals like Tony");
    this.writeToConsole(false, "(c) Tony Pacheco " + year);
    this.inputbox.focus();
  }

  writeToConsole(isInput: Boolean, text: String):void {
    var currentText:String = this.outputbox.innerHTML;
    if (isInput) {
      text = ">" + text
    }
    this.outputbox.innerHTML = currentText + "\n" + text;
    this.outputbox.scrollTop = this.outputbox.scrollHeight;
  }

  enter(text: String): void {
    this.input = text;
    this.writeToConsole(true, this.input);
    this.validateCommand();
    this.inputbox.value = "";
  }

  click(): void {
    this.inputbox.focus();
  }

  validateCommand(): void {

    var checkText:String = this.input.toLowerCase();

    if (checkText === "help") {
      this.showListOfCommands();
      return;
    }
    if (checkText === "resume") {
      this.showAsciiResume();
      return;
    }
    if (checkText === "hema-app") {
      this.writeToConsole(false, "opening in a new tab");
      window.open("https://play.google.com/store/apps/details?id=com.nodoubles.app");
      return;
    }
    if (checkText === "mealio") {
      this.writeToConsole(false, "opening in a new tab");
      window.open("http://mealio.tk");
      return;
    }
    if (checkText === "linkedin") {
      this.writeToConsole(false, "opening in a new tab");
      window.open("https://www.linkedin.com/in/tony-pacheco");
      return;
    }
    if (checkText === "github") {
      this.writeToConsole(false, "opening in a new tab");
      window.open("https://github.com/TonyPacheco");
      return;
    }
    if (checkText === "swords") {
      this.writeToConsole(false, "opening in a new tab");
      window.open("https://www.instagram.com/_tonypacheco/");
      return;
    }
    if (checkText === "clear") {
      this.outputbox.innerHTML = ">clear";
      return;
    }
    if (checkText === "exit") {
      this.exitConsole();
      return;
    }
    this.commandNotFound();
  }

  commandNotFound(): void {
    this.writeToConsole(false, "command \'" + this.input + "\' not found");
  }

  showListOfCommands(): void {
    this.writeToConsole(false, "");
    this.writeToConsole(false, "RESUME    See Tony's resume");
    this.writeToConsole(false, "HEMA-APP  Tournament Assistant Android app");
    this.writeToConsole(false, "MEALIO    Food management web app");
    this.writeToConsole(false, "LINKEDIN  Visit Tony's LinkedIn profile");
    this.writeToConsole(false, "GITHUB    Visit Tony's GitHub profile");
    this.writeToConsole(false, "SWORDS    See Tony's other hobby");
    this.writeToConsole(false, "CLEAR     Clears the screen");
    this.writeToConsole(false, "EXIT      Visit Tony's 'regular' site");
  }

  showAsciiResume(): void {
    this.writeToConsole(false, "WIP");
  }

  exitConsole(): void {
    /*writeToConsole(0, "redirecting to the boring version of the site");*/
    /*window.location.href = "";*/
    this.writeToConsole(false, "lol jk");
  }

}

