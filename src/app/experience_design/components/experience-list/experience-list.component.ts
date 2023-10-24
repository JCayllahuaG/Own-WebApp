import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss']
})
export class ExperienceListComponent {
  constructor(private dialog: MatDialog) {}

  singularCard = {
    url: "https://material.angular.io/assets/img/examples/shiba2.jpg",
    rate: "4.5",
    numberRates: "170",
    location: "Barranco",
    name: "Travel Adventures in Lima",
    price: "From $15 / person"
  }
  cardsData = [
    { url: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      rate: "4.5",
      numberRates: "170",
      location: "Barranco",
      name: "Travel Adventures in Lima",
      price: "From $15 / person"
    },
    { url: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      rate: "4.5",
      numberRates: "170",
      location: "Barranco",
      name: "Travel Adventures in Lima",
      price: "From $15 / person"
    },
    { url: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      rate: "4.5",
      numberRates: "170",
      location: "Barranco",
      name: "Travel Adventures in Lima",
      price: "From $15 / person"
    },
    { url: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      rate: "4.5",
      numberRates: "170",
      location: "Barranco",
      name: "Travel Adventures in Lima",
      price: "From $15 / person"
    },
    { url: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      rate: "4.5",
      numberRates: "170",
      location: "Barranco",
      name: "Travel Adventures in Lima",
      price: "From $15 / person"
    },
    { url: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      rate: "4.5",
      numberRates: "170",
      location: "Barranco",
      name: "Travel Adventures in Lima",
      price: "From $15 / person"
    },
    { url: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      rate: "4.5",
      numberRates: "170",
      location: "Barranco",
      name: "Travel Adventures in Lima",
      price: "From $15 / person"
    },
    { url: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      rate: "4.5",
      numberRates: "170",
      location: "Barranco",
      name: "Travel Adventures in Lima",
      price: "From $15 / person"
    },
    { url: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      rate: "4.5",
      numberRates: "170",
      location: "Barranco",
      name: "Travel Adventures in Lima",
      price: "From $15 / person"
    },

  ];

}
