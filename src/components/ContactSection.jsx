import { Linkedin, Mail, MapPin, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const subject = encodeURIComponent(`New message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    // Open email client
    window.location.href = `mailto:pragyanshu.rai.work@email.com?subject=${subject}&body=${body}`;

    setIsSubmitting(false);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Contact Information
            </h3>

            <div className="space-y-6 flex flex-col items-center">
              {/* Email */}
              <div className="flex flex-col items-center space-y-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:pragyanshu.rai.work@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    pragyanshu.rai.work@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex flex-col items-center space-y-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center">
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Telangana, India</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-8 text-center">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/pragyanshu-rai/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your name here..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Drop in a text..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
