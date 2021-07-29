import React from 'react';
import styled from 'styled-components';
import { useStyles } from '../styles';

interface Props {
  id: any;
  redirect: any;
  playlistName: string;
  playlistId: number;
  photo: string;
}

const PlaylistBox = ({
  id,
  redirect,
  playlistName,
  playlistId,
  photo,
}: Props) => {
  console.log(playlistName, playlistId, photo);
  return (
    <Wrapper id={id} onClick={(e) => redirect(e.target.id)}>
      <Image src={photo} />
      <h1>{playlistName}</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  border: solid 1px #d7dbd8;
  border-radius: 10px;
  width: 32%;
  min-width: 400px;
  height: 150px;
  margin: 10px;
  background-color: white;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
`;

const Image = styled.img`
  border-radius: 8px 0px 0px 8px;
  -webkit-border-radius: 8px 0px 0px 8px;
  -moz-border-radius: 8px 0px 0px 8px;
`;

export default PlaylistBox;
