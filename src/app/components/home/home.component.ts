import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  xingamento = '';

  xingamentosx = [
    'Seu filho de',
    'Comedor de',
    'Papa',
    'Reverendíssima(o)',
    'Poço de',
    'Deposito de',
    'Tu é um',
    'Seu puto',
    'O magnifico',
    'Super',
  ];

  xingamentos1 = [
    'Bife',
    'Costela',
    'Porco',
    'Jaguncio',
    'Saco',
    'Lixo',
    'Geladinho',
    'Chorume',
    'Bafo',
    'Metralhadora',
    'Merengue',
    'Filhote',
    'Cara',
    'Empada',
    'Pamonha',
    'Boca',
    'Olho',
    'Barriga',
    'Abantesma',
    'Espurco',
    'Futre',
    'Usuário',
    'Achavascado',
    'Paquiderme',
    'Paspalho',
    'Panaca',
    'Otario',
    'Beringela',
  ];

  xingamentos2 = [
    'do capeta',
    'do espantalho do fandangos',
    'de rato',
    'de vacilo',
    'de lixo',
    'de chorume',
    'de bunda',
    'de zona',
    'de lombriga',
    'de semem',
    'de escrementos',
    'podre',
  ];

  criarXingamento() {
    var parte1 =
      this.xingamentosx[Math.floor(Math.random() * this.xingamentosx.length)];
    var parte2 =
      this.xingamentos1[
        Math.floor(Math.random() * this.xingamentos1.length)
      ].toLowerCase();
    var parte3 =
      this.xingamentos2[Math.floor(Math.random() * this.xingamentos2.length)];
    this.xingamento = parte1 + ' ' + parte2 + ' ' + parte3;
  }

  goToLink(num: number) {
    if (num == 1) {
      window.open('https://www.linkedin.com/in/rhuan-carlos/', '_blank');
    } else if (num == 2) {
      window.open('https://github.com/rhuandev', '_blank');
    } else {
      window.open('mailto:pf.rhuan@gmail.com');
    }
  }

  donateOpen() {
    const myMaybeNullElement = document.getElementById('donateDialog');
    const myMaybeNullElement1 = document.getElementById('donateText');

    console.log(myMaybeNullElement!.style.opacity);

    if (myMaybeNullElement!.style.height == '350px') {
      myMaybeNullElement!.style.height = '0px';
      myMaybeNullElement!.style.opacity = '0';

      myMaybeNullElement1!.style.opacity = '0';
      myMaybeNullElement1!.style.height = '0px';
    } else {
      myMaybeNullElement!.style.height = '350px';
      myMaybeNullElement!.style.opacity = '1';

      myMaybeNullElement1!.style.opacity = '1';
      myMaybeNullElement1!.style.height = '100%';
    }
  }

  triggerCopy(value: any) {
    // Create a fake `textarea` and set the contents to the text
    // you want to copy
    const storage = document.createElement('textarea');
    storage.value = value;
    const element = document.querySelector('#donateText');
    element!.appendChild(storage);
  
    // Copy the text in the fake `textarea` and remove the `textarea`
    storage.select();
    storage.setSelectionRange(0, 99999);
    document.execCommand('copy');
    element!.removeChild(storage);
  }

  ngOnInit(): void {
    this.criarXingamento();
  }
}
