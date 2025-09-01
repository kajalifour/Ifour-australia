import axios from 'axios';

const URL = process.env.NEXT_PUBLIC_API_URL;

// Check if API URL is configured
const isApiConfigured = URL && URL.trim() !== '';

const api = axios.create({ baseURL: URL });

// Fallback data when API is not available
const getFallbackBlogData = () => ({
  data: {
    blogList: {
      resultSet: [
        {
          id: 1,
          slug: 'nodejs-interview-questions',
          postTitle: 'Essential Node.js Interview Questions Every Executive Should Ask When Hiring',
          postContent: 'When hiring Node.js developers, executives need to understand both technical and business aspects. This comprehensive guide covers essential interview questions that help identify top talent.',
          authorName: 'Ahmed Mehmood',
          publishedDates: '2024-11-28',
          fileName: '/assets/images/blog/blog-image1.jpg',
          alt: 'Node.js Interview Questions',
          isPublished: true
        },
        {
          id: 2,
          slug: 'benefits-of-mobile-apps-for-business',
          postTitle: 'Top 10 Benefits of Mobile Apps For Business',
          postContent: 'Mobile applications have become essential for modern businesses. This guide explores the top 10 benefits including improved customer engagement and increased accessibility.',
          authorName: 'Ahmed Mehmood',
          publishedDates: '2024-11-11',
          fileName: '/assets/images/blog/blog-image2.jpg',
          alt: 'Mobile Apps Benefits',
          isPublished: true
        },
        {
          id: 3,
          slug: 'cost-to-hire-node-js-developers',
          postTitle: 'How Much Does it Cost to Hire Node Js Developers in 2025?',
          postContent: 'Hiring Node.js developers in 2025 requires understanding various cost factors including experience levels, location, and project complexity.',
          authorName: 'Ahmed Mehmood',
          publishedDates: '2024-10-21',
          fileName: '/assets/images/blog/blog-image3.jpg',
          alt: 'Node.js Developer Costs',
          isPublished: true
        }
      ],
      pageCount: 1
    }
  }
});

const getFallbackCategories = () => ({
  data: [
    { id: 1, slug: 'node-js-development', name: 'Node.js Development' },
    { id: 2, slug: 'mobile-development', name: 'Mobile Development' },
    { id: 3, slug: 'web-development', name: 'Web Development' },
    { id: 4, slug: 'technology', name: 'Technology' }
  ]
});

const getFallbackRecentPosts = () => ({
  data: [
    {
      id: 1,
      slug: 'nodejs-interview-questions',
      postTitle: 'Essential Node.js Interview Questions',
      fileName: '/assets/images/blog/blog-single-sm1.jpg',
      publishedDates: '2024-11-28'
    },
    {
      id: 2,
      slug: 'benefits-of-mobile-apps-for-business',
      postTitle: 'Top 10 Benefits of Mobile Apps',
      fileName: '/assets/images/blog/blog-single-sm2.jpg',
      publishedDates: '2024-11-11'
    }
  ]
});

