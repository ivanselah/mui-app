import { useCallback, useEffect, useState } from 'react';
import { CommentState } from '../App';

const useFetch = (url: string): [CommentState[], boolean] => {
  const [comments, setComments] = useState<CommentState[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getFetch = useCallback((url: string) => {
    const isExisting = (preComments: CommentState[], id: number): boolean => {
      return Boolean(preComments.find((comments) => comments.id === id));
    };
    fetch(url)
      .then((res) => res.json())
      .then((response: CommentState[]) => {
        setComments((preComments) => {
          if (isExisting(preComments, response[0].id)) return preComments;
          return [...preComments, ...response];
        });
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    getFetch(url);
  }, [url, getFetch]);

  return [comments, loading];
};

export default useFetch;
