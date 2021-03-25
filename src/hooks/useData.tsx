import * as React from 'react';

const useData = (url: string) => {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    const getData = async () => {
      const result = await fetch(url).then((res) => res.json());
      setData(result);
    };
    getData();
  }, [url]);

  return { data };
};

export default useData;
