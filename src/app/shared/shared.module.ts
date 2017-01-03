import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ProgressBarComponent } from './progress-bar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    ProgressBarComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ProgressBarComponent,
  ],
})
export class SharedModule { }
