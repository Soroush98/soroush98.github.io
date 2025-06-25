import { Component, OnInit } from "@angular/core"
import { HeaderComponent } from "./components/header/header.component"
import { HeroComponent } from "./components/hero/hero.component"
import { SkillsComponent } from "./components/skills/skills.component"
import { ExperienceComponent } from "./components/experience/experience.component"
import { EducationComponent } from "./components/education/education.component"
import { ThemeService } from "./services/theme.service"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HeaderComponent, HeroComponent, SkillsComponent, ExperienceComponent, EducationComponent],
  template: `
    <div class="app-container">
      <div class="layout-container">
        <app-header></app-header>
        <div class="main-content">
          <div class="content-container">
            <app-hero></app-hero>
            <app-skills></app-skills>
            <app-experience></app-experience>
            <app-education></app-education>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./app.css"],
})
export class App implements OnInit {
  title = "personal-website"

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    // Theme service will auto-initialize on construction
  }
}
