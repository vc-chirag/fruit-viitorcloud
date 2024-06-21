import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { STORAGE } from '@constants/storage.constant';
import {
  AuthPayload
} from '@models/auth.model';
import { StorageService } from '@services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) { }

  login(params: AuthPayload) {
    const member = {
      _id: "6617d2ec01e9ce9e855ac147",
      email: params.email,
      firstName: "Ishver",
      lastName: "Nayak",
      roles: [
        "661a27d39a58936005370324"
      ],
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE3ZDJlYzAxZTljZTllODU1YWMxNDciLCJlbWFpbCI6ImlzaHZlci5uYXlha0B2aWl0b3IuY2xvdWQiLCJyb2xlcyI6WyI2NjFhMjdkMzlhNTg5MzYwMDUzNzAzMjQiXSwicCI6IlUyRnNkR1ZrWDE4aXhyMENHQm9Ka0RZMUI0OExzWXVGRm1mU0YvTnJSdDRDYzZ4S281d0EwUGNKMjlvaDQvYld3L2daYWVxdzkrdFdPU3dTaE4zYW9OOXdNdDBTdUdKZzNROFNsSlBLYURBPSIsImlhdCI6MTcxODg4ODk3NiwiZXhwIjoxNzE4OTc1Mzc2fQ._67Dc72SkXD8tqbSMWXqF4uV_5WShgApmX9YssV7ZyM",
      isSuperAdmin: false
    };
    this.storageService.set(STORAGE.LOGIN_TOKEN, member.token);
    this.storageService.set(STORAGE.USER_ROLES, member.roles);
    this.storageService.set(STORAGE.USER_DATA, member);
    this.storageService.set(
      STORAGE.FULL_NAME,
      `${member.firstName} ${member.lastName}`
    );
    return of({
      message: "You have been logged in successfully"
    });
  }

}
