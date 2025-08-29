import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HeaderOne from '@/layouts/headers/HeaderOne';
import NewsletterSection from '@/components/common/NewsletterSection';
import FooterOne from '@/layouts/footers/FooterOne';
import { fetchBlogPostBySlug } from '@/services/blogApi';
import BlogSidebar from '@/components/blogs/blog-sidebar';
import Image from 'next/image';
import heroImg from '@/assets/images/blog/blogimage-1.webp';

// Inline CTA Component
const CTABox = () => {
  return (
    <div 
      style={{ 
        marginTop: '40px',
        marginBottom: '40px',
        paddingTop: '40px',
        paddingBottom: '40px',
        paddingLeft: '40px',
        paddingRight: '40px',
        background: 'linear-gradient(135deg, #f0fcff 0%, #e6f7ff 100%)',
        border: '3px solid #4dc1f9',
        borderRadius: '16px',
        position: 'relative' as const,
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(77, 193, 249, 0.15)',
        cursor: 'pointer'
      }}
    >
      <p style={{ 
        margin: 0,
        color: '#2c3e50',
        fontSize: '18px',
        lineHeight: '1.6',
        fontWeight: '500',
        textAlign: 'center'
      }}>
        Transform your business with our <span style={{ 
          color: '#4dc1f9',
          textDecoration: 'underline',
          fontWeight: '700',
          fontSize: '19px'
        }}>
          custom node.js development services
        </span>. Contact us.
      </p>
      <div style={{
        position: 'absolute',
        bottom: '-15px',
        right: '-15px',
        fontSize: '80px',
        color: '#3490cc',
        fontWeight: 'bold',
        opacity: '0.8',
        transform: 'rotate(5deg)'
      }}>
        &quot;
      </div>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '-10px',
        left: '-10px',
        width: '20px',
        height: '20px',
        backgroundColor: '#4dc1f9',
        borderRadius: '50%',
        opacity: '0.3'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '10px',
        right: '40px',
        width: '12px',
        height: '12px',
        backgroundColor: '#3490cc',
        borderRadius: '50%',
        opacity: '0.4'
      }}></div>
    </div>
  );
};

