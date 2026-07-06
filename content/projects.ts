import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'intaleks',
    title: 'Business Valuation SaaS Platform',
    client: 'Intaleks',
    category: 'SaaS Platform',
    tech: ['Next.js 15', 'Supabase', 'Stripe', 'Vercel'],
    url: 'https://intaleks.com',
    challenge:
      'Aleks Todorovic needed a business valuation SaaS supporting six countries with different valuation logic, Stripe payments, coupon systems, and a full affiliate portal. No off-the-shelf solution existed for this level of customisation.',
    outcomes: [
      { value: '6', label: 'Countries supported' },
      { value: 'Full', label: 'Affiliate portal built' },
      { value: '3 yrs', label: 'Ongoing relationship' },
    ],
  },
  {
    id: 'leadership-wow-factor',
    title: 'Leadership Coaching Platform',
    client: 'Leadership WOW Factor',
    category: 'Coaching Platform',
    tech: ['WordPress', 'LearnDash LMS', 'Elementor'],
    url: 'https://leadershipwowfactor.com',
    challenge:
      'Tara Fennessy needed a platform that delivered leadership coaching programs, managed course access, handled assignment approvals, and converted visitors into program members. The old setup was manual and fragmented.',
    outcomes: [
      { value: 'Full LMS', label: 'Course delivery built' },
      { value: 'Auto', label: 'Assignment approval logic' },
      { value: 'UK', label: 'Market served' },
    ],
  },
  {
    id: 'dial-a-pilot',
    title: 'Premium Aviation Community',
    client: 'Dial-A-Pilot Premium',
    category: 'Circle Community',
    tech: ['Circle.so', 'Custom Domain', 'Course Architecture'],
    url: 'https://dial-a-pilot-premium.circle.so',
    challenge:
      'A premium aviation community needed a proper home with a member experience that made joining feel worthwhile from the first login. Spaces, courses, and an onboarding path that retained members past week one.',
    outcomes: [
      { value: 'Circle', label: 'Full community build' },
      { value: 'Retention', label: 'Onboarding system built' },
      { value: 'Custom', label: 'Domain and branding' },
    ],
  },
  {
    id: 'invisablend',
    title: 'Hair Prosthetics Ecommerce',
    client: 'Invisablend',
    category: 'Ecommerce',
    tech: ['WordPress', 'WooCommerce', 'Elementor'],
    url: 'https://www.invisablend.com',
    challenge:
      'Invisablend needed a full ecommerce presence for a sensitive product category requiring trust, clarity, and a smooth purchase journey. Previous speed and malware problems were damaging conversions significantly.',
    outcomes: [
      { value: 'Full', label: 'Ecommerce build' },
      { value: 'Fixed', label: 'Malware and speed issues' },
      { value: '3 yrs', label: 'Ongoing relationship' },
    ],
  },
  {
    id: 'motivate-me',
    title: 'Social Media Coaching Community',
    client: 'Motivate Me Social Media',
    category: 'Mighty Networks',
    tech: ['Mighty Networks', 'Course Architecture'],
    url: 'https://motivatemesocialmedia.mn.co',
    challenge:
      'A social media coaching brand needed to move their community into a properly structured Mighty Networks platform with courses, spaces, and a system that converted free members into paid subscribers.',
    outcomes: [
      { value: 'Full', label: 'Mighty Networks build' },
      { value: 'Free to paid', label: 'Member journey built' },
      { value: 'Courses', label: 'Full LMS integration' },
    ],
  },
  {
    id: 'boss-business-coaching',
    title: 'Business Coaching Website',
    client: 'Boss Business Coaching',
    category: 'Coaching Website',
    tech: ['WordPress', 'Elementor', 'Lead Forms'],
    url: 'https://www.bossbusinesscoaching.com.au',
    challenge:
      'An Australian business coaching firm needed a conversion-focused website that positioned their coaching programs clearly and guided visitors toward a discovery call. The previous site had no clear call-to-action flow.',
    outcomes: [
      { value: 'AU', label: 'Market served' },
      { value: 'Clear', label: 'Lead capture funnel' },
      { value: 'Full', label: 'Brand-aligned build' },
    ],
  },
  {
    id: 'midlife-crossroads',
    title: 'Life Transitions Course Platform',
    client: 'Midlife Crossroads Academy',
    category: 'Online Course Platform',
    tech: ['WordPress', 'LearnDash LMS', 'Elementor'],
    url: 'https://midlifecrossroadsacademy.com',
    challenge:
      'A coaching program helping people navigate major life transitions needed a full course delivery platform with membership access, module progression, and a conversion path that matched the emotional journey of their audience.',
    outcomes: [
      { value: 'Full LMS', label: 'Platform built' },
      { value: 'Membership', label: 'Access control built' },
      { value: 'CA', label: 'Market served' },
    ],
  },
  {
    id: 'dolled-lashes',
    title: 'Beauty Ecommerce Store',
    client: 'Dolled Lashes',
    category: 'Shopify Ecommerce',
    tech: ['Shopify', 'Theme Customisation', 'Product Architecture'],
    url: 'https://dolled-lashes-2.myshopify.com',
    challenge:
      'A lash brand targeting the Australian beauty market needed a full Shopify store built from scratch, with product architecture, a checkout flow optimised for conversion, and brand identity woven into every page.',
    outcomes: [
      { value: 'Shopify', label: 'Full store build' },
      { value: 'AU', label: 'Market targeted' },
      { value: 'Custom', label: 'Checkout flow' },
    ],
  },
  {
    id: 'morane-social',
    title: 'Instagram Growth Management',
    client: 'Morane Grignon',
    category: 'Social Media Management',
    tech: ['Manual Engagement', 'Audience Strategy', 'Analytics'],
    url: 'https://instagram.com',
    challenge:
      'A professional photographer needed consistent, authentic Instagram growth without bots or automation. The challenge was building a genuinely engaged audience in the right niche, not just a follower count.',
    outcomes: [
      { value: '460', label: 'New followers in 30 days' },
      { value: '44.5K', label: 'Views in 30 days' },
      { value: '2 yrs', label: 'Ongoing management' },
    ],
  },
]
