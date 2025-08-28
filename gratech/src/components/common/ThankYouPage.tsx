"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ThankYouPage: React.FC = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      {/* Main Content */}
      <div
        style={{
          background: 'linear-gradient(135deg, #0f7a95 0%, #00bcd4 50%, #0f7a95 100%)',
          borderRadius: '20px',
          padding: '60px 40px',
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 20px 60px rgba(15, 122, 149, 0.3)',
          border: '3px solid rgba(255, 255, 255, 0.2)',
          position: 'relative'
        }}
      >
        {/* iFour Logo */}
        <div style={{ marginBottom: '40px' }}>
          <Image
            src="/assets/images/logo/logo.svg"
            alt="iFour Logo"
            width={150}
            height={60}
            style={{
              filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)',
              margin: '0 auto',
              display: 'block'
            }}
          />
        </div>

        {/* THANK YOU! Heading with 3D Effect */}
        <h1
          style={{
            fontSize: '56px',
            fontWeight: 900,
            color: '#ffffff',
            marginBottom: '30px',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            textShadow: `
              2px 2px 0px #000000,
              4px 4px 0px rgba(0, 0, 0, 0.3)
            `
          }}
        >
          Thank You!
        </h1>

        {/* Descriptive Text */}
        <p
          style={{
            fontSize: '20px',
            color: '#ffffff',
            marginBottom: '50px',
            lineHeight: 1.6,
            fontWeight: 400,
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
          }}
        >
          We appreciate your response. We'll reach out to you shortly.
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '25px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          {/* Back to Home Button */}
          <Link
            href="/"
            style={{
              background: '#ffffff',
              color: '#0f7a95',
              padding: '18px 35px',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '18px',
              boxShadow: '0 4px 15px rgba(255, 255, 255, 0.3)',
              transition: 'all 0.3s ease',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              cursor: 'pointer',
              minWidth: '180px',
              display: 'inline-block',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.4)';
              e.currentTarget.style.background = '#f8f9fa';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.background = '#ffffff';
            }}
          >
            Back to Home
          </Link>

          {/* Send Another Message Button */}
          <Link
            href="/contact"
            style={{
              background: '#000000',
              color: '#ffffff',
              padding: '18px 35px',
              borderRadius: '12px',
              textDecoration: 'none',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              fontWeight: 600,
              fontSize: '18px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              minWidth: '180px',
              display: 'inline-block',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.4)';
              e.currentTarget.style.background = '#1a1a1a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
              e.currentTarget.style.background = '#000000';
            }}
          >
            Send Another Message
          </Link>
        </div>

        {/* Decorative Elements */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            width: '12px',
            height: '12px',
            background: '#ffffff',
            borderRadius: '50%',
            opacity: 0.8
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '12px',
            height: '12px',
            background: '#ffffff',
            borderRadius: '50%',
            opacity: 0.8
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            width: '12px',
            height: '12px',
            background: '#ffffff',
            borderRadius: '50%',
            opacity: 0.8
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            width: '12px',
            height: '12px',
            background: '#ffffff',
            borderRadius: '50%',
            opacity: 0.8
          }}
        />
      </div>
    </div>
  );
};

export default ThankYouPage;
