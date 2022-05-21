import Nav from '../components/Nav';
import photosStyles from '../styles/Photos.module.css';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import shortid from 'shortid';

const shortKey = require('shortid');

const photos = ({ album }) => {
  const [originPost, setOriginPost] = useState(album);
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(1);

  const onCreate = () => {
    const newPost = {
      uesrId: 1004,
      id: originPost.length + 1,
      title: 'New Post',
      color: parseInt(Math.random() * 0xffffff).toString(16),
    };
    setOriginPost([...originPost, newPost]);
  };

  const onUpdate = (index, event) => {
    const update = prompt('Enter a new title');
    let array = [...originPost];
    console.log(update);
    if (update != null) array[index - 1].title = update;
    setOriginPost(array);
  };

  const onDelete = (index, event) => {
    let array = [...originPost]; // make a separate copy of the array
    array.splice(index - 1, 1);
    for (let i = 0; i < array.length; i++) {
      array[i].id = i + 1;
    }
    setOriginPost(array);
  };

  useEffect(() => {
    const reversedPost = [...originPost].reverse();
    setPost(reversedPost.slice((page - 1) * 5, (page - 1) * 5 + 5));
    console.log(originPost);
  }, [page, originPost]);

  return (
    <div>
      <Nav navLink="/" navInfo="Logout"></Nav>
      <div className={photosStyles.photosContainer}>
        <h1>Album Application</h1>
        <ul>
          {post.map(po => (
            <li key={shortKey.generate()}>
              <div
                onClick={e =>
                  window.open(
                    `https://place-hold.it/500/${po.color}?text=Image`
                  )
                }
              >
                <Image
                  src={`https://place-hold.it/100/${po.color}?text=Image`}
                  width={100}
                  height={100}
                ></Image>
              </div>
              <div
                onClick={e =>
                  window.open(
                    `https://place-hold.it/500/${po.color}?text=Image`
                  )
                }
              >
                <div>
                  {po.id}. {po.title}
                </div>
              </div>
              <div onClick={e => onUpdate(po.id, e)}>Update</div>
              <div onClick={e => onDelete(po.id, e)}>Delete</div>
            </li>
          ))}
        </ul>
        <div>
          <button
            onClick={() => {
              page > 1 ? setPage(page - 1) : null;
            }}
          >
            Before
          </button>
          <span>
            {page} / {Math.ceil(originPost.length / 5)}
          </span>
          <button
            onClick={() => {
              page < Math.ceil(originPost.length / 5)
                ? setPage(page + 1)
                : null;
            }}
          >
            Next
          </button>
        </div>
        <div onClick={onCreate}>Create</div>
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