const getFallbackBlogDetails = (slug) => {
  const fallbackBlogs = {
    'nodejs-interview-questions': {
      data: {
        id: 1,
        slug: 'nodejs-interview-questions',
        postTitle: 'Essential Node.js Interview Questions Every Executive Should Ask When Hiring',
        postContent: '<p>When hiring Node.js developers, executives need to understand both technical and business aspects. This comprehensive guide covers essential interview questions that help identify top talent.</p><p>From understanding asynchronous programming and event loops to evaluating experience with popular frameworks like Express.js, these questions ensure you hire developers who can deliver scalable, maintainable applications.</p>',
        authorName: 'Ahmed Mehmood',
        publishedDates: '2024-11-28',
        fileName: '/assets/images/blog/post-sm1.png',
        alt: 'Node.js Interview Questions',
        metaTitle: 'Essential Node.js Interview Questions - iFour Technolab',
        metaDescription: 'Essential Node.js interview questions that every executive should know when hiring developers.',
        metaKeywords: 'nodejs, interview, questions, hiring, developers'
      }
    },
    'benefits-of-mobile-apps-for-business': {
      data: {
        id: 2,
        slug: 'benefits-of-mobile-apps-for-business',
        postTitle: 'Top 10 Benefits of Mobile Apps For Business',
        postContent: '<p>Mobile applications have become essential for modern businesses. This guide explores the top 10 benefits including improved customer engagement, increased accessibility, and enhanced brand recognition.</p>',
        authorName: 'Ahmed Mehmood',
        publishedDates: '2024-11-11',
        fileName: '/assets/images/blog/post-sm2.png',
        alt: 'Mobile Apps Benefits',
        metaTitle: 'Top 10 Benefits of Mobile Apps For Business - iFour Technolab',
        metaDescription: 'Discover the top 10 benefits that mobile applications can bring to your business.',
        metaKeywords: 'mobile apps, business, benefits, development'
      }
    }
  };
  
  return fallbackBlogs[slug] || { notFound: true };
};

