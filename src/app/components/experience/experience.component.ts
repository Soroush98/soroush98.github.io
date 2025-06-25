import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

interface Experience {
  company: string
  position: string
  period: string
  location: string
  logo: string
}

@Component({
  selector: "app-experience",
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2 class="section-title">Experience</h2>
    <div class="timeline">
      <ng-container *ngFor="let exp of experiences; let i = index; let last = last">
        <div class="timeline-icon" [class.timeline-icon-first]="i === 0" [class.timeline-icon-last]="last">
          <div class="timeline-line-top" *ngIf="i > 0"></div>
          <div class="company-logo" [style.background-image]="'url(' + exp.logo + ')'"></div>
          <div class="timeline-line-bottom" *ngIf="!last"></div>
        </div>
        <div class="timeline-content">
          <p class="job-title">{{exp.position}} at {{exp.company}}</p>
          <p class="job-details">{{exp.period}} • {{exp.location}}</p>
        </div>
      </ng-container>
    </div>
  `,
  styleUrls: ["./experience.component.css"],
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: "Bowrand Inc.",
      position: "Full Stack Developer",
      period: "Jan 2025-now",
      location: "Calgary, Canada",
      logo: "/placeholder.svg?height=24&width=24",
    },
    {
      company: "Wedge Networks",
      position: "Full Stack Developer and AI Researcher",
      period: "Sep 2023-Jul 2024",
      location: "Calgary, Canada",
      logo: "/placeholder.svg?height=24&width=24",
    },
     {
      company: "ATLAS Lab",
      position: "Researcher",
      period: "Feb 2020-Aug 2021",
      location: "Tehran, Iran",
      logo: "/placeholder.svg?height=24&width=24",
    },
    {
      company: "IPM (institute for research in fundamental sciences)",
      position: "AI researcher",
      period: "Sep 2018-Apr 2021",
      location: "Tehran, Iran",
      logo: "/placeholder.svg?height=24&width=24",
    },
  ]
}
