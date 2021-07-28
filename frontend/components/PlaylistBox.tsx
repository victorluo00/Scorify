import React from 'react';
import styled from 'styled-components';
import { useStyles } from '../styles';

interface Props {
  name: string;
  playlistId: number;
  photo: string;
}

const PlaylistBox = ({ name, playlistId, photo }: Props) => {
  console.log(name, playlistId, photo);
  return (
    <Wrapper>
      <img src="PlaylistCover.png"></img>
      <h1>{name}</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  border: solid 2px gray;
  border-radius: 10px;
  width: 150px;
  height: 150px;
  margin: 10px;
  background-color: white;
`;

export default PlaylistBox;
