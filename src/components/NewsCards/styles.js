import {makeStyles} from '@material-ui/core/styles'

export default makeStyles({
    container:{
padding:'0 5%',
width:'100%',
margin:0,
    },
    card: {
        display: 'flex',
       flexDirection:'column',
       justifyContent:'space-between',
        alignItems: 'center',
        width: '100%',
        borderRadius: 10,
        color: 'white',
        height: '45vh',
        padding:'10%'
    
      },
      infoContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection:'column'
        
      },
});
