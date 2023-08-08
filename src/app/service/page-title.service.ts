import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {
  private defaultTitle = 'Page de présentation';
  private pageTitle = this.defaultTitle;

  constructor(private titleService: Title) {}

  setPageTitle(title: string): void {
    this.pageTitle = title;
    this.titleService.setTitle(title);
  }

  resetPageTitle(): void {
    this.pageTitle = this.defaultTitle;
    this.titleService.setTitle(this.defaultTitle);
  }

  getPageTitle(): string {
    return this.pageTitle;
  }
}
