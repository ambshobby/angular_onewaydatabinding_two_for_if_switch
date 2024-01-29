import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ForsampleComponent } from './forsample/forsample.component';
import { OnewayComponent } from './oneway/oneway.component';
import { TwowayComponent } from './twoway/twoway.component';
import { IfsampleComponent } from './ifsample/ifsample.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , ForsampleComponent, OnewayComponent, TwowayComponent,IfsampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'o_t_for_if';
}
