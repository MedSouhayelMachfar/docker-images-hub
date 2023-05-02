import "./feed.css";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import FormModal from "../../components/FormModal";
import Item from "../../components/Item";
import { ImageType } from "../../types/ImageType";
import { createImage, fetchImages } from "../../services/images.service";


const index: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [images, setImages] = useState<ImageType[]>([]);

  useEffect(() => {
    fetchImages().then(data => {
      if (data)
        setImages(data);
    })
  }, [])
  const handleModalClose = () => { setIsModalOpen((prevState) => !prevState); }
  const handleCreate = async (data: ImageType) => {
    const { name, description, url } = data;
    if (name && description && url) {
      setImages([data, ...images]);
      setIsModalOpen(false);
      createImage(data);
    }
  }
  return (
    <>
      {isModalOpen && <FormModal onClose={handleModalClose} onCreate={handleCreate} />}
      <section className="feed">
        <Navbar handleModalClose={handleModalClose} />
        {images.length > 0 && <section className="list-images">
          {
            images.map((item, index) => <Item {...item} key={index} />)
          }
        </section>}
        {images.length === 0 && <section className="list-images">
          <h1 className="empty">no data</h1>
        </section>}
      </section>
    </>
  );
};

export default index;
