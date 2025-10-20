import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }

    setIsSubmitting(false);
  };

  return (
    <main data-testid="test-contact-page" className="contact-page">
      <section className="contact-section" aria-labelledby="contact-heading">
        <h1 id="contact-heading">Contact Us</h1>

        {success && (
          <div
            className="success-message"
            data-testid="test-contact-success"
            role="alert"
            aria-live="polite"
          >
            🎉 Thank you for your message! We'll get back to you soon.
          </div>
        )}

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`form-input ${errors.name ? "error" : ""}`}
              aria-describedby={errors.name ? "name-error" : undefined}
              data-testid="test-contact-name"
              required
            />
            {errors.name && (
              <div
                id="name-error"
                className="error-message"
                data-testid="test-contact-error-name"
                role="alert"
              >
                {errors.name}
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? "error" : ""}`}
              aria-describedby={errors.email ? "email-error" : undefined}
              data-testid="test-contact-email"
              required
            />
            {errors.email && (
              <div
                id="email-error"
                className="error-message"
                data-testid="test-contact-error-email"
                role="alert"
              >
                {errors.email}
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`form-input ${errors.subject ? "error" : ""}`}
              aria-describedby={errors.subject ? "subject-error" : undefined}
              data-testid="test-contact-subject"
              required
            />
            {errors.subject && (
              <div
                id="subject-error"
                className="error-message"
                data-testid="test-contact-error-subject"
                role="alert"
              >
                {errors.subject}
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className={`form-textarea ${errors.message ? "error" : ""}`}
              aria-describedby={errors.message ? "message-error" : undefined}
              data-testid="test-contact-message"
              required
            />
            {errors.message && (
              <div
                id="message-error"
                className="error-message"
                data-testid="test-contact-error-message"
                role="alert"
              >
                {errors.message}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
            data-testid="test-contact-submit"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
