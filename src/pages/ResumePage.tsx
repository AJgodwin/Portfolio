const ResumePage = () => {
  const pdfUrl = `${import.meta.env.BASE_URL}resume/Amal_Godwin_Resume.pdf`;
  return (
    <section className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Resume</span>
        </h1>
        <div className="bg-gray-900/50 border border-blue-500/20 rounded-xl overflow-hidden">
          <object data={pdfUrl} type="application/pdf" className="w-full" style={{ height: '80vh' }}>
            <div className="p-6 text-gray-300">
              <p>Unable to display PDF inline. You can download it instead:</p>
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block px-4 py-2 rounded-lg bg-blue-600 text-white">Open Resume</a>
            </div>
          </object>
        </div>
      </div>
    </section>
  );
};

export default ResumePage;
