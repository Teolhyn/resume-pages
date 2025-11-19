interface BlogPostProps {
  title: string;
  date: Date;
  content: React.ReactNode;
  author: string;
}

function BlogPost({ title, date, content, author }: BlogPostProps) {
  return (
    <div className='max-w-xl mx-3 xl:mx-auto font-dmsans tracking-tight text-black dark:text-white'>
      <div className='max-w-7xl mx-auto pt-12'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold mb-4'>{title}</h1>
          <div className='text-sm text-gray-600 dark:text-gray-400 mb-8'>
            {date.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        </div>

        <div className='mb-8'>
          {content}
        </div>

        <div className='border-t border-gray-200 dark:border-gray-700 pt-6'>
          <div className='text-sm'>
            By <span className='font-medium'>{author}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
