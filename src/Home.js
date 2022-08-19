import QuoteList from './Quotelist';
import Quotelist from './Quotelist';
import useFetch from './useFetch';

const Home = () => {

  const { data: blogs, setData, isPending, error } = useFetch('https://62b1c2f4196a9e98703cb1fe.mockapi.io/blogs');

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id)
  //   setData(newBlogs);
  // }


  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <QuoteList blogs={blogs} title="All quotes" setData={setData} />}
    </div>
  );
}

export default Home;    