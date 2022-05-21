import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  durationInSeconds = 5;
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  openSnackBar() {
    this._snackBar.open('Patience is a virtue.', 'Close', {
      duration: 3000,
    });
  }
}
