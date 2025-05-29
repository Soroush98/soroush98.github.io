import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

interface Skill {
  category: string
  items: string
}

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2 class="section-title">Skills</h2>
    <div class="skills-grid">
      <div 
        *ngFor="let skill of skills; let i = index"
        class="skill-item"
        [class.skill-item-left]="i % 2 === 0"
        [class.skill-item-right]="i % 2 === 1"
      >
        <p class="skill-category">{{skill.category}}</p>
        <p class="skill-items">{{skill.items}}</p>
      </div>
    </div>
  `,
  styleUrls: ["./skills.component.css"],
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      category: "Languages",
      items: "Python, Java, C++, JavaScript, TypeScript",
    },
    {
      category: "Software Development",
      items: "Agile, Scrum, CI/CD, Docker, Git",
    },
    {
      category: "Databases",
      items: "MySQL, PostgreSQL, MongoDB, DynamoDB, S3",
    },
    {
      category: "Web Technologies",
      items: "HTML, CSS, Next.js, Vue.js, Angular, Django, Express.js",
    },
    {
      category: "Cloud Computing",
      items: "AWS",
    },
    {
      category: "Machine Learning",
      items:
        "Linear Regression, Logistic Regression, Decision Trees, Random Forests, Gradient Boosting, K-Means Clustering, Principal Component Analysis, Convolutional Neural Networks, Recurrent Neural Networks",
    },
  ]
}
