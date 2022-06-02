/**
 * memo: Luu cac gia tri qua mot bien ben ngoai.
 * Su dung useCallback phai di kem voi memo
 */

import { useEffect, useState } from 'react';
const tabs = ['posts', 'comments', 'albums'];

function Content() {
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState('posts');

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${type}`);
      const postsJson = await response.json();

      setPosts(postsJson);
    };
    fetchPosts().catch(console.err);
  }, [type]);

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
    </>
  );
}
export default Content;
