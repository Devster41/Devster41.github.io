import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from 'react';
import {useParams} from 'react-router-dom'; 
import { Typography } from "@mui/material";



const Home = () => {
    return (
      <><section>
        <h1>Welcome to my website</h1>
      </section><section>
          <div class="container reveal">
            <h2>About me</h2>
            <div class="text-container">
              <div class="text-box">
                <h3>Tetris God</h3>
                <p>
                  I am a god among men when it comes to NES Tetris. My high score is 999,999.
                </p>
              </div>
              <div class="text-box">
                <h3>Nerd</h3>
                <p>
                  I am a nerd among many things, including sports, Lord of the Rings, and music.
                </p>
              </div>
              <div class="text-box">
                <h3>Goblin</h3>
                <p>
                  I am a goblin who will spray olive oil in your hands and min-max my D&D
                  character to make it not fun for everyone else.
                </p>
              </div>
            </div>
          </div>
        </section></>
    )
}

export default Home;