import { Component } from '@angular/core';
import { ProgramsService } from '../services/programs.service';
import { Programs } from '../programs';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent {
   programsList: Programs[] =[] ;
  constructor(private _program:ProgramsService){}
  ngOnInit():void{
    this._program.getPrograms().subscribe({
      next:(response)=>{console.log(response)
        this.programsList = response;
      },
      error:(err)=>{console.log(err)},
      complete:()=>{console.log('completed')}
   })
  }

}