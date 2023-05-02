// Component
import { FormEvent } from "react";
import Modal from "../shared/Modal";
import Button from "../shared/ui/Button";
import Input from "../shared/ui/Input";

// Styles
import "./formModal.css";

// Type
type ModalType = {
  onClose: () => void;
  onCreate: (formData: any) => void;
};

const index: React.FC<ModalType> = (props) => {
  const { onClose, onCreate } = props;
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      name: { value: string };
      url: { value: string };
      description: { value: string };
    };
    const name = target.name.value;
    const url = target.url.value;
    const description = target.description.value;
    onCreate({name, url, description});
  }
  return (
    <Modal onClose={onClose}>
      <div className="modal-wrapper">
        <div className="modal-header">
          <div className="btn-close" onClick={onClose}>
          </div>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <Input label="name" type="text" />
            <Input label="url" type="text" />
            <Input label="description" type="text" />
            <div className="modal-footer">
              <Button type="reset" btnClass="btn-reset" value="RESET" />
              <Button type="submit" btnClass="btn-create" value="CREATE" />
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default index;
