import ImageUploader from './components/ImageUploader';

export default function Home({ setImageData }) {
  return (
    <div>
      <ImageUploader setImageData={setImageData} />
    </div>
  );
}
