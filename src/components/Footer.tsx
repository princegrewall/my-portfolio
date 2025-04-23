
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-gradient text-2xl font-bold">Portfolio</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground">
              &copy; {currentYear} Your Name. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
