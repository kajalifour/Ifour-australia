import axios from 'axios';

const RAW_URL = process.env.NEXT_PUBLIC_API_URL;
const URL = (RAW_URL && typeof RAW_URL === 'string') ? RAW_URL.replace(/\/$/, '') : '';

const api = axios.create({ baseURL: URL || undefined });

// Helper: build full URL or return null when base URL is unavailable
const buildUrl = (path) => {
  if (!URL) return null;
  if (!path.startsWith('/')) return `${URL}/${path}`;
  return `${URL}${path}`;
};

// Safe JSON parser with silent error handling
const safeJsonParse = async (response) => {
  try {
    const contentType = response.headers.get('content-type') || '';
    
    if (!contentType.includes('application/json')) {
      return null;
    }
    
    const text = await response.text();
    return JSON.parse(text);
  } catch {
    return null;
  }
};

// Safe fetch wrapper with silent error handling
const safeFetch = async (url, options = {}, retries = 1) => {
  if (!url) return null; // Guard when API base URL is missing
  for (let attempt = 0; attempt <= retries; attempt++) {
    let timeoutId;
    let controller;
    
    try {
      controller = new AbortController();
      timeoutId = setTimeout(() => controller.abort(), 10000);
      
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          ...options.headers
        }
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        // Don't retry on client errors (4xx)
        if (response.status >= 400 && response.status < 500) {
          return null;
        }
        
        // Retry on server errors (5xx)
        if (attempt < retries) {
          await new Promise(resolve => setTimeout(resolve, (attempt + 1) * 500));
          continue;
        }
        
        return null;
      }
      
      return response;
    } catch {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      // Retry on network errors
      if (attempt < retries) {
        await new Promise(resolve => setTimeout(resolve, (attempt + 1) * 500));
        continue;
      }
      
      return null;
    }
  }
  
  return null;
};

export const getAllBlog = async (catSlug,pageNum) => {
  const path = `/Blog/GetAll?catSlug=${catSlug}&pageSize=5&pageNumber=${pageNum}`;
  const url = buildUrl(path);
  
  try {
    const response = await safeFetch(url, { headers: { sitetype: '9' }, cache: 'no-store' });
    
    if (!response) {
      return { data: { blogList: { resultSet: [], pageCount: 0 } } };
    }
    
    const data = await safeJsonParse(response);
    return data || { data: { blogList: { resultSet: [], pageCount: 0 } } };
  } catch {
    return { data: { blogList: { resultSet: [], pageCount: 0 } } };
  }
};

export const getBlogCategory = async () => {
  const url = buildUrl('/Blog/GetBlogCategory');
  const response = await safeFetch(url, {
    headers: { sitetype: '9' },
    cache: 'no-store',
  });
  
  if (!response) {
    return { data: [] };
  }
  
  const data = await safeJsonParse(response);
  return data || { data: [] };
};

// Alternative category endpoint
export const getBlogCategoriesAlternative = async () => {
  try {
    const url = buildUrl('/Blog/GetCategories');
    const response = await safeFetch(url, {
      headers: { sitetype: '9' },
      cache: 'no-store',
    });
    
    if (!response) {
      return null;
    }
    
    const data = await safeJsonParse(response);
    return data;
  } catch {
    return null;
  }
};

export const getRecentBlogPosts = async () => {
  try {
    const url = buildUrl('/Blog/GetBlogDetailByCatSlug?categorySlug=plusphysio');
    const response = await safeFetch(url, {
      headers: { sitetype: '9' },
      cache: 'no-store',
    });
    
    if (!response) {
      return { data: [] };
    }
    
    const data = await safeJsonParse(response);
    return data || { data: [] };
  } catch {
    return { data: [] };
  }
};

export const getRecentInterviewsPosts = async () => {
  try {
    const url = buildUrl('/Blog/GetBlogDetailByCatSlug?categorySlug=podcast');
    const response = await safeFetch(url, {
      headers: { sitetype: '9' },
      cache: 'no-store',
    });
    
    if (!response) {
      return { data: [] };
    }
    
    const data = await safeJsonParse(response);
    return data || { data: [] };
  } catch {
    return { data: [] };
  }
};

