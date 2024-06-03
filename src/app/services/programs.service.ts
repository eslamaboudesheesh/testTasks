import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  constructor(private _http:HttpClient) { }
  getPrograms():Observable<any>{
    return this._http.get('https://mohanad-gadallah-mfyg726r7q-uc.a.run.app/programstask/1?name=None&city=None&Language=None&type=None&level=None&sort=None&school=None&category=None')
  }
}
