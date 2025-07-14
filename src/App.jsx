import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';
import React from 'react';

export function App() {


  return (
    <section className='App'>
      <TwitterFollowCard username={'miduDev'} name={'Miguel Angel'} initialIsFollowing={false} />
      <TwitterFollowCard username={'pheralb'} name={'Pablo Test'} initialIsFollowing/>
      <TwitterFollowCard username={'Elnar_Alvarez'} name={'Elnar Alvarez'} initialIsFollowing/>
      <TwitterFollowCard username={'kikobeats'} name={'Lazer Test'} initialIsFollowing/>
    </section>
  );
}