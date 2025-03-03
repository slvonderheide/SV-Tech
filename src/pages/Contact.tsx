import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validateField = (name: string, value: string) => {
    if (name === "name" && !value.trim()) {
      return "Name is required";
    }
    if (name === "email" && (!value.trim() || !/\S+@\S+\.\S+/.test(value))) {
      return "Valid email is required";
    }
    if (name === "message" && !value.trim()) {
      return "Message cannot be empty";
    }
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validName = validateField("name", formData.name);
    const validEmail = validateField("email", formData.email);
    const validMessage = validateField("message", formData.message);

    if (!validName && !validEmail && !validMessage) {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form after submission
      setErrors({}); // Clear errors after successful submission
    } else {
      setErrors({
        name: validName,
        email: validEmail,
        message: validMessage,
      });
    }
  };

  // Check if any errors exist
  const isFormValid = !errors.name && !errors.email && !errors.message && formData.name && formData.email && formData.message;

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>

        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </label>

        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
