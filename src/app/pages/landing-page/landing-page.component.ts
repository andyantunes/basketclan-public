import { Component } from '@angular/core';

import { HeaderComponent } from '../../components/shared/header/header.component';

const COMPONENTS = [HeaderComponent];

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [...COMPONENTS],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
