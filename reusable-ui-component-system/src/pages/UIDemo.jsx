import { useState, useEffect } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Modal from "../ui/Modal";
import Loader from "../ui/Loader";
import Toast from "../ui/Toast";

export default function UIDemo() {
  const [open, setOpen] = useState(false);
  const [submitModal, setSubmitModal] = useState(false);
  const [toast, setToast] = useState(false);

  // Auto hide toast after 3 seconds
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleSubmit = () => {
    setSubmitModal(false);
    setToast(true);
  };
return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    <div className="bg-white w-full max-w-2xl rounded-2xl shadow-lg p-8 space-y-6">
      
      <h1 className="text-3xl font-bold text-center">
        UI Component Library
      </h1>

      {/* Buttons */}
      <div className="flex gap-4 justify-center">
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Button onClick={() => setToast(true)}>
          Show Toast
        </Button>
      </div>

      {/* Input */}
      <Input label="Email" placeholder="Enter email" />

      {/* Select */}
      <Select
        label="Category"
        options={[
          { label: "Frontend", value: "frontend" },
          { label: "Backend", value: "backend" },
        ]}
      />

      {/* ✅ Submit Button Under Dropdown */}
      <div className="flex justify-center pt-2">
        <Button
          variant="primary"
          onClick={() => setSubmitModal(true)}
        >
          Submit
        </Button>
      </div>

      {/* Loader */}
      <div className="flex justify-center">
        <Loader />
      </div>

      {/* Demo Modal */}
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Demo Modal"
      >
        <p>This is a reusable modal.</p>
      </Modal>

      {/* Submit Confirmation Modal */}
      <Modal
        isOpen={submitModal}
        onClose={() => setSubmitModal(false)}
        title="Confirm Submission"
      >
        <p className="mb-4">
          Are you sure you want to submit this form?
        </p>

        <div className="flex justify-end gap-3">
          <Button
            variant="secondary"
            onClick={() => setSubmitModal(false)}
          >
            Cancel
          </Button>

          <Button
            variant="primary"
            onClick={handleSubmit}
          >
            Yes, Submit
          </Button>
        </div>
      </Modal>

      {/* Toast */}
      {toast && (
        <Toast
          message="Form submitted successfully!"
          onClose={() => setToast(false)}
        />
      )}
    </div>
  </div>
);
}