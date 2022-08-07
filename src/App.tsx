import React, { useCallback, useEffect, useRef, useState } from 'react';
import { styled } from '@mui/material/styles';
import './App.css';
import Header from './components/Header';
import useFetch from './hooks/useFetch';

export type CommentState = {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
};

/* 
  React Hook useEffect has an unnecessary dependency: 'fetchTargetRef.current'. Either exclude it or remove the dependency array. Mutable values like 'fetchTargetRef.current' aren't valid dependencies because mutating them doesn't re-render the component
  'fetchTargetRef.current'와 같은 변환 가능한 값은 변환해도 구성 요소가 다시 렌더링되지 않으므로 유효한 종속성이 아닙니다.
*/

function App() {
  const [page, setPage] = useState<number>(1);
  const [comments, loading] = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${page}/comments`
  );
  const fetchTargetRef = useRef<HTMLDivElement>(null);

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const [target] = entries;
    console.log(target);
    if (target.isIntersecting) {
      setPage((prePage) => prePage + 1);
    }
  }, []);

  useEffect(() => {
    if (fetchTargetRef.current === null) return;
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    observer.observe(fetchTargetRef.current);
  }, [handleObserver, loading]);

  return (
    <AppContainer>
      <h1 className='blind'>comments</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <main className='main'>
          {comments.length > 0 &&
            comments.map((comment) => {
              return (
                <section className='section' key={comment.id}>
                  <h2 className='commentTitle'>{comment.name}</h2>
                  <div className='bodyWrap'>
                    <span className='email'>{comment.email}</span>
                    <p className='context'>{comment.body}</p>
                  </div>
                </section>
              );
            })}
          <div ref={fetchTargetRef} className='targetScroll'></div>
        </main>
      )}
    </AppContainer>
  );
}

export default App;

const AppContainer = styled('div')`
  max-width: 1024px;
  position: relative;
  .main {
    width: 100%;
    .section {
      height: 500px;
      padding: 10px;
      border: 1px solid #e2e2e2;
    }

    .targetScroll {
      position: absolute;
      bottom: 10%;
      background-color: red;
      height: 20px;
      width: 100%;
    }
  }
`;
