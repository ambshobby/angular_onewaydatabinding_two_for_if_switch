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
  result1:any=[];
  mutiplicationgen(x:any)
  {
    for(let i=1;i<11;i++)
    { 
      this.result.push(i*x)
    }
  }

  multitill(till:any)
  {
    for(let x=1;x<=till;x++)
    {
      let temp=[];
      
      for(let i=1;i<11;i++)
      { 
        temp.push(i*x);
        
      }
      this.result1.push([temp])
    }
  }
  
}
