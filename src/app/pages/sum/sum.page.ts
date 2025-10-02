import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonInput, IonButton, IonItem, IonLabel, IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.page.html',
  styleUrls: ['./sum.page.scss'],
  standalone: true,
  imports: [IonText, IonButton, IonInput, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class SumPage implements OnInit {

  num1 = signal<number | null>(null);
  num2 = signal<number | null>(null);
  result = signal<number>(0);

  sumTwoNumber() {
    this.result.set((this.num1() ?? 0) + (this.num2() ?? 0))
  }
  constructor() { }

  ngOnInit() {
  }

}
