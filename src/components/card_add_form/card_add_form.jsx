import React, { useRef, useState } from "react";
import Button from "../button/button";
import styles from "./card_add_form.module.css";

const CardAddForm = ({FileInput, onAdd}) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileUrl:null});

  const onFileChange = file => {
    setFile({
      fileName: file.name,
      fileUrl: file.url,
    })
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    const card = {
      id: Date.now(),
      name:nameRef.current.value || '',
      company:companyRef.current.value || '',
      theme:themeRef.current.value,
      title:titleRef.current.value || '',
      email:emailRef.current.value || '',
      message:messageRef.current.value || '',
      fileNmae:file.fileName || '',
      fileURL:file.fileUrl || '',
    }
    formRef.current.reset();
    setFile({fileName: null, fileUrl:null})
    onAdd(card);
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        placeholder="name"
      ></input>
      <input
        ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        placeholder="company"
      ></input>
      <select
        ref={themeRef}
        className={styles.select}
        name="theme"
        placeholder="theme"
      >
        <option placeholder="light">light</option>
        <option placeholder="dark">dark</option>
        <option placeholder="colorful">colorful</option>
      </select>
      <input
        ref={titleRef}
        className={styles.input}
        type="text"
        name="title"
        placeholder="title"
      ></input>
      <input
        ref={emailRef}
        className={styles.input}
        type="text"
        name="email"
        placeholder="email"
      ></input>
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name="message"
        placeholder="message"
      ></textarea>
      <p className={styles.fileInput}>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </p>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
