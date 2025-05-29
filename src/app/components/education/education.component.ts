import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

interface Education {
  institution: string
  degree: string
  period: string
  location: string
  logo: string
}

@Component({
  selector: "app-education",
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2 class="section-title">Education</h2>
    <div class="timeline">
      <ng-container *ngFor="let edu of education; let i = index; let last = last">
        <div class="timeline-icon" [class.timeline-icon-first]="i === 0" [class.timeline-icon-last]="last">
          <div class="timeline-line-top" *ngIf="i > 0"></div>
          <div class="institution-logo" [style.background-image]="'url(' + edu.logo + ')'"></div>
          <div class="timeline-line-bottom" *ngIf="!last"></div>
        </div>
        <div class="timeline-content">
          <p class="degree-title">{{edu.degree}} at {{edu.institution}}</p>
          <p class="degree-details">{{edu.period}} • {{edu.location}}</p>
        </div>
      </ng-container>
    </div>
  `,
  styleUrls: ["./education.component.css"],
})
export class EducationComponent {
  education: Education[] = [
    {
      institution: "Calgary University",
      degree: "M.S. in Computer Science",
      period: "2021-2024",
      location: "Calgary, Canada",
      logo: "/placeholder.svg?height=24&width=24",
    },
    {
      institution: "University of Amirkabir",
      degree: "B.Sc in Computer Engineering",
      period: "2016-2020",
      location: "Tehran, Iran",
      logo: "/placeholder.svg?height=24&width=24",
    },
  ]
}
