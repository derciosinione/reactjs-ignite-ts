/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from "phosphor-react";
import style from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({ content, contentKey, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  function handleDeleteComment() {
    onDeleteComment(contentKey);
  }

  function handleLikeComment() {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  }

  return (
    <div className={style.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/Paulo-Lopes-Estevao.png"
      />
      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Paulo Lopes</strong>
              <time title="11 de Maio as 08:23">Cerca de 1h atras</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentario">
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
