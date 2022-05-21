import Nav from '../components/Nav';

export default function Home({ album }) {
  console.log(album);
  return (
    <div>
      <Nav navLink="/photos" navInfo="Login"></Nav>
      <h1>Welcome to first Next JS</h1>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums`);
  const album = await res.json();
  for (let i = 0; i < album.length; i++) {
    album[i].color = parseInt(Math.random() * 0xffffff).toString(16);
  }
  return {
    props: {
      album,
    },
    revalidate: 20,
  };
};
