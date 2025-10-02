/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import { JOIN_NEWS_LETTER_API, JOIN_NEWS_LETTER_API_GetAll } from "@/utils/api";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string>("");
  const [submitted, setSubmitted] = useState<"idle" | "success" | "error">("idle");
  const [isMobile, setIsMobile] = useState(false);
  const [isNewsLetter, setIsNewsLetter] = useState(false);
  const [oldSubscriber, setOldSubscriber] = useState<any>(null);
  const [alreadyJoined, setAlreadyJoined] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!emailRegex.test(email.trim())) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    try {
      const submittedEmail = email.trim().toLowerCase();

      // Pre-check to see if this email already exists
      const preLookup = await JOIN_NEWS_LETTER_API_GetAll(submittedEmail);
      const preTotal = (preLookup?.data?.recordsTotal ??
        (Array.isArray(preLookup?.data) ? preLookup.data.length : 0)) as number;
      const preExists = (preTotal || 0) > 0;
      if (preExists) {
        setOldSubscriber(preLookup);
        setAlreadyJoined(true);
        setIsNewsLetter(true);
        setSubmitted("success");
        return;
      }

      // Not existing → create
      await JOIN_NEWS_LETTER_API(submittedEmail);

      // Fetch the created record to get ID
      const postLookup = await JOIN_NEWS_LETTER_API_GetAll(submittedEmail);
      setOldSubscriber(postLookup);
      setAlreadyJoined(false);
      setIsNewsLetter(true);

      setEmail("");
      setEmailError("");
      setSubmitted("success");
    } catch {
      setSubmitted("error");
    }
  };

  useEffect(() => {
    if (submitted !== "idle") {
      const timer = setTimeout(() => setSubmitted("idle"), 4000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="newsletter-section pt-80 pb-80">
      {/* dotted background */}
      <div className="newsletter-bg-overlay" />

      <div className="container">
        <div className="row align-items-center justify-content-between newsletter-row">
          <div className="col-lg-6">
            <h3 className="newsletter-heading">
              Subscribe to our <span className="black-color">Newsletter</span>
            </h3>
          </div>
          <div className="col-lg-6">
            {/* right aligned form with max width or confirmation box */}
            <div className="newsletter-form-wrapper">
              {submitted === "success" && isNewsLetter ? (
                <div className="newsletter-success">
                  {alreadyJoined ? (
										<p className="m-0">You have already joined</p>
									) : (
										<p className="m-0 text-center">
											Congratulations. You have subscribed to our newsletter successfully.
										</p>
									)}
									{(() => {
										const createdId = oldSubscriber?.data?.[0]?.id;
										return createdId ? (
											<span className="ml-10 font-weight-bold">(ID: {createdId})</span>
										) : null;
									})()}
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="newsletter-form"
                  noValidate
                >
                  {isMobile ? (
                    /* Mobile layout - stacked */
                    <div className="newsletter-form-mobile">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (emailError) setEmailError("");
                        }}
                        placeholder="Enter your email here"
                        required
                        className={`newsletter-input ${
                          emailError ? "error" : ""
                        }`}
                      />
                      <button type="submit" className="newsletter-btn">
                        Send now
                      </button>
                    </div>
                  ) : (
                    /* Desktop layout - side by side */
                    <div className="newsletter-form-desktop">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (emailError) setEmailError("");
                        }}
                        placeholder="Enter your email here"
                        required
                        className={`newsletter-input ${
                          emailError ? "error" : ""
                        }`}
                      />
                      <button type="submit" className="newsletter-btn">
                        Send now
                      </button>
                    </div>
                  )}

                  {emailError && (
                    <div aria-live="polite" className="newsletter-error">
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
