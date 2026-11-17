import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonInput,
  IonButton,
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    FormsModule,
    DecimalPipe,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonInput,
    IonButton,
  ],
})
export class HomePage {
  tipoCambio = 8;

  quetzales: number | null = null;
  quetzalesConvertidos = 0;
  dolares: number | null = null;

  convertir() {
    if (this.quetzales === null || isNaN(Number(this.quetzales))) {
      this.dolares = null;
      return;
    }
    this.quetzalesConvertidos = Number(this.quetzales);
    this.dolares = this.quetzalesConvertidos / this.tipoCambio;
  }
}