// Second CTA Component with different title
const CTABox2 = () => {
  return (
    <div 
      style={{ 
        marginTop: '40px',
        marginBottom: '40px',
        paddingTop: '40px',
        paddingBottom: '40px',
        paddingLeft: '40px',
        paddingRight: '40px',
        background: 'linear-gradient(135deg, #f0fcff 0%, #e6f7ff 100%)',
        border: '3px solid #4dc1f9',
        borderRadius: '16px',
        position: 'relative' as const,
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(77, 193, 249, 0.15)',
        cursor: 'pointer'
      }}
    >
      <p style={{ 
        margin: 0,
        color: '#2c3e50',
        fontSize: '18px',
        lineHeight: '1.6',
        fontWeight: '500',
        textAlign: 'center'
      }}>
        <span style={{ 
          color: '#4dc1f9',
          textDecoration: 'underline',
          fontWeight: '700',
          fontSize: '19px'
        }}>
          How Much Does It Cost to Hire Node JS Developers In 2025?
        </span>
      </p>
      <div style={{
        position: 'absolute',
        bottom: '-15px',
        right: '-15px',
        fontSize: '80px',
        color: '#3490cc',
        fontWeight: 'bold',
        opacity: '0.8',
        transform: 'rotate(5deg)'
      }}>
        &quot;
      </div>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '-10px',
        left: '-10px',
        width: '20px',
        height: '20px',
        backgroundColor: '#4dc1f9',
        borderRadius: '50%',
        opacity: '0.3'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '10px',
        right: '40px',
        width: '12px',
        height: '12px',
        backgroundColor: '#3490cc',
        borderRadius: '50%',
        opacity: '0.4'
      }}></div>
    </div>
  );
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { slug } = await params;
    const post = await fetchBlogPostBySlug(slug);
    return {
      title: post.title,
      description: post.content.excerpt,
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
  
  try {
    await fetchBlogPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <>
      <HeaderOne />
      <main>
        {/* Static title + image for the Node.js interview post, with sidebar on the right */}
        {slug === 'nodejs-interview-questions' && (
          <section className="pt-60 pb-30">
            <div className="container">
              <h2 className="text-center mb-30" style={{ fontWeight: 700 }}>
                Essential Node.js Interview Questions Every Executive Should Ask When Hiring
              </h2>
              <div className="row g-4">
                <div className="col-lg-8 order-2 order-lg-1">
                  <div className="text-center">
                    <Image src={heroImg} alt="Node.js Interview Questions" style={{ height: 'auto', width: '100%', borderRadius: 12 }} />
                  </div>
                  <div className="mt-20" style={{ textAlign: 'left' }}>
                    <p>As per the Statista reports, Node.js remains the most used web framework among programmers worldwide in 2024. The widespread adoption of node.js encourages more and more businesses to adopt NodeJs for server-side development, leading to increased demand for Node.js developers.</p>
                    <p>When hiring node js developers its crucial to ask a mix of questions that cover the coding knowledge and problem-solving abilities of the candidate. Listing down the important questions will help you easily gauge the skills and capabilities of the candidates to help you find the right talent. In this blog we will explore some essential node.js interview questions employer should ask while hiring along with their expected answers.</p>
                    <h3 style={{ paddingTop: '40px', fontWeight: 700 }}>16 Essential Nodejs Interview Questions to Ask</h3>
                    <p style={{ marginTop: '20px' }}>Here is the comprehensive list of essential node js executive interview questions along with their expected answer to ask while.</p>
                    
                    <div style={{ marginTop: '30px' }}>
                      <h4 style={{ fontWeight: 600, marginBottom: '10px', color: '#0f7a95' }}>1. Explain what is node js?</h4>
                      <p style={{ marginBottom: '20px' }}><strong>Answer:</strong> Node.js is a Javascript runtime environment useful to build server-side apps. It offers several benefits like event mechanism, single-threaded model, great concurrency, and generally fast making it easy to build scalable network solutions.</p>
                      
                      <h4 style={{ fontWeight: 600, marginBottom: '10px', color: '#0f7a95' }}>2. Is Node.js single-threaded?</h4>
                      <p style={{ marginBottom: '20px' }}><strong>Answer:</strong> Yes, Node.js is single-threaded, nevertheless it uses event-driven architecture and non-blocking I/O to efficiently handle multiple concurrent requests, ensuring scalability and high performance.</p>
                      
                      {/* First CTA Box - After 2nd question */}
                      <div style={{ marginBottom: '40px' }}>
                        <CTABox />
                      </div>
                      
                      <h4 style={{ fontWeight: 600, marginBottom: '10px', color: '#0f7a95' }}>3. What refers to npm in Node.js?</h4>
                      <p style={{ marginBottom: '20px' }}><strong>Answer:</strong> Npm stands for Node Package Manager which allows installing, managing, and sharing reusable Javascript code packages and modules.</p>
                      
                      <h4 style={{ fontWeight: 600, marginBottom: '10px', color: '#0f7a95' }}>4. Explain the concept of middleware</h4>
                      <p style={{ marginBottom: '20px' }}><strong>Answer:</strong> Middleware in Express.js is a function that has access to the request and response objects and can modify these objects. It helps to add functionalities like logging, authentication, error handling, and response formatting.</p>
                      
                      <h4 style={{ fontWeight: 600, marginBottom: '10px', color: '#0f7a95' }}>5. Are there any disadvantages to using Node.js?</h4>
                      <p style={{ marginBottom: '20px' }}><strong>Answer:</strong> Yes, there remain some disadvantages of utilizing Node.js such as its single-threaded nature limiting the performance, rapid API changes, NoSQL preference, asynchronous programming model, etc.</p>
                      
                      <h4 style={{ fontWeight: 600, marginBottom: '10px', color: '#0f7a95' }}>6. Can you explain how you would secure a Node.js application?</h4>
                      <p style={{ marginBottom: '20px' }}><strong>Answer:</strong> To secure the Node.js app it is essential to implement HTTPS, data sanitization, logging and monitoring, and proper authentication and authorization.</p>
                      
                      {/* Second CTA Box - After 6th question */}
                      <div style={{ marginBottom: '40px' }}>
                        <CTABox2 />
                      </div>
                      
                      <h4 style={{ fontWeight: 600, marginBottom: '10px', color: '#0f7a95' }}>7. What are Streams in Node.js?</h4>
                      <p style={{ marginBottom: '20px' }}><strong>Answer:</strong> Streams serve as a powerful mechanism to manage data flow efficiently, particularly helpful while dealing with large data sets as it helps to process data in chunks rather than loading everything at once. It can be used to handle large files, network communication, and real-time data processing.</p>
                      
                      <h4 style={{ fontWeight: 600, marginBottom: '10px', color: '#0f7a95' }}>8. What is Package.json?</h4>
                      <p style={{ marginBottom: '20px' }}><strong>Answer:</strong> Package.json is a configuration file containing project metadata like dependencies, scripts, versions, etc. It helps to manage project dependencies using npm and defines how the project should run.</p>
                      
                      <h4 style={{ fontWeight: 600, marginBottom: '10px', color: '#0f7a95' }}>9. What is the event loop?</h4>
                      <p style={{ marginBottom: '20px' }}><strong>Answer:</strong> An event loop is the core component that handles multiple asynchronous tasks in node.js. It continuously checks for events and executes associated callbacks without blocking the main thread.</p>
                      
                      <h4 style={{ fontWeight: 600, marginBottom: '10px', color: '#0f7a95' }}>10. What does callback hell mean?</h4>
                      <p style={{ marginBottom: '20px' }}><strong>Answer:</strong> Callback hell refers to an issue caused when multiple nested callbacks make code difficult to read and maintain. This occurs mainly due to improper implementation of the asynchronous logic.</p>
                      
                      <h4 style={{ fontWeight: 600, marginBottom: '10px', color: '#0f7a95' }}>11. What does it mean by clustering in Node.js?</h4>
                      <p style={{ marginBottom: '20px' }}><strong>Answer:</strong> Clustering is a technique used to create multiple child processes or workers that run simultaneously and share a single server port. Clustering can be used to improve the performance and scalability of HTTP servers, database connections, and other I/O operations.</p>
                      
                      <h4 style={{ fontWeight: 600, marginBottom: '10px', color: '#0f7a95' }}>12. How do you handle asynchronous code in Node.js?</h4>
                      <p style={{ marginBottom: '20px' }}><strong>Answer:</strong> Asynchronous operations can be managed using callbacks, promises, and async/await approach. This mechanism allows one to perform I/O operations without blocking the main thread.</p>
                      
                      {/* Third CTA Box - After 12th question */}
                      <div style={{ marginBottom: '40px' }}>
                        <CTABox />
                      </div>
                      
                      <h4 style={{ fontWeight: 600, marginBottom: '10px', color: '#0f7a95' }}>13. What are the advantages of utilizing Node js for microservices?</h4>
                      <p style={{ marginBottom: '20px' }}><strong>Answer:</strong> Key advantages of using Node.js for microservices include flexibility, non-blocking I/O nature for easy scaling, rapid performance, a rich ecosystem of libraries, and improved developer productivity.</p>
                      
                      <h4 style={{ fontWeight: 600, marginBottom: '10px', color: '#0f7a95' }}>14. What is REPL in Node.js?</h4>
                      <p style={{ marginBottom: '20px' }}><strong>Answer:</strong> REPL in Node.js stands for Read, Evaluate, Print, Loop, representing a computer environment. It&apos;s similar to a Windows shell where the command is entered, and the system responds with an output.</p>
                      
                      <h4 style={{ fontWeight: 600, marginBottom: '10px', color: '#0f7a95' }}>15. How will you implement authentication and authorization?</h4>
                      <p style={{ marginBottom: '20px' }}><strong>Answer:</strong> Authentication refers to the process of verifying a user&apos;s identity and it can be implemented using libraries like passport for OAuth and JWT. Authorization refers to determining what actions to perform and can be implemented by defining user roles and permissions in middleware functions.</p>
                      
                      <h4 style={{ fontWeight: 600, marginBottom: '10px', color: '#0f7a95' }}>16. What is the difference between setTimeout and setImmediate?</h4>
                      <p style={{ marginBottom: '20px' }}><strong>Answer:</strong> The main difference between setTimeout and setImmediate is that the setTimeout is used to hold a function and execute it after a specific time. While setImmediate is used to execute the callback function immediately.</p>
                      
                      <p style={{ marginTop: '30px', fontSize: '16px', lineHeight: '1.6' }}>
                        So, these are some of the essential node.js interview questions that executives should ask while hiring node js developers. Aside from the technical interview questions, it is also essential to check for the soft skills of the programmers including, communication, creative problem-solving, time management, etc. This helps to hire the right coder who possesses work creativity along with tech expertise to be productive in the workplace. Now let&apos;s check out some Nodejs interview tips to consider.
                      </p>
                      
                      {/* Fourth CTA Box - After 16th question */}
                      <div style={{ marginBottom: '40px' }}>
                        <CTABox />
                  </div>
                  
                      {/* Common Mistakes Section */}
                      <div style={{ marginTop: '60px' }}>
                        <h3 style={{ 
                          fontWeight: 700, 
                          color: '#0f7a95', 
                          marginBottom: '20px',
                          fontSize: '28px'
                        }}>
                          Common Mistakes to Avoid in Node.js Interview
                        </h3>
                        
                        <p style={{ 
                          fontSize: '16px', 
                          lineHeight: '1.6', 
                          marginBottom: '30px',
                          color: '#2c3e50'
                        }}>
                          Here are the potential mistakes employers should while conducting the node.js developer interview.
                        </p>
                        
                        <p style={{ 
                          fontSize: '16px', 
                          lineHeight: '1.6', 
                          marginBottom: '20px',
                          color: '#2c3e50'
                        }}>
                          <strong>Comprehensive testing is crucial for code quality.</strong> Hence while hiring node js developers assess the candidate&apos;s knowledge about testing frameworks and methodologies, like unit and integration testing, and discuss their strategies in the interview.
                        </p>
                        
                        <p style={{ 
                          fontSize: '16px', 
                          lineHeight: '1.6', 
                          marginBottom: '20px',
                          color: '#2c3e50'
                        }}>
                          <strong>Security remains an essential node js question to ask.</strong> So, be assured to check if candidates know common vulnerabilities like SQL injection and XSS and understand input validation and authentication mechanisms.
                        </p>
                        
                        <p style={{ 
                          fontSize: '16px', 
                          lineHeight: '1.6', 
                          marginBottom: '20px',
                          color: '#2c3e50'
                        }}>
                          <strong>Candidates should monitor performance metrics and memory usage</strong> in Node.js applications to prevent memory leaks and performance degradation.
                        </p>
                        
                        <p style={{ 
                          fontSize: '16px', 
                          lineHeight: '1.6', 
                          marginBottom: '20px',
                          color: '#2c3e50'
                        }}>
                          <strong>Candidates often lack preparation for technical Node.js questions,</strong> particularly about its architecture and core modules. It&apos;s important to evaluate their familiarity with the Node.js ecosystem and libraries.
                        </p>
                        
                        <p style={{ 
                          fontSize: '16px', 
                          lineHeight: '1.6', 
                          marginBottom: '40px',
                          color: '#2c3e50'
                        }}>
                          Considering these common mistakes in node.js developer interview, helps you ensure the right selection of candidates.
                        </p>
                        
                        {/* Conclusion Section */}
                        <h4 style={{ 
                          fontWeight: 700, 
                          color: '#0f7a95', 
                          marginBottom: '20px',
                          fontSize: '22px'
                        }}>
                          Conclusion
                        </h4>
                        
                        <p style={{ 
                          fontSize: '16px', 
                          lineHeight: '1.6', 
                          marginBottom: '20px',
                          color: '#2c3e50'
                        }}>
                          In this blog, we covered some of the essential Nodejs interview questions to ask while hiring. As we discussed it&apos;s crucial to identify the soft skills of programmers along with their technical expertise.
                        </p>
                        
                        <p style={{ 
                          fontSize: '16px', 
                          lineHeight: '1.6', 
                          margin: 0,
                          color: '#2c3e50'
                        }}>
                          Looking to hire Node.js developers for your next project? Connect with iFour to find the right talent. We have a talent pool of Node.js programmers having extensive expertise and experience in the field helping clients build robust and scalable solutions tailored to their unique needs.
                        </p>
                  </div>
                </div>
                  </div>
                </div>
                <div className="col-lg-4 order-1 order-lg-2">
                  <BlogSidebar />
              </div>
            </div>
          </div>
        </section>
        )}
        
        <NewsletterSection />
      </main>
      <FooterOne />
    </>
  );
}

