import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonCardContent, IonCardTitle, IonCard, IonCardHeader, IonCardSubtitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonCardSubtitle, IonCardHeader, IonCard, IonCardTitle, IonCardContent, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
