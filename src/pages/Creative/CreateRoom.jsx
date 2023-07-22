import React, { useState } from "react";
import Button from '@mui/material/Button';

function CreateRoom() {
  const [questionArray, setQuestionArray] = useState([]);

  const createQuestion = (title, question) => {
    const allQuestions = [
      ...questionArray,
      {
        title,
        question,
        id: Math.round(Math.random() * 99999999),
      },
    ];
    setQuestionArray(allQuestions);
  };

  return (
    <div>
      <h1>ODA OLUŞTUR</h1>
      <h2>ODA BİLGİLERİ</h2>
      <div className="room-create-container">
        <div>
          Oda başlığı
          <input />
          x/64
        </div>
        <div>
          Açık odalarda listelensin mi?
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default CreateRoom;
