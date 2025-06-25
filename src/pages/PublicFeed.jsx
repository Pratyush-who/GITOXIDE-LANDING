import { useState, useEffect } from 'react';

const staticIssues = [
  {
    id: 1,
    title: 'Broken Street Light',
    category: 'electricity',
    location: '123 Main St',
    description: 'Street light has been out for 3 days, creating safety concerns at night.',
    status: 'pending',
    urgency: 'high',
    date: '2024-03-15',
    votes: 15,
    images: ['https://images.unsplash.com/photo-1617195920950-1145bf9a9c72?q=80&w=500&auto=format&fit=crop']
  },
  {
    id: 2,
    title: 'Garbage Collection Needed',
    category: 'sanitation',
    location: 'Park Avenue',
    description: 'Overflowing garbage bins near the park entrance. Needs immediate attention.',
    status: 'in-progress',
    urgency: 'medium',
    date: '2024-03-14',
    votes: 8,
    images: ['https://images.unsplash.com/photo-1605600659908-0ef719419d41?q=80&w=500&auto=format&fit=crop']
  },
  {
    id: 3,
    title: 'Water Leakage',
    category: 'water',
    location: 'Downtown Area',
    description: 'Major water leak from a broken pipe causing street flooding.',
    status: 'resolved',
    urgency: 'high',
    date: '2024-03-13',
    votes: 23,
    images: ['https://images.unsplash.com/photo-1584466977773-e625c37cdd50?q=80&w=500&auto=format&fit=crop']
  }
];

const PublicFeed = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIssues = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('http://localhost:5000/api/issues');
        if (!res.ok) throw new Error('Failed to fetch issues');
        const data = await res.json();
        setIssues(data);
      } catch (err) {
        setError(err.message || 'Error fetching issues');
      } finally {
        setLoading(false);
      }
    };
    fetchIssues();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'text-yellow-400';
      case 'in-progress':
        return 'text-blue-400';
      case 'resolved':
        return 'text-green-400';
      default:
        return 'text-gray-400';
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'low':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  const renderCard = (issue) => (
    <div key={issue._id || issue.id} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10">
      {issue.images && issue.images[0] && (
        <div className="relative h-48">
          <img
            src={issue.images[0]}
            alt={issue.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-white">{issue.title}</h3>
          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getUrgencyColor(issue.urgency)} text-white`}>
            {issue.urgency || 'normal'}
          </span>
        </div>
        <p className="text-gray-300 text-sm mb-4">{issue.description}</p>
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {issue.location}
        </div>
        <div className="flex justify-between items-center">
          <span className={`text-sm font-medium ${getStatusColor(issue.status)}`}>
            {issue.status || 'pending'}
          </span>
          <div className="flex items-center">
            <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
              {issue.votes || 0}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 pt-20 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-12">
          Public Issue Feed
        </h1>

        {/* Filter Section */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Search issues..."
              className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400"
            />
            <select className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400">
              <option value="">All Categories</option>
              <option value="sanitation">Sanitation</option>
              <option value="water">Water</option>
              <option value="electricity">Electricity</option>
              <option value="roads">Roads</option>
            </select>
            <select className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400">
              <option value="">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="resolved">Resolved</option>
            </select>
            <select className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400">
              <option value="">Sort By</option>
              <option value="date">Date</option>
              <option value="votes">Votes</option>
              <option value="urgency">Urgency</option>
            </select>
          </div>
        </div>

        {/* Loading/Error State */}
        {loading && (
          <div className="text-center text-purple-400 text-lg py-12">Loading issues...</div>
        )}
        {error && (
          <div className="text-center text-red-400 text-lg py-12">{error}</div>
        )}

        {/* Issues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Render static cards first */}
          {staticIssues.map(renderCard)}
          {/* Then render fetched issues */}
          {!loading && !error && issues.map(renderCard)}
        </div>
      </div>
    </div>
  );
};

export default PublicFeed; 