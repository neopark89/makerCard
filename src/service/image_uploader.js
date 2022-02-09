class ImageUploader {
  async upload(file) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "pdzaoz52");
    const result = await fetch(
      "https://api.cloudinary.com/v1_1/dcluhz5qq/upload",
      {
        method: "POST",
        body: formData
      }
    );
    return result.json();
  }
}

export default ImageUploader;