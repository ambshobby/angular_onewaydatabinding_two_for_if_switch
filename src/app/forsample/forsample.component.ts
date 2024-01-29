import { Component } from '@angular/core';

@Component({
  selector: 'app-forsample',
  standalone: true,
  imports: [],
  templateUrl: './forsample.component.html',
  styleUrl: './forsample.component.scss'
})
export class ForsampleComponent 
{
  array_numbers=[1,2,3,4,5,6];
  name_string="Ambika";
  name_string1="";
  
  result:any=[];
  mutiplicationgen(x:any)
  {
    for(let i=1;i<11;i++)
    { 
      this.result.push(i*x)
    }
  }
  
}
