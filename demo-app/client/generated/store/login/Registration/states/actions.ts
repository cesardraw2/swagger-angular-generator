/* tslint:disable:max-line-length max-classes-per-file */
/**
 * Test Swagger
 * v1
 * example.com/api/api-base-path
 */

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {RegistrationParams} from '../../../../controllers/Login';

export enum Actions {
  START = '[Login Registration] Start',
  SUCCESS = '[Login Registration] Success',
  ERROR = '[Login Registration] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: RegistrationParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: object) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type RegistrationAction = Start | Success | Error;