import { Component } from '@angular/core';
import { AlertButton, AlertController, AlertInput, ToastController } from '@ionic/angular';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private taskService: TaskService, private toastController: ToastController) {}

  public alertButtons: AlertButton[] = [
    {
      text: 'Cancelar',
      role: 'cancel'
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: (alertData: { [key: string]: string }) => {
        console.log(alertData)
        if (alertData['task'] != "") {
          this.taskService.addTask(alertData['task'], alertData['date']);
        } else {
          this.presentToast();
        }
      },
    },
  ];

  async presentToast() {
    const toast = await this.toastController.create({
      message: "Preencha a tarefa!",
      duration: 2000
    });
    toast.present();
  }

  public alertInputs: AlertInput[] = [
    {
      name: "task",
      placeholder: 'Tarefa',
      type: "text"
    },
    {
      name: "date",
      type: "date",
    },
  ];

}
