"use client";

import React, { useEffect, useState } from 'react';

const NewsletterSection = () => {
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState<string>('');
	const [submitted, setSubmitted] = useState<'idle' | 'success' | 'error'>('idle');
	const [isMobile, setIsMobile] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!emailRegex.test(email.trim())) {
			setEmailError('Please enter a valid email address.');
			return;
		}
		try {
			console.log('Newsletter subscription:', email);
			setEmail('');
			setEmailError('');
			setSubmitted('success');
		} catch {
			setSubmitted('error');
		}
	};

	useEffect(() => {
		if (submitted !== 'idle') {
			const timer = setTimeout(() => setSubmitted('idle'), 4000);
			return () => clearTimeout(timer);
		}
	}, [submitted]);

	// Detect mobile screen size
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};
		
		checkMobile();
		window.addEventListener('resize', checkMobile);
		
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	const ACCENT = '#0f7a95';
	const INPUT_HEIGHT = 54; // keep input/button heights in sync
	const RADIUS = 28;

	return (
		<section className="newsletter-section pt-80 pb-80" style={{
			backgroundImage: 'linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 50%, #f0f8ff 100%)',
			position: 'relative',
			overflow: 'hidden'
		}}>
			{/* dotted background */}
			<div style={{
				position: 'absolute', inset: 0,
				backgroundImage: 'radial-gradient(circle, #0f7a95 1px, transparent 1px)',
				backgroundSize: '20px 20px', 
				opacity: 0.08, 
				pointerEvents: 'none'
			}} />

			<div className="container">
				<div className="row align-items-center justify-content-between" style={{ rowGap: 24 }}>
					<div className="col-lg-6">
						<h3 style={{
							color: ACCENT, fontSize: '2.2rem', fontWeight: 700, lineHeight: 1.2, marginBottom: 12
						}}>
							Subscribe to our{' '}
							<span style={{ color: '#000' }}>Newsletter</span>
						</h3>
					</div>
					<div className="col-lg-6">
						{/* right aligned form with max width or confirmation box */}
						<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
							{submitted === 'success' ? (
								<div style={{
									width: '100%',
									maxWidth: 560,
									background: '#e6e6e6',
									borderRadius: 8,
									padding: '14px 18px',
									minHeight: INPUT_HEIGHT,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									color: '#111',
									fontWeight: 600
								}}>
									Thank you! Your submission has been received!
								</div>
							) : (
								<form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: 560 }} noValidate>
									{isMobile ? (
										/* Mobile layout - stacked */
										<div style={{ 
											display: 'flex', 
											flexDirection: 'column', 
											gap: '12px',
											width: '100%'
										}}>
											<input
												type="email"
												value={email}
												onChange={(e) => { setEmail(e.target.value); if (emailError) setEmailError(''); }}
												placeholder="Enter your email here"
												required
												style={{
													height: INPUT_HEIGHT,
													width: '100%',
													padding: '0 18px',
													borderTop: `2px solid ${emailError ? '#b00020' : ACCENT}`,
													borderRight: `2px solid ${emailError ? '#b00020' : ACCENT}`,
													borderBottom: `2px solid ${emailError ? '#b00020' : ACCENT}`,
													borderLeft: `2px solid ${emailError ? '#b00020' : ACCENT}`,
													borderRadius: RADIUS,
													outline: 'none',
													backgroundColor: '#fff',
													color: '#333',
													boxShadow: '0 6px 18px rgba(15, 122, 149, 0.12)'
												}}
											/>
											<button
												type="submit"
												style={{
													height: INPUT_HEIGHT,
													width: '100%',
													backgroundColor: ACCENT,
													color: '#fff',
													borderTop: `2px solid ${ACCENT}`,
													borderRight: `2px solid ${ACCENT}`,
													borderBottom: `2px solid ${ACCENT}`,
													borderLeft: `2px solid ${ACCENT}`,
													borderRadius: RADIUS,
													fontSize: '1rem',
													fontWeight: 700,
													cursor: 'pointer',
													boxShadow: '0 6px 18px rgba(15, 122, 149, 0.18)'
												}}
												onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0a5a6a')}
												onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
											>
												Send now
											</button>
										</div>
									) : (
										/* Desktop layout - side by side */
										<div style={{ display: 'flex', alignItems: 'center' }}>
											<input
												type="email"
												value={email}
												onChange={(e) => { setEmail(e.target.value); if (emailError) setEmailError(''); }}
												placeholder="Enter your email here"
												required
												style={{
													height: INPUT_HEIGHT,
													flex: 1,
													padding: '0 18px',
													borderTop: `2px solid ${emailError ? '#b00020' : ACCENT}`,
													borderRight: 'none',
													borderBottom: `2px solid ${emailError ? '#b00020' : ACCENT}`,
													borderLeft: `2px solid ${emailError ? '#b00020' : ACCENT}`,
													borderTopLeftRadius: RADIUS,
													borderBottomLeftRadius: RADIUS,
													borderTopRightRadius: 0,
													borderBottomRightRadius: 0,
													outline: 'none',
													backgroundColor: '#fff',
													color: '#333',
													boxShadow: '0 6px 18px rgba(15, 122, 149, 0.12)'
												}}
											/>
											<button
												type="submit"
												style={{
													height: INPUT_HEIGHT,
													padding: '0 28px',
													backgroundColor: ACCENT,
													color: '#fff',
													borderTop: `2px solid ${ACCENT}`,
													borderRight: `2px solid ${ACCENT}`,
													borderBottom: `2px solid ${ACCENT}`,
													borderLeft: 'none',
													borderTopRightRadius: RADIUS,
													borderBottomRightRadius: RADIUS,
													borderTopLeftRadius: 0,
													borderBottomLeftRadius: 0,
													fontSize: '1rem',
													fontWeight: 700,
													whiteSpace: 'nowrap',
													cursor: 'pointer',
													boxShadow: '0 6px 18px rgba(15, 122, 149, 0.18)'
												}}
												onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0a5a6a')}
												onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
											>
												Send now
											</button>
										</div>
									)}
									
									{emailError && (
										<div aria-live="polite" style={{ marginTop: 10, color: '#b00020', fontSize: '.92rem', fontWeight: 600, textAlign: 'right' }}>
											{emailError}
										</div>
									)}
								</form>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NewsletterSection;
