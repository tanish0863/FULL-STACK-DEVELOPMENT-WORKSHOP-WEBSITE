'use client';

import { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

interface QRCodeProps {
  value: string;
  size?: number;
}

export default function QRCodeComponent({ value, size = 200 }: QRCodeProps) {
  const qrRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (qrRef.current) {
      QRCode.toCanvas(qrRef.current, value, {
        errorCorrectionLevel: 'H',
        type: 'image/webp',
        quality: 0.92,
        margin: 1,
        color: {
          dark: '#0f172a',
          light: '#ffffff',
        },
        width: size,
      });
    }
  }, [value, size]);

  return <canvas ref={qrRef} />;
}
