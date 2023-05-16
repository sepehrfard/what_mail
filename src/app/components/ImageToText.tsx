import { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';

export default function ImageToText({ imageData }) {
  const [extractedText, setExtractedText] = useState('');

  useEffect(() => {
    if (imageData) {
      Tesseract.recognize(imageData)
        .then(({ data: { text } }) => {
          setExtractedText(text);
        });
    }
  }, [imageData]);

  return (
    <div>
      {extractedText}
    </div>
  );
}
