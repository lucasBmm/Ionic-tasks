import { Component } from '@angular/core';
import { AlertButton, AlertController, AlertInput } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  public alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancel'
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  public alertInputs = [
    {
      name: "Task",
      placeholder: 'Tarefa',
      type: "text"
    },
    {
      name: "date",
      type: "date",
    },
  ];

}
