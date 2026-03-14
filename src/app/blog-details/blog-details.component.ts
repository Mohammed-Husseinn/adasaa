import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../shared/footer/footer.component';

type ArticlePayload = {
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

type DetailSection = {
  title: string;
  content: string;
};

type RelatedArticle = ArticlePayload & {
  slug: string;
};

type RelatedCategoryGroup = {
  category: string;
  articles: RelatedArticle[];
};

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [NgFor, RouterLink, FooterComponent],
  templateUrl: './blog-details.component.html'
})
export class BlogDetailsComponent {
  article: ArticlePayload = {
    title: 'إتقان تصوير الساعة الذهبية: دليل شامل',
    description: 'تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
    category: 'إضاءة',
    readTime: '8 دقائق للقراءة',
    date: '15 يناير 2024',
    authorName: 'سالم أحمد',
    authorRole: 'مصور محترف',
    authorImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80'
  };

  sections: DetailSection[] = [
    {
      title: 'لماذا الساعة الذهبية؟',
      content:
        'الساعة الذهبية هي أكثر الأوقات سحراً للتصوير الفوتوغرافي. ذلك الوقت القصير بعد شروق الشمس وقبل غروبها حيث يكون الضوء ناعماً ودافئاً وساحراً.'
    },
    {
      title: 'التحضير المسبق',
      content:
        'خطط لجلسة التصوير مسبقاً. استخدم تطبيقات مثل PhotoPills لمعرفة وقت الساعة الذهبية بدقة في موقعك. وصل قبل 30 دقيقة لاختيار أفضل زاوية.'
    },
    {
      title: 'إعدادات الكاميرا',
      content:
        'استخدم ISO منخفض للحصول على أقل ضوضاء. فتحة العدسة تعتمد على ما تريد: للبورتريهات f/1.8-f/2.8 مع خلفية ضبابية، أو f/8-f/11 للمناظر الطبيعية الحادة.'
    },
    {
      title: 'التكوين الفني',
      content:
        'ضع الشمس خلف موضوعك للحصول على تأثير الإضاءة الخلفية الساحر أو استخدمها كمصدر جانبي لإبراز الملمس والعمق.'
    },
    {
      title: 'الخلاصة',
      content:
        'الساعة الذهبية هي هدية للمصورين. استغلها جيداً وستحصل على صور لا تنسى تتميز بجمالها الطبيعي.'
    }
  ];

  tags = ['#إضاءة', '#الساعة الذهبية', '#تصوير خارجي'];

  relatedArticles: RelatedArticle[] = [
    {
      slug: 'sports-action-photography',
      title: 'تصوير الرياضة والحركة: تجميد اللحظة الحاسمة',
      description: 'تعلم تقنيات تصوير الأحداث الرياضية والحركة السريعة بوضوح ودقة احترافية.',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
      category: 'بورتريه',
      readTime: '10 دقائق للقراءة',
      date: '28 نوفمبر 2025',
      authorName: 'أحمد الشهري',
      authorRole: 'مصور رياضي',
      authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    {
      slug: 'wedding-photography-guide',
      title: 'تصوير حفلات الزفاف: دليل المصور المحترف',
      description: 'تعلم أساسيات تصوير حفلات الزفاف من التحضير إلى تسليم الصور النهائية.',
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80',
      category: 'بورتريه',
      readTime: '11 دقائق للقراءة',
      date: '10 ديسمبر 2025',
      authorName: 'منصور الزهراني',
      authorRole: 'مصور زفاف',
      authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    {
      slug: 'street-photography-moments',
      title: 'تصوير الشارع: فن التقاط الحياة اليومية',
      description: 'اكتشف أسرار تصوير الشارع وكيفية توثيق اللحظات العفوية في الحياة اليومية.',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80',
      category: 'بورتريه',
      readTime: '7 دقائق للقراءة',
      date: '28 ديسمبر 2023',
      authorName: 'نادر سعيد',
      authorRole: 'مصور شارع',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    {
      slug: 'night-sky-photography',
      title: 'تصوير الليل والنجوم: دليلك لالتقاط سماء الليل',
      description: 'تعلم كيفية تصوير النجوم ودرب التبانة والمناظر الليلية الساحرة مع هذه التقنيات المتقدمة.',
      image: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1200&q=80',
      category: 'إضاءة',
      readTime: '11 دقيقة للقراءة',
      date: '1 يناير 2024',
      authorName: 'خالد الفيصل',
      authorRole: 'مصور فلكي',
      authorImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80'
    },
    {
      slug: 'flash-basics',
      title: 'أساسيات التصوير بالفلاش: تحكم كامل في الإضاءة',
      description: 'افهم كيفية استخدام الفلاش الخارجي لإنشاء إضاءة احترافية في أي موقف.',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
      category: 'إضاءة',
      readTime: '8 دقائق للقراءة',
      date: '25 نوفمبر 2025',
      authorName: 'ماجد القحطاني',
      authorRole: 'مصور استوديو',
      authorImage: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=200&q=80'
    },
    {
      slug: 'mobile-photography-pro',
      title: 'تصوير الهاتف المحمول: كيف تلتقط صورة احترافية بهاتفك',
      description: 'اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات.',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80',
      category: 'معدات',
      readTime: '8 دقائق للقراءة',
      date: '3 يناير 2024',
      authorName: 'جمال عبدالله',
      authorRole: 'مصور ومراجع تقني',
      authorImage: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80'
    },
    {
      slug: 'lens-guide-beginners',
      title: 'دليل العدسات للمبتدئين: كيف تختار عدستك الأولى',
      description: 'افهم أنواع العدسات المختلفة واختر الأنسب لأسلوب تصويرك واحتياجاتك.',
      image: 'https://images.unsplash.com/photo-1516724562728-afc824a36e84?auto=format&fit=crop&w=1200&q=80',
      category: 'معدات',
      readTime: '9 دقائق للقراءة',
      date: '2 نوفمبر 2025',
      authorName: 'فهد السبيعي',
      authorRole: 'مراجع معدات',
      authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    {
      slug: 'raw-vs-jpeg',
      title: 'RAW مقابل JPEG: متى تستخدم كلاً منهما',
      description: 'افهم الفرق بين صيغتي الصور الأكثر شيوعاً واختر الأنسب لاحتياجاتك.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
      category: 'معدات',
      readTime: '6 دقائق للقراءة',
      date: '8 نوفمبر 2025',
      authorName: 'كريم الفهد',
      authorRole: 'خبير تقني',
      authorImage: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=200&q=80'
    }
  ];

  get relatedByCategory(): RelatedCategoryGroup[] {
    const filtered = this.relatedArticles.filter((item) => item.title !== this.article.title);
    const grouped = new Map<string, RelatedArticle[]>();

    for (const item of filtered) {
      if (!grouped.has(item.category)) {
        grouped.set(item.category, []);
      }
      grouped.get(item.category)?.push(item);
    }

    const groups = Array.from(grouped.entries()).map(([category, articles]) => ({ category, articles }));
    groups.sort((a, b) => {
      if (a.category === this.article.category) {
        return -1;
      }
      if (b.category === this.article.category) {
        return 1;
      }
      return a.category.localeCompare(b.category, 'ar');
    });

    return groups;
  }

  constructor() {
    const navState = history.state as { article?: ArticlePayload };
    if (navState?.article?.title) {
      this.article = navState.article;
    }
  }
}
