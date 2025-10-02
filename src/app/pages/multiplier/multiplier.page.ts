import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, IonButtons, IonButton, IonText, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';


@Component({
  selector: 'app-multiplier',
  templateUrl: './multiplier.page.html',
  styleUrls: ['./multiplier.page.scss'],
  standalone: true,
  imports: [IonList, IonLabel, IonItem, IonText, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class MultiplierPage implements OnInit {

  multiplier = signal<number | null>(null);
  table: number[] = new Array(14);
  showTable: boolean = false;

  generateTable() {
    if (this.multiplier() === null) return;
    for (let i = 0; i < this.table.length; i++) {

      this.table[i] = (this.multiplier() ?? 0) * (i +1)

    }
    this.showTable = true;
    console.log(this.table)

  }

  toggleTable(){
    this.showTable = !this.showTable
  }
  constructor() { }

  ngOnInit() {
  }

}
