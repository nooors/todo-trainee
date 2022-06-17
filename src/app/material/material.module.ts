import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
@NgModule({
  exports: [
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
  ],

  imports: [CommonModule],
})
export class MaterialModule {}