export const getBlogsOfCategory = async (categoryName, pageNum) => {
  const url = buildUrl(`/Blog/GetAll?catSlug=${categoryName}&pageSize=5&pageNumber=${pageNum}`);
  const response = await safeFetch(url,
    { headers: { sitetype: '9' }, cache: 'no-store' }
    );
  
  if (!response) {
    return { notFound: true };
  }
  
  const data = await safeJsonParse(response);
  return data || { notFound: true };
};

//blog Details
export const getBlogDetails = async (slug) => {
  const url = buildUrl(`/Blog/GetBlogDetailBySlug?slug=${slug}`);
  
  try {
    const response = await safeFetch(url, {
      headers: { sitetype: '9' },
      cache: 'no-store',
    });

    if (!response) {
      return {
        data: {
          id: 1,
          title: "Sample Blog Post",
          slug: slug,
          postContent: `
            <div class="blog-details-content">
              <div class="blog-intro">
                <p>This is a sample blog post displayed when the API is unavailable.</p>
              </div>
              <div class="blog-main-content">
                <h2>Welcome to Our Blog</h2>
                <p>This content is shown when the API server is not responding properly. Please check your API configuration or try again later.</p>
                <h3>What you can do:</h3>
                <ul>
                  <li>Check your API URL configuration</li>
                  <li>Verify the API server is running</li>
                  <li>Contact your administrator</li>
                </ul>
              </div>
            </div>
          `,
          fileName: "/assets/images/blog/blog-image1.jpg",
          metaTitle: "Sample Blog Post",
          metaDescription: "A sample blog post for testing purposes",
          metaKeywords: "sample, blog, test",
          createdDate: new Date().toISOString(),
          authorName: "Admin"
        }
      };
    }
    
    const blogDetails = await safeJsonParse(response);
    return blogDetails || { notFound: true };
  } catch {
    return { notFound: true };
  }
};

// form
// Contact form endpoints
// - AddContactForm: used by Contact and Testimonial forms
// - Add: used by Blog form (Reach out to us)
export const CONTACT_FORM_ADD_CONTACT_FORM_API = async (contactData) => {
  if (!URL) return;
  await api.post('/Contactform/AddContactForm', contactData, {
    headers: { sitetype: '9' },
  });
};

export const CONTACT_FORM_ADD_API = async (contactData) => {
  if (!URL) return;
  await api.post('/Contactform/Add', contactData, {
    headers: { sitetype: '9' },
  });
};

export const checkRequestByIp = async (ip) => {
  if (!URL) return { data: null };
  return await api.get(`Contactform/CheckRequestByIp?ipAddress=${ip}`, {
    headers: { sitetype: '9' },
  });
};

//News letter Api
export const JOIN_NEWS_LETTER_API = async (emailId) => {
  if (!URL) return null; // Prevent calling API without base URL
  const response = await api.post(
    '/JoinOurNewsLetter/Add',
    {
      emailId: emailId,
      isSubscribe: true,
    },
    {
      headers: { sitetype: '9' },
    }
  );
  return response?.data ?? null;
};

export const getMetaDataOfPage = async (slug) => {
  const url = buildUrl(`/Blog/GetBlogDetailBySlug?slug=${slug}`);
  const response = await safeFetch(
      url,
      {
      headers: { sitetype: '9' },
        cache: 'no-store',
      }
    );

  if (!response) {
      return { notFound: true };
    }

  const blogDetails = await safeJsonParse(response);
  return blogDetails || { notFound: true };
};

//News letter Api
export const JOIN_NEWS_LETTER_API_GetAll = async (emailId) => {
  if (!URL) return { data: [] };
  const res = await fetch(`${URL}/JoinOurNewsLetter/GetAll`, {
    method: 'POST',
    headers: { sitetype: '9', 'Content-Type': 'application/json' },
    body: JSON.stringify({ searchString: emailId }),
  });
  try {
    const data = await res.json();
    return data;
  } catch {
    return { data: [] };
  }
};

