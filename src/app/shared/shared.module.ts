import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';
import { SidepanelComponent } from './components/sidepanel/sidepanel.component';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';



@NgModule({
  declarations: [
    ConfirmationDialogComponent,
    SidepanelComponent,
    LoadingBarComponent,
    SnackBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [MaterialModule, ConfirmationDialogComponent,
    SidepanelComponent,
    LoadingBarComponent,
    SnackBarComponent]
})
export class SharedModule { }
