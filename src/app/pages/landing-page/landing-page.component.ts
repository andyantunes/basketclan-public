import { Component } from '@angular/core';

import { HeaderComponent } from '../../components/shared/header/header.component';
import { FooterComponent } from '../../components/shared/footer/footer.component';

const COMPONENTS = [HeaderComponent, FooterComponent];

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [...COMPONENTS],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
