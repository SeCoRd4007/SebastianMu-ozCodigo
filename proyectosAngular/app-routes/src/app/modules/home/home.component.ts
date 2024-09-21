import { Component } from '@angular/core';
import { AuthComponent } from "../auth/auth.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { SidetopPageComponent } from "../sidetop/views/sidetop-page/sidetop-page.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AuthComponent, SidebarComponent, SidetopPageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomePageComponent {

}
