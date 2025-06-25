import ReportForm from '../components/ReportForm';
import InfoCard from '../components/InfoCard';

const ReportIssue = () => {
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
            <ReportForm />

            {/* Additional Information */}
            <div className="grid md:grid-cols-2 gap-8">
              <InfoCard title="What Happens Next?">
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
              </InfoCard>

              <InfoCard title="Tips for Effective Reporting">
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
              </InfoCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportIssue;