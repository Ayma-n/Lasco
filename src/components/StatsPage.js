import React from 'react'
import {Link } from "react-router-dom" 
import { useDb } from '../contexts/DatabaseContext'

export default function StatsPage() {
    const {userInfo } = useDb();
  return (<div>
  <Link to="/profile">
Back
</Link>  
    <h1>Stats</h1>
    <div>{`Following: ${userInfo.following}`}</div>
    <div>{`Number of Following: ${userInfo.following.length}`}</div>
    <div>{`Followers: ${userInfo.followers}`}</div>
    <div>{`Number of Followers: ${userInfo.followers.length}`}</div>
    <div>{`Use case: ${userInfo.useCase}`}</div>
    <div>{`Bio: ${userInfo.bio}`}</div>
    </div>)
}
