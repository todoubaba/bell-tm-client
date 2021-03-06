import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CommonDirectivesModule } from 'core/common-directives';

import { PipesModule } from '../../shared/pipes/observation-pipes.module';

import { ObservationListComponent } from './form-list.component';
import { IconModule } from 'core/icon';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        CommonDirectivesModule,
        IconModule,
        PipesModule,
    ],
    declarations: [
        ObservationListComponent,
    ],
    exports: [
        ObservationListComponent,
    ],
})
export class ObservationFormListModule { }
