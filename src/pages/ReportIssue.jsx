import { useState } from 'react';

const ReportIssue = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    category: 'sanitation',
    images: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      images: files
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4">
                Report a Civic Issue
              </h1>
              <p className="text-gray-300 text-lg">
                Help improve your community by reporting issues that need attention.
                Your voice matters in making our city better.
              </p>
            </div>

            {/* Form */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-12 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl opacity-20 blur"></div>
              <div className="relative">
                <div className="space-y-6">
                  <div>
                    <label className="block text-purple-400 font-medium mb-2" htmlFor="category">
                      Issue Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                    >
                      <option value="">Select a category</option>
                      <option value="infrastructure">Infrastructure</option>
                      <option value="sanitation">Sanitation</option>
                      <option value="safety">Public Safety</option>
                      <option value="environment">Environment</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-purple-400 font-medium mb-2" htmlFor="title">
                      Issue Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Brief description of the issue"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-purple-400 font-medium mb-2" htmlFor="description">
                      Detailed Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Provide more details about the issue..."
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-purple-400 font-medium mb-2" htmlFor="location">
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Enter the address or location details"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-purple-400 font-medium mb-2" htmlFor="photos">
                      Upload Photos
                    </label>
                    <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-purple-500 transition-colors">
                      <input
                        type="file"
                        id="photos"
                        name="photos"
                        multiple
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                      <label htmlFor="photos" className="cursor-pointer">
                        <div className="text-gray-300">
                          <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <p className="text-sm">
                            Drag and drop photos here, or click to select
                          </p>
                          <p className="text-xs text-gray-500 mt-2">
                            Maximum 5 photos, each up to 5MB
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg px-6 py-3 font-medium hover:from-purple-500 hover:to-purple-700 transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 shadow-lg hover:shadow-purple-500/25"
                  >
                    Submit Report
                  </button>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">
                  What Happens Next?
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">1.</span>
                    <p>Our AI system verifies and categorizes your report</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">2.</span>
                    <p>Report is logged on the blockchain for transparency</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">3.</span>
                    <p>Relevant authorities are notified automatically</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">4.</span>
                    <p>You receive updates on the progress</p>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">
                  Tips for Effective Reporting
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <p>Be specific about the location and issue</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <p>Include clear, well-lit photos when possible</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <p>Provide context about when you noticed the issue</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <p>Mention if it's a recurring problem</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportIssue;