// Environment configuration
export const config = {
  // Use a more reliable fallback or disable API calls when not available
  API_URL: process.env.NEXT_PUBLIC_API_URL || null,
  SITE_TYPE: '9',
  // Add other configuration variables as needed
};

// Validate required environment variables
export const validateConfig = () => {
  const requiredVars = ['API_URL'];
  const missing = requiredVars.filter(varName => !config[varName]);
  
  if (missing.length > 0) {
    console.warn(`Missing environment variables: ${missing.join(', ')}. Using fallback values.`);
  }
  
  return config;
};
