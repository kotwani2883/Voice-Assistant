import React,{useState,useEffect} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards/NewsCards'
import classes from 'classnames';
import useStyles from './styles.js';
const alanKey='cd2392a597628e54b05cc050541597ae2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App=()=>{
    const [newsArticles,setNewsArticles]=useState([]);
    const [activeArticle,setActiveArticle]=useState(-1);
const classes=useStyles();
    useEffect(()=>{
        alanBtn({
            key:alanKey,
            onCommand:({command,articles,number})=>{
                if(command==='newHeadlines')
                {
               setNewsArticles(articles);
               setActiveArticle(-1);
                }
               else if(command==='highlight')
               {
                   setActiveArticle((prevActiveArticle)=>prevActiveArticle+1);

               }
               else if(command==='open')
               {
                   window.open(articles[number].url,'_blank');
               }
            }
        })
    },[])
    return (
        <div>
            <div className={classes.logoContainer}>
                <img src= 'https://alan.app/voice/images/previews/preview.jpg'className={classes.alanLogo} alt="alnLogo"/>
            </div>
            <NewsCards  articles={newsArticles} activeArticle={activeArticle}/>
        </div>
    )
}

export default App;