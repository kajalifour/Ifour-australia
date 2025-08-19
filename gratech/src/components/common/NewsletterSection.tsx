"use client";

import React, { useState } from 'react';

const NewsletterSection = () => {
	const [email, setEmail] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Newsletter subscription:', email);
		setEmail('');
	};

	const ACCENT = '#0f7a95';
	const INPUT_HEIGHT = 54; // keep input/button heights in sync
	const RADIUS = 28;

	return (
		<section className="newsletter-section pt-80 pb-80" style={{
			background: 'linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 50%, #f0f8ff 100%)',
			position: 'relative',
			overflow: 'hidden'
		}}>
			{/* dotted background */}
			<div style={{
				position: 'absolute', inset: 0,
				backgroundImage: 'radial-gradient(circle, #0f7a95 1px, transparent 1px)',
				backgroundSize: '20px 20px', opacity: 0.08, pointerEvents: 'none'
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
						{/* right aligned form with max width */}
						<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
							<form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: 560 }}>
								<div style={{ display: 'flex', alignItems: 'center' }}>
									{/* Input pill - right corners squared to merge */}
									<input
										type="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										placeholder="Enter your email here"
										required
										style={{
											height: INPUT_HEIGHT,
											flex: 1,
											padding: '0 18px',
											border: `2px solid ${ACCENT}`,
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
									{/* Button - shares border, no left border to avoid double line */}
									<button
										type="submit"
										style={{
											height: INPUT_HEIGHT,
											padding: '0 28px',
											backgroundColor: ACCENT,
											color: '#fff',
											border: `2px solid ${ACCENT}`,
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
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NewsletterSection;
