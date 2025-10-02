import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonButton, IonText, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.page.html',
  styleUrls: ['./translator.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonList, IonText, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class TranslatorPage implements OnInit {

  numberToTranslate = signal<number | null>(null);
  result: string = '';
  showResult: boolean = false;

  constructor() { }

  translateNumber(){
    this.result = numberToLetters(this.numberToTranslate() ?? 0);
    this.showResult = true;
  }


  ngOnInit() {
  }

}

function numberToLetters(num: number): string {

  num = Number(num);

  if (num < 1 || num > 1000) return "Número fuera de rango";

  if (num === 1000) return "mil";

  const ones = ["", "uno", "dos", "tres", "cuatro", "cinco",
    "seis", "siete", "ocho", "nueve"];

  const especials = ["diez", "once", "doce", "trece", "catorce",
    "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve"];

  const tens = ["", "", "veinte", "treinta", "cuarenta",
    "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];

  const hundreds = ["", "cien", "doscientos", "trescientos",
    "cuatrocientos", "quinientos", "seiscientos",
    "setecientos", "ochocientos", "novecientos"];

  let letters = "";

  const h = Math.floor(num / 100);
  const t = Math.floor((num % 100) / 10);
  const o = num % 10;

  if (h > 0) {
    if (h === 1 && (t > 0 || o > 0)) {
      letters += "ciento ";
    } else {
      letters += hundreds[h] + (t > 0 || o > 0 ? " " : "");
    }
  }

  if (t === 1) {
    letters += especials[o];
  } else if (t === 2 && o > 0) {
    letters += "veinti" + ones[o];
  } else if (t > 2) {
    letters += tens[t] + (o > 0 ? " y " + ones[o] : "");
  } else if (o > 0) {
    letters += ones[o];
  }

  return letters.trim();
}
