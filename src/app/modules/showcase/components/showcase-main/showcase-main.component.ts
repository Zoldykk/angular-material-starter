import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { SidepanelComponent } from 'src/app/shared/components/sidepanel/sidepanel.component';
import { SnackBarComponent } from 'src/app/shared/components/snack-bar/snack-bar.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
];

@Component({
  selector: 'app-showcase-main',
  templateUrl: './showcase-main.component.html',
  styleUrls: ['./showcase-main.component.scss']
})
export class ShowcaseMainComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  title = 'angular-material-override-practice';
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];



  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  openConfirmationDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '30vw'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  openSidepanel() {
    const dialogRef = this.dialog.open(SidepanelComponent, {
      panelClass: 'custom-modalbox',
      width: '20vw',
      data: { component: DynamicComponent }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openSnackBar(style: string) {
    this._snackBar.openFromComponent(SnackBarComponent, {
      panelClass: 'custom-snackbar-' + style,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 1000
    })
  }
}



@Component({
  selector: 'dynamic-comp',
  template: `
  <div>Dynamic component</div>`
})
export class DynamicComponent {

}
