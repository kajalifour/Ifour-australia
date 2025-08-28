import axios from 'axios';

const URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({ baseURL: URL });

export const getAllBlog = async (pageNum) => {
  let response = await fetch(
    `${URL}/Blog/GetAll?pageSize=5&pageNumber=${pageNum}`,
    { headers: { sitetype: '7' }, cache: 'no-store' }
  );
  response = await response.json();

  return response;
};

export const getBlogCategory = async () => {
  let response = await fetch(`${URL}/Blog/GetBlogCategory`, {
    headers: { sitetype: '7' },
    cache: 'no-store',
  });
  response = await response.json();

  return response;
};

export const getRecentBlogPosts = async () => {
  let response = await fetch(`${URL}/Blog/GetBlogRecentPost`, {
    headers: { sitetype: '7' },
    cache: 'no-store',
  });
  response = await response.json();

  return response;
};

export const getBlogsOfCategory = async (categoryName, pageNum) => {
  try {
    let response = await fetch(
      `${URL}/Blog/GetAll?catSlug=${categoryName}&pageSize=5&pageNumber=${pageNum}`,
      { headers: { sitetype: '7' }, cache: 'no-store' }
      // ,      { cache: 'no-store' }
    );
    if (!response) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    response = await response.json();

    return response;
  } catch (error) {
    console.error('There was a problem with the fetch operation: ', error);
    // throw error;
    return { notFound: true };
  }
};

//blog Details
export const getBlogDetails = async (slug) => {
  try {
    const response = await fetch(
      // `${URL}/Blog/GetBlogDetailBySlug?slug=${slug}&sitetype=7`,
      `${URL}/Blog/GetBlogDetailBySlug?slug=${slug}`,
      {
        headers: { sitetype: '7' },
        cache: 'no-store',
      }
      // ,      { cache: 'no-store' }
    );

    if (!response || !response.ok) {
      console.warn(`API returned status ${response?.status}, using fallback data.`);
      return { notFound: true };
    }

    // Check if response has content
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      console.warn('API response is not JSON, using fallback data.');
      return { notFound: true };
    }

    // Get response text first to check if it's empty
    const responseText = await response.text();
    if (!responseText || responseText.trim() === '') {
      console.warn('API response is empty, using fallback data.');
      return { notFound: true };
    }

    // Try to parse JSON
    try {
      const blogDetails = JSON.parse(responseText);
      return blogDetails;
    } catch (jsonError) {
      console.error('JSON parsing failed:', jsonError);
      return { notFound: true };
    }
  } catch (error) {
    console.error('There was a problem with the fetch operation: ', error);
    return { notFound: true };
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
  try {
    const response = await fetch(
      `${URL}/Blog/GetBlogDetailBySlug?slug=${slug}`,
      {
        headers: { sitetype: '7' },
        cache: 'no-store',
      }
    );

    if (!response || !response.ok) {
      console.warn(`API returned status ${response?.status}, using fallback data.`);
      return { notFound: true };
    }

    // Check if response has content
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      console.warn('API response is not JSON, using fallback data.');
      return { notFound: true };
    }

    // Get response text first to check if it's empty
    const responseText = await response.text();
    if (!responseText || responseText.trim() === '') {
      console.warn('API response is empty, using fallback data.');
      return { notFound: true };
    }

    // Try to parse JSON
    try {
      const blogDetails = JSON.parse(responseText);
      return blogDetails;
    } catch (jsonError) {
      console.error('JSON parsing failed:', jsonError);
      return { notFound: true };
    }
  } catch (error) {
    console.error('There was a problem with the fetch operation: ', error);
    return { notFound: true };
  }
};

//News letter Api
export const JOIN_NEWS_LETTER_API_GetAll = async (emailId) => {
  const res = await fetch(`${URL}/JoinOurNewsLetter/GetAll`, {
    method: 'POST',
    headers: { sitetype: '7', 'Content-Type': 'application/json' },
    body: JSON.stringify({ searchString: emailId }),
  });
  const data = await res.json();
  return data;

  // return Response.json(data);
};
