import { Component } from "@angular/core"

@Component({
    selector: "app-hero",
    standalone: true,
    template: `
        <div class="hero-container">
            <div class="hero-content">
                <div class="hero-image">
                </div>
                <div class="hero-text">
                    <div class="hero-intro">
                        <h1 class="hero-title">Hi, I'm Soroosh Esmaeilian</h1>
                        <h2 class="hero-subtitle">
                            I am a computer scientist and software developer. I am passionate about technology and its potential to change the world for the better.
                        </h2>
                    </div>
                    <div class="hero-buttons">
                        <button class="btn btn-primary" (click)="viewResume()">
                            <span class="btn-text">View Resume</span>
                        </button>
                        <button class="btn btn-secondary" (click)="contactMe()">
                            <span class="btn-text">Contact Me</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `,
    styleUrls: ["./hero.component.css"],
})
export class HeroComponent {
    viewResume() {
        const link = document.createElement('a');
        link.href = 'Soroosh_Esmaeilian_FullStack.pdf';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.click();
    }

    contactMe() {
        window.location.href = "mailto:soroosh.esmaeilian@gmail.com";
    }
}
