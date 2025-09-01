import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import HeaderOne from '@/layouts/headers/HeaderOne';
import BreadCrumb from '@/components/common/BreadCrumb';
import NewsletterSection from '@/components/common/NewsletterSection';
import FooterOne from '@/layouts/footers/FooterOne';
import { fetchBlogCategoryBySlug, fetchBlogPostsByCategory } from '@/services/blogApi';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const category = await fetchBlogCategoryBySlug(params.slug);
    return {
      title: `Blog Category by ${category.title}`,
      description: category.description,
    };
  } catch (error) {
    return {
      title: 'Blog Category Not Found',
      description: 'The requested blog category could not be found.',
    };
  }
}

export async function generateStaticParams() {
  // Only pre-generate the one hardcoded example
  return [
    { slug: 'node-js-development' }
  ];
}

export default async function BlogCategoryPage({ params }: Props) {
  let category;
  let posts;
  
  try {
    category = await fetchBlogCategoryBySlug(params.slug);
    posts = await fetchBlogPostsByCategory(params.slug);
  } catch (error) {
    notFound();
  }

  return (
    <>
      <HeaderOne />
      <main>
        <BreadCrumb sub_title="Blog Category" title="Blog Category" />
        
        {/* Blog Category Section */}
        <section className="blog-category-area pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb-60" style={{ marginTop: '35px' }}>
                  <h2>Blog Category by {category.title}</h2>
                </div>
              </div>
            </div>
            
            <div className="row">
              {posts.map((post) => (
                <div key={post.id} className="col-lg-6 col-md-6">
                  <div className="blog-item mb-30">
                    <div className="blog-thumb">
                      <Link href={`/blog/${post.slug}`}>
                        <img src={post.thumbnail} alt={post.title} />
                      </Link>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span><i className="fa-regular fa-calendar"></i> {post.date} {post.month}, {post.year}</span>
                        <span><i className="fa-regular fa-folder"></i> {post.category}</span>
                      </div>
                      <h4 className="blog-title">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h4>
                      <p>{post.excerpt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <NewsletterSection />
      </main>
      <FooterOne />
    </>
  );
}

