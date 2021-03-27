import * as React from 'react';

export const useHover = () => {
  const [value, setValue] = React.useState(false);

  const ref = React.useRef<any>(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  // @ts-ignore
  React.useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);

      return () => {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, [ref.current]);

  return [ref, value];
};
