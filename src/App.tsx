import "./global.css";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import { Header } from "./components/Header";

const posts = [
  {
    id: 1,
    author: {
      name: "Dercio Derone",
      avatar: "https://github.com/derciosinione.png",
      role: "Software Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
      { type: "link", content: "#novoprojeto" },
      { type: "link", content: "#nlw" },
      { type: "link", content: "#rocketseat" },
    ],
    publishedAt: new Date("2024-12-23 01:22:30"),
  },
  {
    id: 2,
    author: {
      name: "Paulo Lopes",
      avatar: "https://github.com/Paulo-Lopes-Estevao.png",
      role: "Back Developer",
    },
    content: [
      { type: "paragraph", content: "Boa noite galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
      { type: "link", content: "#nlw" },
    ],
    publishedAt: new Date("2024-12-24 01:22:30"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                contents={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
