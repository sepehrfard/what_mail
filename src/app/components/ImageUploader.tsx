import { useRef } from 'react';

export default function ImageUploader({ setImageData }) {
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageData(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} hidden />
      <button onClick={() => fileInputRef.current.click()}>Upload Image</button>
    </div>
  );
}
