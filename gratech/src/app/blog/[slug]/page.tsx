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
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { slug } = await params;
    const blogDetailData = await getMetaDataOfPage(slug);
    const blogDetail = await blogDetailData;

    return {
      title: blogDetail?.data?.metaTitle || 'Blog Post',
      description: blogDetail?.data?.metaDescription || 'Read our blog post',
      keywords: blogDetail?.data?.metaKeywords || 'blog, article',
      openGraph: {
        images: blogDetail?.data?.fileName,
        siteName: "iFour Technolab",
        type: "article",
      },
    };
  } catch {
    return {
      title: 'Blog Not Found',
      description: 'The requested blog post could not be found.',
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

  return (
    <>
      <HeaderOne />
      <main>
        <BlogDetailBanner pageName="Blog Details" />
        <BlogDetailsPage blogSlug={slug} />
        <NewsletterSection />
      </main>
      <FooterOne />
    </>
  );
}

