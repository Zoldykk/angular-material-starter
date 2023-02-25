import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.scss']
})
export class SidepanelComponent {
  constructor(
    public dialogRef: MatDialogRef<SidepanelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
}
