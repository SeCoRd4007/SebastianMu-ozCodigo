import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidetopPageComponent } from '../sidetop/views/sidetop-page/sidetop-page.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [SidebarComponent,SidetopPageComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

}
