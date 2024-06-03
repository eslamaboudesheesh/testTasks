import { Component } from '@angular/core';
import { ProgramsService } from '../services/programs.service';
import { Programs } from '../programs';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent {
  public programsList: Programs[] = [];
  public isLoading: boolean = false
  public showSystemError: boolean = false;

  constructor(private _program: ProgramsService) { }
  ngOnInit(): void {
    this.getPrograms()
  }

  getPrograms() {
    //  use this to show loading spinner 
    this.isLoading = true;

    this._program.getPrograms().subscribe({
      next: (response) => {

        this.programsList = response;
        this.isLoading = false;

      },
      error: (err) => {
        // show alert message with error
        this.isLoading = false;
        this.showSystemError = true;


      }
    })

  }

}

