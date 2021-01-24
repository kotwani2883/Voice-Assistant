import React,{useEffect,createRef,useState} from 'react';
import {Card,CardActions,CardActionArea,CardContent,CardMedia,Button,Typography} from '@material-ui/core';
import  useStyles from "./styles.js";
import classNames from 'classnames'

const NewsCard=({article:{description,publishedAt,source,title,url,urlToImage},i,activeArticle})=> {
    const classes=useStyles();
    const [elRefs,setElRefs]=useState([]);
    const scrollToRef=(ref)=>window.scroll(0,ref.current.offsetTop-50);
    useEffect(()=>{
          setElRefs((refs)=>Array(20).fill().map((_,j)=>refs[j]||createRef()));
    },[])

    useEffect(()=>{
   if(i===activeArticle&&elRefs[activeArticle]){
  scrollToRef(elRefs[activeArticle]);
   }
    },[i,activeArticle,elRefs]);
        
       
    return (
       <Card ref={elRefs[i]} className={classNames(classes.card,activeArticle===i?classes.activeCard:null)} >
           <CardActionArea href={url} target="_blank">
               <CardMedia className={classes.media} image={urlToImage || 'https://www.google.com/imgres?imgurl=https%3A%2F%2Felements-video-cover-images-0.imgix.net%2Ffiles%2F286560324%2FPreview%2BImage%2BWorld%2BNews%2BPackage_00000.png%3Fauto%3Dcompress%252Cformat%26fit%3Dmin%26h%3D394%26w%3D700%26s%3Dce85092288cb4b6e3218aaf3ab42abac&imgrefurl=https%3A%2F%2Felements.envato.com%2Fworld-news-opener-MCDX8H3&tbnid=1p2SbpNcav68UM&vet=12ahUKEwjyw-yC57LuAhXzALcAHV5OCxwQMygHegUIARCyAQ..i&docid=-4lHwbJHwOTP6M&w=590&h=332&q=news%20thumbnail&ved=2ahUKEwjyw-yC57LuAhXzALcAHV5OCxwQMygHegUIARCyAQ'}/>
               <div className={classes.details}>
                   <Typography   variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                   <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
               </div>
               <Typography className={classes.title} variant="h5" gutterBottom>{title}</Typography>
               <CardContent>
                   <Typography variant="body2" color="textSecondary" component="p">{description} </Typography>
               </CardContent>
           </CardActionArea>
           <CardActions className={classes.cardActions}>
               <Button size="small" color="primary">Learn More</Button>
               <Typography variant="h5" color="textSecondary">{i+1}</Typography>
           </CardActions>
       </Card>
    )
}

export default NewsCard
