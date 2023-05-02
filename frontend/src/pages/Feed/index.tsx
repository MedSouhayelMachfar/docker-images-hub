import "./feed.css";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import FormModal from "../../components/FormModal";
import Item from "../../components/Item";

const initialState = [
  {
    name: "alpine",
    url: "https://hub.docker.com/_/alpine",
    description: "A minimal Docker image based on Alpine Linux with a complete package index and only 5 MB in size!",
  },
  {
    name: "nginx",
    url: "https://hub.docker.com/_/nginx",
    description: "Official build of Nginx.",
  },
  {
    name: "busybox",
    url: "https://hub.docker.com/_/busybox",
    description: "Busybox base image.",
  },
  {
    name: "ubuntu",
    url: "https://hub.docker.com/_/ubuntu",
    description: "Ubuntu is a Debian-based Linux operating system based on free software.",
  },
]
const index: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [images, setImages] = useState(initialState);
  const handleModalClose = () => { setIsModalOpen((prevState) => !prevState); }
  const handleCreate = (formData: any) => { console.log(formData); }
  return (
    <>
      {isModalOpen && <FormModal onClose={handleModalClose} onCreate={handleCreate} />}
      <section className="feed">
        <Navbar handleModalClose={handleModalClose} />
        <section className="list-images">
          {
            images.map(item => <Item {...item}/>)
          }
        </section>
      </section>
    </>
  );
};

export default index;
