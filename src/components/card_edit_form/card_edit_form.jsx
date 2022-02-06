import React from "react";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";
import styles from "./card_edit_form.module.css";

const CardEditForm = ({ card }) => {
  const { name, company, theme, title, email, message } = card;

  const onSubmit = () => {};

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
      ></input>
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
      ></input>
      <select className={styles.select} name="theme" value={theme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        value={title}
      ></input>
      <input
        className={styles.input}
        type="text"
        name="email"
        value={email}
      ></input>
      <textarea
        className={styles.textarea}
        name="message"
        value={message}
      ></textarea>
      <p className={styles.fileInput}>
        <ImageFileInput />
      </p>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
