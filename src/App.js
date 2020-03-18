import React from 'react';
import Header from './components/Header'
import ArticleForm from './components/ArticleForm'
import ArticlesList from './components/ArticlesList'
import ArticleProvider from "./context"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ArticleProvider>
        <ArticleForm />
        <ArticlesList />
      </ArticleProvider>
    </div>
  );
}

export default App;
