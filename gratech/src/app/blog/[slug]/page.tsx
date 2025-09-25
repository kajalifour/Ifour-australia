import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HeaderOne from '@/layouts/headers/HeaderOne';
import NewsletterSection from '@/components/common/NewsletterSection';
import FooterOne from '@/layouts/footers/FooterOne';
import { getMetaDataOfPage } from '@/utils/api';
import BlogDetailsPage from '@/components/blogs/BlogDetailsPage';
import BlogDetailBanner from '@/components/blogs/BlogDetailBanner';
import BlogSidebar from '@/components/blogs/BlogSidebar';

// Always validate against live API; avoid serving cached content for wrong slugs
export const dynamic = 'force-dynamic';



interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { slug } = await params;
    const blogDetail = await getMetaDataOfPage(slug);

    return {
      title: blogDetail?.data?.metaTitle || 'Blog Post | iFour Technolabs',
      description: blogDetail?.data?.metaDescription || 'Read our latest blog post on IT services and technology solutions.',
      keywords: blogDetail?.data?.metaKeywords || 'blog, article, IT services, technology',
      openGraph: {
        title: blogDetail?.data?.metaTitle || 'Blog Post | iFour Technolabs',
        description: blogDetail?.data?.metaDescription || 'Read our latest blog post on IT services and technology solutions.',
        images: blogDetail?.data?.fileName,
        siteName: "iFour Technolabs",
        type: "article",
      },
    };
  } catch {
    return {
      title: 'Blog Not Found | iFour Technolabs',
      description: 'The requested blog post could not be found. Explore our other IT and technology blog posts.',
    };
  }
}

export async function generateStaticParams() {
  // Only pre-generate the one hardcoded example for now
  return [
    { slug: 'nodejs-interview-questions' }
  ];
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  let pageName = 'Blog Details';
  let breadcrumbName = '';

  // Server-side validation: if the slug is invalid or not found, render 404
  try {
    const blogDetail = await getMetaDataOfPage(slug);
    const data = blogDetail?.data as any;
    const slugMismatch = data?.slug && typeof data.slug === 'string' && data.slug.toLowerCase() !== slug.toLowerCase();
    const missingEssential = !data || (!data.postTitle && !data.metaTitle);
    const notFoundCondition = !blogDetail || !data || blogDetail?.statusCode === 404 || blogDetail?.notFound || slugMismatch || missingEssential;
    if (notFoundCondition) {
      notFound();
    }
    breadcrumbName = data?.postTitle || data?.metaTitle || slug;
  } catch {
    notFound();
  }

  return (
    <>
      <HeaderOne />
      <main>
        <BlogDetailBanner pageName={pageName} breadcrumbName={breadcrumbName} />
        <BlogDetailsPage slug={slug} />
        <NewsletterSection />
      </main>
      <FooterOne />
    </>
  );
}

