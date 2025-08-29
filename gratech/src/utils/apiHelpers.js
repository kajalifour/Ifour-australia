// Helper functions for API operations

/**
 * Safely parse JSON response with error handling
 * @param {Response} response - Fetch response object
 * @returns {Promise<Object>} Parsed JSON data or error object
 */
export const safeJsonParse = async (response) => {
  try {
    // Check if response is ok
    if (!response.ok) {
      if (response.status === 404) {
        console.warn('API endpoint not found (404). Using fallback data.');
      } else {
        console.error(`HTTP error! status: ${response.status}`);
      }
      return { notFound: true };
    }

    // Check if response has content
    const text = await response.text();
    if (!text || text.trim() === '') {
      console.error('Empty response from API');
      return { notFound: true };
    }

    // Try to parse JSON
    try {
      const data = JSON.parse(text);
      return data;
    } catch (jsonError) {
      console.error('Invalid JSON response:', jsonError);
      console.error('Response text:', text);
      return { notFound: true };
    }
  } catch {
    console.error('Error processing response');
    return { notFound: true };
  }
};

/**
 * Validate API URL configuration
 * @param {string} url - API URL to validate
 * @returns {boolean} True if URL is valid
 */
export const validateApiUrl = (url) => {
  if (!url) {
    console.error('API URL is not defined');
    return false;
  }
  
  try {
    new URL(url);
    return true;
  } catch {
    console.error('Invalid API URL:', url);
    return false;
  }
};

/**
 * Create API request options with common headers
 * @param {Object} additionalHeaders - Additional headers to include
 * @returns {Object} Request options object
 */
export const createApiOptions = (additionalHeaders = {}) => {
  return {
    headers: { 
      sitetype: '7',
      ...additionalHeaders 
    },
    cache: 'no-store'
  };
};
