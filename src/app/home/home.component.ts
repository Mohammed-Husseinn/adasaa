import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../shared/footer/footer.component';

type ArticlePreview = {
  title: string;
  description: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  authorName: string;
  authorRole: string;
  authorImage: string;
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FooterComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  private readonly knownCategories = ['إضاءة', 'بورتريه', 'مناظر طبيعية', 'تقنيات', 'معدات'];

  constructor(private router: Router) {}

  openArticleFromDom(event: Event) {
    const target = event.target as HTMLElement | null;
    const article = target?.closest('article');
    if (!article) {
      return;
    }

    const title = article.querySelector('h3')?.textContent?.trim() ?? 'مقال بدون عنوان';
    const description = article.querySelector('p')?.textContent?.trim() ?? '';
    const image = article.querySelector('img')?.getAttribute('src') ?? '';

    const spanTexts = Array.from(article.querySelectorAll('span'))
      .map((el) => el.textContent?.trim() ?? '')
      .filter(Boolean);

    const category = spanTexts.find((text) => this.knownCategories.includes(text)) ?? 'عام';
    const readTime = spanTexts.find((text) => text.includes('دقائق') && text.includes('للقراءة')) ?? '';
    const date = spanTexts.find((text) => /^\d+\s+\S+\s+\d{4}$/.test(text)) ?? '';

    const authorName = article.querySelector('.text-right .text-sm.font-semibold')?.textContent?.trim() ?? '';
    const authorRole = article.querySelector('.text-right .text-xs.text-neutral-500')?.textContent?.trim() ?? '';
    const authorImage =
      article.querySelector('.h-8.w-8')?.getAttribute('src') ??
      article.querySelector('.h-10.w-10')?.getAttribute('src') ??
      '';

    const articleData: ArticlePreview = {
      title,
      description,
      image,
      category,
      readTime,
      date,
      authorName,
      authorRole,
      authorImage
    };

    this.router.navigate(['/blog', this.slugify(title)], { state: { article: articleData } });
  }

  private slugify(value: string) {
    return value
      .toLowerCase()
      .replace(/[^\u0600-\u06FF\w\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }
}
