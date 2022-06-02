/**
 * memo: Luu cac gia tri qua mot bien ben ngoai.
 * Su dung useCallback phai di kem voi memo
 */

import { useEffect, useState } from 'react';
const tabs = ['posts', 'comments', 'albums'];

function Content() {
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState('posts');
  const [moveTop, setMoveTop] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${type}`);
      const postsJson = await response.json();

      setPosts(postsJson);
    };
    fetchPosts().catch(console.err);
  }, [type]);

  useEffect(() => {
    const handleScrollEvent = () => {
      setMoveTop(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  return (
    <>
      <h1>Content Section</h1>
      {tabs.map((tab) => (
        <button key={tab} onClick={() => setType(tab)}>
          {tab}
        </button>
      ))}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title ?? post.name}</li>
        ))}
      </ul>
      {moveTop && (
        <button style={{ position: 'fixed', bottom: 20, right: 20 }}> Move to top</button>
      )}
    </>
  );
}
export default Content;
