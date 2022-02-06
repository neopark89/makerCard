import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {

  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Neo',
      company: 'Nudgecode',
      theme: 'dark',
      title: 'ceo',
      email: 'neoesse@nudgecode.com',
      message: 'go for it',
      fileName: 'neo',
      fileURL: null,
    },
    {
      id: '2',
      name: 'jenny',
      company: 'Nudgecode',
      theme: 'light',
      title: 'designer',
      email: 'jenny@nudgecode.com',
      message: 'go for it',
      fileName: 'neo',
      fileURL: 'neo.png',
    },
    {
      id: '3',
      name: 'Bora',
      company: 'Nudgecode',
      theme: 'colorful',
      title: 'developer',
      email: 'bora@nudgecode.com',
      message: 'go for it',
      fileName: 'neo',
      fileURL: null,
    }
  ]);

  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  const addCard = (card) => {
    const update = [...cards, card];
    setCards(update);
  }

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
