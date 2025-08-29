"use client";

import { useRouter } from 'next/navigation';

const CTABox = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/node-js-development-company');
  };

  return (
    <div 
      style={{ 
        marginTop: '40px',
        padding: '30px',
        background: 'linear-gradient(135deg, #f0fcff 0%, #e6f7ff 100%)',
        border: '3px solid #4dc1f9',
        borderRadius: '16px',
        position: 'relative' as const,
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(77, 193, 249, 0.15)',
        transform: 'translateY(0)',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(77, 193, 249, 0.25)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(77, 193, 249, 0.15)';
      }}
      onClick={handleClick}
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

export default CTABox;
