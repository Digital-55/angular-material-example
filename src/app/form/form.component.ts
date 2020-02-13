import { Component, OnInit } from '@angular/core';

interface MusicGenre {
  id: number,
  name: string
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  favoriteCountry: string;
  countries: string[] = ['España', 'Italia', 'Francia', 'Portugal'];
  musicGenres: MusicGenre[] = [
    {id: 1, name: 'Rock'},
    {id: 2, name: 'Pop'},
    {id: 3, name: 'Metal'},
    {id: 4, name: 'Techno'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
