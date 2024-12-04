const CallToAction = () => {
    return (
      <section className="py-10 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-6">
            Let us help you unlock your business’s full potential with our strategic consulting services.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-yellow-400 px-6 py-3 text-lg font-semibold hover:bg-yellow-500 rounded-md transition">
              Contact Us
            </button>
            <button className="bg-white text-blue-600 px-6 py-3 text-lg font-semibold border-2 border-white hover:bg-blue-500 hover:text-white rounded-md transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default CallToAction;
  