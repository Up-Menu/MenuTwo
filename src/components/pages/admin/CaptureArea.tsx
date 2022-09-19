import React, { ReactNode } from 'react';

import { toPng } from 'html-to-image';

type CaptureAreaProps = {
  children?: ReactNode;
  onImageChange(dataUrl: string): void;
};

const CaptureArea: React.FC<CaptureAreaProps> = ({
                                                   children,
                                                   onImageChange
                                                 }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (ref.current) {
      toPng(ref.current).then(onImageChange);
    }
  }, [children]);

  return (
    <div
      style={{
        width: '0px',
        height: '0px',
        overflow: 'hidden'
      }}
    >
      <div ref={ref} style={{ width: '1125px', height: '2436px' }}>
        {children}
      </div>
    </div>
  );
};

export default CaptureArea;
