import axios from 'axios';

const URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({ baseURL: URL });

export const getAllBlog = async (catSlug,pageNum) => {
  let response = await fetch(
    `${URL}/Blog/GetAll?catSlug=${catSlug}&pageSize=5&pageNumber=${pageNum}`,
    { headers: { sitetype: '9' }, cache: 'no-store' }
  );
  response = await response.json();

  return response;
};

export const getBlogCategory = async () => {
  let response = await fetch(`${URL}/Blog/GetBlogCategory`, {
    headers: { sitetype: '9' },
    cache: 'no-store',
  });
  response = await response.json();

  return response;
};

export const getRecentBlogPosts = async () => {
  let response = await fetch(`${URL}/Blog/GetBlogDetailByCatSlug?categorySlug=plusphysio`, {
    headers: { sitetype: '9' },
    cache: 'no-store',
  });
  response = await response.json();

  return response;
};

export const getRecentInterviewsPosts = async () => {
  let response = await fetch(`${URL}/Blog/GetBlogDetailByCatSlug?categorySlug=podcast`, {
    headers: { sitetype: '9' },
    cache: 'no-store',
  });
  response = await response.json();

  return response;
};

export const getBlogsOfCategory = async (categoryName, pageNum) => {
  try {
    let response = await fetch(
      `${URL}/Blog/GetAll?catSlug=${categoryName}&pageSize=5&pageNumber=${pageNum}`,
      { headers: { sitetype: '9' }, cache: 'no-store' }
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
      // `${URL}/Blog/GetBlogDetailBySlug?slug=${slug}&sitetype=9`,
      `${URL}/Blog/GetBlogDetailBySlug?slug=${slug}`,
      {
        headers: { sitetype: '9' },
        cache: 'no-store',
      }
      // ,      { cache: 'no-store' }
    );

    if (!response) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const blogDetails = await response.json();
    return blogDetails;
  } catch (error) {
    console.error('There was a problem with the fetch operation: ', error);
    return { notFound: true };
  }
};

// form
export const CONTACT_FORM_API = async (contactData) => {
  await api.post('/Contactform/Add', contactData, {
    headers: { sitetype: '9' },
  });
};

export const checkRequestByIp = async (ip) => {
  return await api.get(`Contactform/CheckRequestByIp?ipAddress=${ip}`, {
    headers: { sitetype: '9' },
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
      headers: { sitetype: '9' },
    }
  );
};

export const getMetaDataOfPage = async (slug) => {
  try {
    const response = await fetch(
      `${URL}/Blog/GetBlogDetailBySlug?slug=${slug}`,
      {
        headers: { sitetype: '9' },
        cache: 'no-store',
      }
    );

    if (!response) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const blogDetails = await response.json();
    return blogDetails;
  } catch (error) {
    console.error('There was a problem with the fetch operation: ', error);
    // throw error;
    return { notFound: true };
  }
};

//News letter Api
export const JOIN_NEWS_LETTER_API_GetAll = async (emailId) => {
  const res = await fetch(`${URL}/JoinOurNewsLetter/GetAll`, {
    method: 'POST',
    headers: { sitetype: '9', 'Content-Type': 'application/json' },
    body: JSON.stringify({ searchString: emailId }),
  });
  const data = await res.json();
  return data;

  // return Response.json(data);
};
