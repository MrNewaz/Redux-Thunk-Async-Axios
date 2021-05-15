import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from './redux/postSlice';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const { lists } = useSelector((state) => state.posts);

  return (
    <div className='App'>
      <h1>{lists.length} posts</h1>
      <ul>
        {lists.map((list) => (
          <li>{list.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