export const getAllBlog = async (pageNum = 1) => {
  // If API is not configured, return fallback data
  if (!isApiConfigured) {
    console.log('API not configured, using fallback blog data');
    return getFallbackBlogData();
  }

  try {
    const response = await fetch(
    `${URL}/Blog/GetAll?pageSize=5&pageNumber=${pageNum}`,
      { 
        headers: { sitetype: '7' }, 
        cache: 'no-store' 
      }
    );

    if (!response.ok) {
      if (response.status === 404) {
        console.log('API endpoint not found (404), using fallback blog data');
        return getFallbackBlogData();
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Response is not JSON');
    }

    const responseText = await response.text();
    if (!responseText || responseText.trim() === '') {
      throw new Error('Empty response');
    }

    const data = JSON.parse(responseText);
    return data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    console.log('Using fallback blog data due to API error');
    return getFallbackBlogData();
  }
};

export const getBlogCategory = async () => {
  // If API is not configured, return fallback data
  if (!isApiConfigured) {
    console.log('API not configured, using fallback categories');
    return getFallbackCategories();
  }

  try {
    const response = await fetch(`${URL}/Blog/GetBlogCategory`, {
    headers: { sitetype: '7' },
    cache: 'no-store',
  });

    if (!response.ok) {
      if (response.status === 404) {
        console.log('API endpoint not found (404), using fallback categories');
        return getFallbackCategories();
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Response is not JSON');
    }

    const responseText = await response.text();
    if (!responseText || responseText.trim() === '') {
      throw new Error('Empty response');
    }

    const data = JSON.parse(responseText);
    return data;
  } catch (error) {
    console.error('Error fetching blog categories:', error);
    console.log('Using fallback categories due to API error');
    return getFallbackCategories();
  }
};

export const getRecentBlogPosts = async () => {
  // If API is not configured, return fallback data
  if (!isApiConfigured) {
    console.log('API not configured, using fallback recent posts');
    return getFallbackRecentPosts();
  }

  try {
    const response = await fetch(`${URL}/Blog/GetBlogRecentPost`, {
    headers: { sitetype: '7' },
    cache: 'no-store',
  });

    if (!response.ok) {
      if (response.status === 404) {
        console.log('API endpoint not found (404), using fallback recent posts');
        return getFallbackRecentPosts();
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Response is not JSON');
    }

    const responseText = await response.text();
    if (!responseText || responseText.trim() === '') {
      throw new Error('Empty response');
    }

    const data = JSON.parse(responseText);
    return data;
  } catch (error) {
    console.error('Error fetching recent posts:', error);
    console.log('Using fallback recent posts due to API error');
    return getFallbackRecentPosts();
  }
};

export const getBlogsOfCategory = async (categoryName, pageNum = 1) => {
  // If API is not configured, return fallback data
  if (!isApiConfigured) {
    console.log('API not configured, using fallback blog data for category');
    return getFallbackBlogData();
  }

  try {
    const response = await fetch(
      `${URL}/Blog/GetAll?catSlug=${categoryName}&pageSize=5&pageNumber=${pageNum}`,
      { headers: { sitetype: '7' }, cache: 'no-store' }
    );
    
    if (!response.ok) {
      if (response.status === 404) {
        console.log('API endpoint not found (404), using fallback blog data for category');
        return getFallbackBlogData();
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Response is not JSON');
    }

    const responseText = await response.text();
    if (!responseText || responseText.trim() === '') {
      throw new Error('Empty response');
    }

    const data = JSON.parse(responseText);
    return data;
  } catch (error) {
    console.error('Error fetching category blogs:', error);
    console.log('Using fallback blog data for category due to API error');
    return getFallbackBlogData();
  }
};

//blog Details
export const getBlogDetails = async (slug) => {
  // If API is not configured, return fallback data
  if (!isApiConfigured) {
    console.log('API not configured, using fallback blog details');
    return getFallbackBlogDetails(slug);
  }

  try {
    const response = await fetch(
      `${URL}/Blog/GetBlogDetailBySlug?slug=${slug}`,
      {
        headers: { sitetype: '7' },
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      if (response.status === 404) {
        console.log('API endpoint not found (404), using fallback blog details');
        return getFallbackBlogDetails(slug);
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Response is not JSON');
    }

    const responseText = await response.text();
    if (!responseText || responseText.trim() === '') {
      throw new Error('Empty response');
    }

      const blogDetails = JSON.parse(responseText);
      return blogDetails;
  } catch (error) {
    console.error('Error fetching blog details:', error);
    console.log('Using fallback blog details due to API error');
    return getFallbackBlogDetails(slug);
  }
};

// form
export const CONTACT_FORM_API = async (contactData) => {
  await api.post('/Contactform/Add', contactData, {
    headers: { sitetype: '7' },
  });
};

export const checkRequestByIp = async (ip) => {
  return await api.get(`Contactform/CheckRequestByIp?ipAddress=${ip}`, {
    headers: { sitetype: '7' },
  });
};

//News letter Api
export const JOIN_NEWS_LETTER_API = async (emailId) => {
  await api.post(
    '/JoinOurNewsLetter/Add',
    {
      emailId: emailId,
      isSubscribe: 'true',
    },
    {
      headers: { sitetype: '7' },
    }
  );
};
export const getMetaDataOfPage = async (slug) => {
  // If API is not configured, return fallback data
  if (!isApiConfigured) {
    console.log('API not configured, using fallback metadata');
    return getFallbackBlogDetails(slug);
  }

  try {
    const response = await fetch(
      `${URL}/Blog/GetBlogDetailBySlug?slug=${slug}`,
      {
        headers: { sitetype: '7' },
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      if (response.status === 404) {
        console.log('API endpoint not found (404), using fallback metadata');
        return getFallbackBlogDetails(slug);
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Response is not JSON');
    }

    const responseText = await response.text();
    if (!responseText || responseText.trim() === '') {
      throw new Error('Empty response');
    }

      const blogDetails = JSON.parse(responseText);
      return blogDetails;
  } catch (error) {
    console.error('Error fetching blog metadata:', error);
    console.log('Using fallback metadata due to API error');
    return getFallbackBlogDetails(slug);
  }
};

//News letter Api
export const JOIN_NEWS_LETTER_API_GetAll = async (emailId) => {
  try {
  const res = await fetch(`${URL}/JoinOurNewsLetter/GetAll`, {
    method: 'POST',
    headers: { sitetype: '7', 'Content-Type': 'application/json' },
    body: JSON.stringify({ searchString: emailId }),
  });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const contentType = res.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Response is not JSON');
    }

    const responseText = await res.text();
    if (!responseText || responseText.trim() === '') {
      throw new Error('Empty response');
    }

    const data = JSON.parse(responseText);
  return data;
  } catch (error) {
    console.error('Error fetching newsletter data:', error);
    return { data: [] };
  }
};
