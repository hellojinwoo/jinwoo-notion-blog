import { isBrowser } from '@/lib/utils';
import { useEffect } from 'react';

/**
 * 스타일 조정 패치
 */
const useAdjustStyle = () => {
  /**
   * callout에 이미지가 포함되어 있을 때 넘쳐서 부모 컨테이너를 늘리는 것을 방지
   */
  const adjustCalloutImg = () => {
    const callOuts = document.querySelectorAll('.notion-callout-text');
    callOuts.forEach((callout) => {
      const images = callout.querySelectorAll('figure.notion-asset-wrapper.notion-asset-wrapper-image > div');
      const calloutWidth = callout.offsetWidth;
      images.forEach((container) => {
        const imageWidth = container.offsetWidth;
        if (imageWidth + 50 > calloutWidth) {
          container.style.setProperty('width', '100%');
        }
      });
    });
  };

  useEffect(() => {
    if (isBrowser) {
      adjustCalloutImg();
      window.addEventListener('resize', adjustCalloutImg);
      return () => {
        window.removeEventListener('resize', adjustCalloutImg);
      };
    }
  }, []);
};

export default useAdjustStyle;
