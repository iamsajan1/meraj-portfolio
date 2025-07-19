import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
 
export const metadata = {
  title: "Contact | Ahmad FX Team",
  description: "Reach out to Ahmad FX for investment inquiries or partnerships.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Ahmad FX"
        description="Have a question about our investment plans? Fill out the form below and we’ll get back to you within 24 hours."
      />
      <Contact />
    </>
  );
};

export default ContactPage; 
