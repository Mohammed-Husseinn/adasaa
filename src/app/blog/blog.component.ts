import { NgClass, NgIf } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
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
  selector: 'app-blog',
  standalone: true,
  imports: [NgIf, NgClass, RouterLink, RouterLinkActive, FooterComponent],
  templateUrl: './blog.component.html'
})
export class BlogComponent implements AfterViewInit {
  currentPage = 1;
  totalPages = 5;
  activeCategory = 'all';
  visibleArticlesCount = 0;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngAfterViewInit() {
    this.initializeCategoryFromQuery();
    this.applyCategoryFilterSoon();
  }

  setCategory(category: string) {
    this.activeCategory = category;
    this.currentPage = 1;
    this.scrollToArticles();
    this.applyCategoryFilterSoon();
  }

  openArticleFromDom(event: Event) {
    const target = event.target as HTMLElement | null;
    const article = target?.closest('article');
    if (!article) {
      return;
    }

    const category = article.querySelector('div.relative > span')?.textContent?.trim() ?? 'عام';
    const title = article.querySelector('h3')?.textContent?.trim() ?? 'مقال بدون عنوان';
    const description = article.querySelector('p')?.textContent?.trim() ?? '';
    const image = article.querySelector('img')?.getAttribute('src') ?? '';

    const metaSpans = article.querySelectorAll('.p-6 > .flex.items-center.gap-3.text-xs.text-neutral-400 span');
    const readTime = metaSpans[0]?.textContent?.trim() ?? '';
    const date = metaSpans[1]?.textContent?.trim() ?? '';

    const authorName = article.querySelector('.mt-6 .text-right .text-sm.font-semibold')?.textContent?.trim() ?? '';
    const authorRole = article.querySelector('.mt-6 .text-right .text-xs.text-neutral-500')?.textContent?.trim() ?? '';
    const authorImage = article.querySelector('.mt-6 img')?.getAttribute('src') ?? '';

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

  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.scrollToArticles();
      this.applyCategoryFilterSoon();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
      this.scrollToArticles();
      this.applyCategoryFilterSoon();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage += 1;
      this.scrollToArticles();
      this.applyCategoryFilterSoon();
    }
  }

  private scrollToArticles() {
    const section = document.getElementById('blog-articles');
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private slugify(value: string) {
    return value
      .toLowerCase()
      .replace(/[^\u0600-\u06FF\w\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  private applyCategoryFilterSoon() {
    setTimeout(() => this.applyCategoryFilter(), 0);
  }

  private initializeCategoryFromQuery() {
    const category = this.route.snapshot.queryParamMap.get('category');
    if (!category) {
      return;
    }

    const validCategories = ['إضاءة', 'بورتريه', 'مناظر طبيعية', 'تقنيات', 'معدات'];
    if (!validCategories.includes(category)) {
      return;
    }

    this.activeCategory = category;
    this.currentPage = 1;
  }

  private applyCategoryFilter() {
    const allArticles = Array.from(document.querySelectorAll('#blog-articles article'));
    if (!allArticles.length) {
      this.visibleArticlesCount = 0;
      return;
    }

    let visibleCount = 0;

    for (const article of allArticles) {
      const badge = article.querySelector('div.relative > span');
      const category = badge?.textContent?.trim() ?? '';
      const isVisible = this.activeCategory === 'all' || this.activeCategory === category;

      article.classList.toggle('hidden', !isVisible);
      if (isVisible) {
        visibleCount += 1;
      }
    }

    this.visibleArticlesCount = visibleCount;
  }
}
