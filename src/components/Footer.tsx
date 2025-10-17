const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} JN Entreprenad. Alla rättigheter förbehållna.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
