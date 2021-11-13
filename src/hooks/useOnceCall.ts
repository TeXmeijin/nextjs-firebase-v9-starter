import React from 'react';

/**
 * React 18以降では単純にuseEffectを使うと、内容が2回以上実行されることがある。
 * @param cb
 * @param condition
 */
export function useOnceCall(cb: () => unknown, condition = true) {
  const isCalledRef = React.useRef(false);

  React.useEffect(() => {
    if (condition && !isCalledRef.current) {
      isCalledRef.current = true;
      cb();
    }
  }, [cb, condition]);
}
