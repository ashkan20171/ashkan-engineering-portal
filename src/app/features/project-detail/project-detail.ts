import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ProjectService, Project } from '../../core/services/project.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule],
  templateUrl: './project-detail.html',
  styleUrls: ['./project-detail.scss']
})
export class ProjectDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private projectService = inject(ProjectService);
  private seo = inject(SeoService);

  project = signal<Project | null>(null);
  activeImage = signal<string>('');

  ngOnInit(): void {
this.route.paramMap.subscribe(params => {
const id = params.get('id') || 'prj-1';
this.projectService.getProjectById(id).subscribe(data => {
if (data) {
this.project.set(data);
this.activeImage.set(data.image);
this.seo.setTags({
title: data.title,
description: data.description,
keywords: `${data.title}, ${data.categoryTitle}, شرکت فنی مهندسی اشکان`
});
}
});
});
  }

  setActiveImage(img: string): void {
this.activeImage.set(img);
  }

  onImageError(event: Event): void {
const target = event.target as HTMLImageElement;
target.src = 'assets/images/project1.jpg';
  }
}
