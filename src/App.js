import React,{useState,useEffect} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/NewsCards/NewsCards'
import classes from 'classnames';
import useStyles from './styles.js'
import Logo from './Logo.jpg'
const alanKey=process.env.REACT_APP_API_KEY;
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
                <img src={Logo} className={classes.alanLogo} alt="alnogo"/>
            </div>
            <NewsCards  articles={newsArticles} activeArticle={activeArticle}/>
        </div>
    )
}

export default App;