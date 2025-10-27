import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const BlogSection = () => {
  const blogPosts = [
    {
      title: 'Consumer Protection Bill 2018',
      excerpt: 'It has been interesting to see the drastic change that has taken place since the coming up f the act back in the year 1986 which had once stated the ground of formation to be a General relief.',
    },
    {
      title: 'Solution to Misuse of 498A by Supreme Court of India',
      excerpt: 'In the Judgement of Rajesh Sharma and ors vs State of UP , decided by the Apex Court in 2017 , keeping in mind the various hardships as well as litigants..',
    },
    {
      title: 'Builder-buyer agreement must be considered as flat allotment date',
      excerpt: 'Homebuyers have welcomed the order saying that the apex court has restored the sanctity of the builder-buyer agreement and the developers\' stand of linking..',
    },
    {
      title: 'Dismiss in Default a Relief under CPC for Pendency',
      excerpt: 'Once the suit gets dismissed for default the remedy plaintiff has is to file a restoration application of the suit for setting aside dismissal under Order 9 Rule 9, showing sufficient cause for his previous..',
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-amber-500 text-slate-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Legal Insights
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Latest Blogs
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="h-full">
              <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white group border-l-4 border-l-amber-500 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-slate-800 group-hover:text-amber-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center ml-2">
                    <span className="text-amber-600 text-sm">📰</span>
                  </div>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed text-sm flex-grow">
                  {post.excerpt}
                </p>
                <Button variant="outline" size="sm" className="group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 w-full mt-auto">
                  Read More
                </Button>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
