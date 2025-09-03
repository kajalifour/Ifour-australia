import axios from 'axios';

const URL = 'http://192.168.0.21:3000';

const api = axios.create({ baseURL: URL });



// Axios-based helper to request JSON with clear errors and fallback
const requestJson = async (url, init = {}) => {
  // If API is not configured, return fallback data
  if (!isApiConfigured()) {
    console.warn('API not configured, using fallback data');
    throw new Error('API not configured');
  }

  try {
    const method = (init.method || 'GET').toUpperCase();
    const headers = init.headers || {};

    // Normalize body for axios
    let data;
    if (init.body !== undefined) {
      try {
        data = typeof init.body === 'string' ? JSON.parse(init.body) : init.body;
      } catch {
        data = init.body; // fall back to raw
      }
    }

    const res = await api.request({
      url,
      method,
      headers,
      data,
      validateStatus: () => true,
      timeout: 10000, // 10 second timeout
    });

    const contentType = (res.headers?.['content-type'] || '').toLowerCase();
    const statusOk = res.status >= 200 && res.status < 300;

    // Axios already parsed JSON if header is application/json
    const body = res.data;
    const bodyPreview = typeof body === 'string' ? body.slice(0, 200) : JSON.stringify(body).slice(0, 200);

    if (!statusOk) {
      throw new Error(`HTTP ${res.status} ${res.statusText || ''}. Body: ${bodyPreview}`);
    }

    if (!contentType.includes('application/json')) {
      // If server didn't mark as JSON but axios parsed an object, accept it; otherwise error
      if (typeof body !== 'object') {
        throw new Error(`Non-JSON response. content-type=${contentType}. Body: ${bodyPreview}`);
      }
    }

    return body;
  } catch (error) {
    console.error('API request failed:', error.message);
    throw error;
  }
};

export const getAllBlog = async (catSlug,pageNum) => {
  try {
    const url = `/Blog/GetAll?catSlug=${catSlug}&pageSize=5&pageNumber=${pageNum}`;
    return await requestJson(url, { headers: { sitetype: '7' } });
  } catch (error) {
    console.warn('getAllBlog failed, using fallback data:', error.message);
    return getFallbackBlogData();
  }
};

export const getBlogCategory = async () => {
  try {
    const url = `/Blog/GetBlogCategory`;
    return await requestJson(url, { headers: { sitetype: '7' } });
  } catch (error) {
    console.warn('getBlogCategory failed, using fallback data:', error.message);
    return getFallbackCategories();
  }
};

export const getRecentBlogPosts = async () => {
  try {
    const url = `/Blog/GetBlogDetailByCatSlug?categorySlug=plusphysio`;
    return await requestJson(url, { headers: { sitetype: '7' } });
  } catch (error) {
    console.warn('getRecentBlogPosts failed, using fallback data:', error.message);
    return getFallbackRecentPosts();
  }
};

export const getRecentInterviewsPosts = async () => {
  try {
    const url = `/Blog/GetBlogDetailByCatSlug?categorySlug=podcast`;
    return await requestJson(url, { headers: { sitetype: '7' } });
  } catch (error) {
    console.warn('getRecentInterviewsPosts failed, using fallback data:', error.message);
    return getFallbackRecentPosts();
  }
};

export const getBlogsOfCategory = async (categoryName, pageNum) => {
  try {
    const url = `/Blog/GetAll?catSlug=${categoryName}&pageSize=5&pageNumber=${pageNum}`;
    return await requestJson(url, { headers: { sitetype: '7' } });
  } catch (error) {
    console.warn('getBlogsOfCategory failed, using fallback data:', error.message);
    return getFallbackBlogData();
  }
};

//blog Details
export const getBlogDetails = async (slug) => {
  try {
    const url = `/Blog/GetBlogDetailBySlug?slug=${slug}`;
    return await requestJson(url, { headers: { sitetype: '7' } });
  } catch (error) {
    console.warn('getBlogDetails failed, using fallback data:', error.message);
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
  return await api.get(`/Contactform/CheckRequestByIp?ipAddress=${ip}`, {
    headers: { sitetype: '7' },
  });
};

// Newsletter APIs (axios-based)
export const JOIN_NEWS_LETTER_API = async (emailId) => {
  try {
    if (!isApiConfigured()) {
      console.warn('API not configured, returning success for newsletter');
      return { success: true };
    }
    
    const res = await api.post(
    '/JoinOurNewsLetter/Add',
      { emailId, isSubscribe: 'true' },
      { 
        headers: { sitetype: '7', 'Content-Type': 'application/json', Accept: 'application/json' },
        timeout: 10000
      }
    );
    return res.data ?? { success: true };
  } catch (error) {
    console.warn('Newsletter API failed, returning success:', error.message);
    return { success: true };
  }
};

export const getMetaDataOfPage = async (slug) => {
  try {
    const url = `/Blog/GetBlogDetailBySlug?slug=${slug}`;
    return await requestJson(url, { headers: { sitetype: '7' } });
  } catch (error) {
    console.warn('getMetaDataOfPage failed, using fallback data:', error.message);
    return getFallbackBlogDetails(slug);
  }
};

export const JOIN_NEWS_LETTER_API_GetAll = async (emailId) => {
  return await requestJson('/JoinOurNewsLetter/GetAll', {
    method: 'POST',
    headers: { sitetype: '7', 'Content-Type': 'application/json' },
    body: JSON.stringify({ searchString: emailId }),
  });
};

// -------------------------
// Local fallback generators
// -------------------------
function getFallbackBlogData() {
  return {
    data: {
      blogList: {
        resultSet: [
          {
            id: 'sample-post-1',
            slug: 'sample-post-1',
            postTitle: 'Sample Blog Post',
            postContent: 'This is fallback blog content.',
            authorName: 'Admin',
            publishedDates: '2024-01-01',
            fileName: '/assets/images/blog/blog-image1.jpg',
            isPublished: true,
          },
        ],
        pageCount: 1,
      },
    },
  };
}

function getFallbackCategories() {
  return {
    data: {
      resultSet: [
        { id: 'cat-1', categoryName: 'Technology', categorySlug: 'technology' },
        { id: 'cat-2', categoryName: 'Business', categorySlug: 'business' },
      ],
    },
  };
}

function getFallbackRecentPosts() {
  return {
    data: {
      resultSet: [
        {
          id: 'recent-1',
          slug: 'recent-1',
          postTitle: 'Recent Post (Fallback)',
          postContent: 'Fallback recent post content.',
          authorName: 'Editor',
          publishedDates: '2024-01-02',
          fileName: '/assets/images/blog/blog-image1.jpg',
          isPublished: true,
        },
      ],
    },
  };
}

function getFallbackBlogDetails(slug) {
  return {
    data: {
      id: slug || 'unavailable-post',
      slug: slug || 'unavailable-post',
      postTitle: 'Blog post not available',
      postContent: 'We could not load this blog post right now. Please try again later.',
      authorName: 'System',
      publishedDates: '2024-01-01',
      fileName: '/assets/images/blog/blog-image1.jpg',
      alt: 'Blog image',
      isPublished: false,
    },
  };
}
