import { format, formatDistanceToNow } from "date-fns";
// import ptBR from "date-fns/locale/pt-BR";
import { ptBR } from 'date-fns/locale';

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react"; 
import { PostType } from "../types/postType";


export function Post( post : PostType) {

  const [comments, setComment] = useState<string[]>([]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishedDataFormat = format(
    post.publishedAt,
    "dd 'de' MMMM 'as' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComment([...comments, newCommentText]);

    setNewCommentText("");
  }

  function handleNewCommentTextChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function deleteComment(contentKey: number) {
    setComment(comments.filter((_, index) => index !== contentKey));
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity(
      "Por favor, preencha o campo de comentário."
    );
    console.log(event);
  }

  const isNewCommentTextEmpty = newCommentText.length == 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time title={publishedDataFormat} dateTime={post.publishedAt.toISOString()}>
          {publishedDateRelativeNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.contents
          .filter((content) => content.type === "paragraph")
          .map((content, index) => (
            <p key={index}>{content.content}</p>
          ))}

        <p>
          {post.contents
            .filter((content) => content.type === "link")
            .map((content, index) => (
              <a key={index} href="#" style={{ marginRight: "8px" }}>
                {content.content}
              </a>
            ))}
        </p>
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>

        <textarea
          required
          name="commentInput"
          value={newCommentText}
          onChange={handleNewCommentTextChange}
          onInvalid={handleNewCommentInvalid}
          placeholder="Deixe o seu comentário..."
        />

        <footer>
          <button disabled={isNewCommentTextEmpty} type="submit">
            Comentar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((value, index) => (
          <Comment
            key={index}
            contentKey={index}
            content={value}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
