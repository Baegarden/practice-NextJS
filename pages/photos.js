import Nav from '../components/Nav';
import photosStyles from '../styles/Photos.module.css';
import Image from 'next/image';
import shortid from 'shortid';

const shortKey = require('shortid');

const photos = ({ album }) => {
  console.log(album);
  return (
    <div>
      <Nav navLink="/" navInfo="Logout"></Nav>
      <div className={photosStyles.photosContainer}>
        <h1>Album Application</h1>
        <ul>
          {album.map(po => (
            <li key={shortKey.generate()}>
              <div>
                <Image
                  src={`https://place-hold.it/100/${po.color}?text=Image`}
                  width={100}
                  height={100}
                  className={photosStyles.image}
                ></Image>
              </div>
              <div className={photosStyles.title}>
                {po.id}. {po.title}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

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

export default photos;
