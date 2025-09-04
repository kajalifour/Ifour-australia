import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HeaderOne from '@/layouts/headers/HeaderOne';
import NewsletterSection from '@/components/common/NewsletterSection';
import FooterOne from '@/layouts/footers/FooterOne';
import { getMetaDataOfPage } from '@/utils/api';
import BlogDetailsPage from '@/components/blogs/BlogDetailsPage';
import BlogDetailBanner from '@/components/blogs/BlogDetailBanner';
import BlogSidebar from '@/components/blogs/BlogSidebar';



interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { slug } = params;
    const blogDetailData = await getMetaDataOfPage(slug);
    const blogDetail = await blogDetailData;

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
  const { slug } = params;

  return (
    <>
      <HeaderOne />
      <main>
        <BlogDetailBanner pageName="Blog Details" />
        {/* Force dynamic rendering for always-fresh data */}
        <BlogDetailsPage slug={slug} />
        <NewsletterSection />
      </main>
      <FooterOne />
    </>
  );
}

