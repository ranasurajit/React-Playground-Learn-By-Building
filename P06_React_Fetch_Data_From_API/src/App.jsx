import { useEffect, useState } from 'react';
import CardContainer from './components/CardContainer';
import Navigation from './components/Navigation';
import Loader from './components/Loader';

const App = () => {
  const API_URL = 'https://jsonplaceholder.typicode.com/posts';

  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoader(true);
      try {
        const response = await fetch(API_URL, {
          method: 'GET'
        });
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoader(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Navigation />
      {
        loader ? <Loader /> : <CardContainer posts={posts} />
      }
    </>
  );
};

export default App;
