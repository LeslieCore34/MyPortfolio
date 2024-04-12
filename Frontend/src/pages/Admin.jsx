import { useState } from "react";
import axios from "axios";

export default function Admin() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      alert("Veuillez sélectionner une image.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedImage);
    console.log(formData.get("image"));

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/download`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'image :", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} accept="image/*" />
      <button onClick={handleUpload}>Télécharger</button>
    </div>
  );
}
