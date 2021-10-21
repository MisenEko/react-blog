import React from 'react'
import Cards from '../../Components/Cards/Cards'
import './Home.css'
import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import {getArticles} from '../../redux/articles/articleReducer';
import {v4 as uuidV4} from 'uuid'


export default function Home() {

    const {articles} = useSelector(state => ({
        ...state.articleReducer
    }))

    const dispatch = useDispatch();

    useEffect(() => {
        if(articles.length === 0){
            dispatch(getArticles())
        }
    }, [])

    return (
        <>
            <h1 className="home-title">Tous les articles</h1>
            <div className="container-cards">
                {articles.map(item => {
                    return (
                        <Cards key={uuidV4()}>
                            <h2>{item.title}</h2>
                            <a href='#'>Lire l'article</a>
                        </Cards>
                    )
                })}
            </div>  
        </>
    )
}
