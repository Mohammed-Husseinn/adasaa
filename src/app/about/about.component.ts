import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../shared/footer/footer.component';

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, RouterLink, RouterLinkActive, FooterComponent],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  private readonly teamMembers: TeamMember[] = [
    {
      name: 'إبراهيم حسن',
      role: 'مصور طبيعة',
      image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'محمد علي',
      role: 'مصور بورتريه',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'سالم أحمد',
      role: 'مصور محترف',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'جمال عبدالله',
      role: 'مصور ومراجع تقني',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'ليث محمود',
      role: 'فنان بصري',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'داود خالد',
      role: 'مدرب تصوير',
      image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'هاني الشمري',
      role: 'مصور طعام',
      image: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'نادر سعيد',
      role: 'مصور شوارع',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'خالد الفيصل',
      role: 'مصور فلكي',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'سامي الحربي',
      role: 'خبير تعديل صور',
      image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'فارس العلي',
      role: 'فنان فوتوغرافي',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'عمر الراشد',
      role: 'مصور حياة برية',
      image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'منصور الزهراني',
      role: 'مصور زفاف',
      image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'باسم المصري',
      role: 'مصور فني',
      image: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'رامي الخطيب',
      role: 'مصور ماكرو',
      image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'طارق النعيمي',
      role: 'مصور معماري',
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'لؤي الصالح',
      role: 'مصور تجاري',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'فيصل الدوسري',
      role: 'مصور جوي',
      image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'ياسر العتيبي',
      role: 'مصور رحالة',
      image: 'https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'ماجد القحطاني',
      role: 'مصور استوديو',
      image: 'https://images.unsplash.com/photo-1509475826633-fed577a2c71b?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'أحمد الشهري',
      role: 'مصور رياضي',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'عبدالله الغامدي',
      role: 'مصور عقارات',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'نايف المطيري',
      role: 'مصور مواليد',
      image: 'https://images.unsplash.com/photo-1531123414780-f74242c2b052?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'دحام الحسيني',
      role: 'فنان بصري',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'فهد السبيعي',
      role: 'مراجع معدات',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'سلطان الراجحي',
      role: 'فنان تصوير',
      image: 'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'كريم الفهد',
      role: 'خبير تقني',
      image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=200&q=80'
    },
    {
      name: 'راشد الجاسر',
      role: 'فنان بصري',
      image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=200&q=80'
    }
  ];

  teamRows: TeamMember[][] = this.chunkMembers(this.teamMembers, 3);

  private chunkMembers(members: TeamMember[], size: number): TeamMember[][] {
    const chunks: TeamMember[][] = [];
    for (let i = 0; i < members.length; i += size) {
      chunks.push(members.slice(i, i + size));
    }
    return chunks;
  }
}
