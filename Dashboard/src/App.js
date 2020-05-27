import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ArrowRight } from '@material-ui/icons';
import Changer from './components/changer.js'

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
// import img from '../public/Image.svg'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    background: 'fixed',
    backgroundImage: 'url("/static/Chat.png")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'auto',
    backgroundOrigin: 'border-box',
    backgroundPositionY: '150px',
    backgroundColor: '',

    overflowY: 'scroll',
    overflow: 'auto'

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  const match = useMediaQuery('(min-width:1000px)');
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>

        <AppBar position="static">
          <Toolbar style={{ backgroundColor: 'white', color: 'black', width: '100%', padding: '0px' }}>
            <img style={{ maxWidth: '200px', height: '100%', width: '20vw' }} src='/static/Image.svg' />
            <Typography variant="h4" align='center' className={classes.title}>
              <img src='/static/favicon1.ico' style={{ display: 'inline', height: '40px', marginBottom: '-10px' }} />Kempegowda International Airport
            </Typography>
            <img style={{ maxWidth: '160px', height: '100%', width: '20vw' }} src='/static/Image 2.svg' />

          </Toolbar>
        </AppBar>
        <div style={{
          width: '100%',
          height: '800px',
          background: 'fixed',
          backgroundPosition: 'bottom',
          backgroundColor: 'white',
          backgroundRepeat: 'no-repeat',
          backgroundImage: 'url(https://images6.alphacoders.com/653/653357.jpg)',
          backgroundSize: 'cover',
        }}>

        </div>
        <div style={{ width: '100%', height: '400px' }}>
        </div>
        {/* 1. Intro  */}
        <div style={{ width: '100%', height: '100vh', background: 'linear-gradient(180deg, #b3e1ebab, #f1f0f000)', padding: '50px 0px' }}>
          <Typography style={{ fontWeight: 430 }} variant='h2' align='center'>Conversational AI </Typography>
          <div style={{ height: '220px' }}>
            <img src={"https://images.idgesg.net/images/article/2019/11/ai_artificial_intelligence_ml_machine_learning_vector_by_kohb_gettyimages_1146634284-100817775-large.jpg"} style={{ height: 'inherit', display: match ? 'block' : 'none', width: 'auto', margin: '50px auto', opacity: '70%', }} />

          </div>
          <Typography style={{ fontWeight: 400, maxWidth: '900px', margin: 'auto' }} variant='h4' align='center'>
            Set of technologies that enable computers to understand, process, and respond to voice or text inputs in natural human-like ways.
          </Typography>
          <br />
          <Typography style={{ fontWeight: 400, maxWidth: '900px', margin: 'auto' }} variant='h4' align='center'>
            Create personalized customer experiences at scale like never before.

          </Typography>

          <Typography style={{ fontWeight: 380, maxWidth: '600px', margin: 'auto' }} variant='h4' align='center'>
            Conversational Artificial Intelligence to </Typography>
          <Typography style={{ fontWeight: 380, maxWidth: '600px', margin: 'auto' }} variant='h4' align='center'>
            <Changer names={['Automate communication', 'Facilitate transaction', 'Provide information']} /> </Typography>
        </div>



        {/* Stats */}
        <div style={{ width: '100%', height: '100vh', background: 'linear-gradient(180deg, rgb(150, 213, 227), rgb(212, 236, 242))', padding: '50px 0px' }}>
          <Typography style={{ fontWeight: 400 }} variant='h2' align='center'>Why Conversational AI?</Typography>
          <br />
          <div style={{ width: 'fit-content', margin: 'auto' }}>
            {[' Engaging', ' Multi-Platform', ' Asynchronous', ' Data-Driven', ' Adaptable', ' Cost-Effective', ' Prompt'].map(i =>
              <Typography style={{ fontWeight: 400 }} variant='h4' align='center'><ArrowRight />{i}</Typography>
            )}
          </div>
          <img src='/static/stats.jpg' style={{ display: 'block', margin: '50px auto', maxWidth: '500px', width: '80vw' }} />
          <Typography style={{ fontWeight: 380, maxWidth: '600px', margin: 'auto' }} variant='h4' align='center'>

          </Typography>
        </div>


        {/* Steps: The Process */}
        <div style={{ width: '100%', height: '100vh', background: 'linear-gradient(rgb(147, 162, 233), rgb(241, 240, 240))', padding: '50px 0px' }}>
          <Typography style={{ fontWeight: 400 }} variant='h2' align='center'>Conversational (AI) Action Bot</Typography>
          <img src="/static/flowchart.png" style={{
            width: '80vw',
            maxWidth: '600px',
            display: 'block',
            margin: 'auto',
          }} />
        </div>


        {/* Rasa(why) */}
        <div style={{ width: '100%', height: '100vh', background: 'linear-gradient(rgb(156, 147, 233), rgb(241, 240, 240))', padding: '50px 0px' }}>
          <img src="static/rasa.svg" style={{
            width: '300px',
            display: 'block',
            margin: 'auto'
          }}
          />
          {/* <img src="static/levels.jpg" style={{
            maxWidth: '400px',
            width:'80vw',
            display: 'block',
            margin: 'auto'}}
          /> */}
          <Typography style={{ fontWeight: 380, maxWidth: '800px', margin: '20px auto' }} variant='h4' align='center'>
            Open source framework to build high-performing, resilient, proprietary contextual AI assistants.
          </Typography>
          <Typography style={{ fontWeight: 400, maxWidth: '800px', margin: '20px auto' }} variant='h4' align='center'>
            2 Million downloads since launch.
          </Typography>
          <Typography style={{ fontWeight: 380, maxWidth: '800px', margin: '20px auto' }} variant='h4' align='center'>
            Developed with latest research, consists of <br /> cutting edge <span style={{ fontWeight: '400' }}>Natural Language Understanding (NLU)</span>
            <br />&<br /><span style={{ fontWeight: '400' }}>Dialogue management with machine learning (core).</span>
          </Typography>
          <Typography style={{ fontWeight: 400, maxWidth: '600px', margin: '20px auto' }} variant='h4' align='center'>
            Provides flexible <span style={{ fontWeight: '400', fontSize: '0.8em' }}><Changer names={['Deployment', 'Integrations', 'Channels', 'Architecture']} /></span> </Typography>

        </div>

        {/*  Rasa(what) nlu+core*/}
        <div style={{ width: '100%', height: '100vh', background: 'linear-gradient(rgb(156, 147, 233), rgb(241, 240, 240))', padding: '50px 0px' }}>
          <img src="static/rasa.svg" style={{
            width: '150px',
            display: 'block',
            margin: 'auto'
          }}
          />
          <img src="static/levels.png" style={{
            maxWidth: '800px',
            width: '80vw',
            display: 'block',
            margin: 'auto'
          }}
          />
          <Typography style={{ fontWeight: 400, maxWidth: '800px', margin: '20px auto' }} variant='h4' align='center'>
            Rasa NLU is an open-source natural language processing tool for intent classification, response retrieval and entity extraction in chatbots.
          </Typography>
          <Typography style={{ fontWeight: 400, maxWidth: '800px', margin: '30px auto' }} variant='h4' align='center'>
            Rasa Core is a dialogue engine for building AI assistants. Rather than a bunch of if/else statements, it uses a machine learning model trained on example conversations to decide what to do next.
          </Typography>

        </div>


        {/*  Rasa explain nlu and core intent,entity,response */}
        <div style={{ width: '100%', height: '100vh', background: 'linear-gradient(rgb(156, 147, 233), rgb(241, 240, 240))', padding: '50px 0px' }}>
          <img src="static/rasa.svg" style={{
            width: '200px',
            display: 'block',
            margin: 'auto'
          }}
          />
          {/* <img src="static/levels.jpg" style={{
            maxWidth: '400px',
            width:'80vw',
            display: 'block',
            margin: 'auto'}}
          /> */}
          {['Intents', 'Entity', 'Stories', 'Slots', 'Forms', 'Pipeline'].map(i =>
            <Typography style={{ fontWeight: 380, maxWidth: '800px', margin: '20px auto' }} variant='h4' align='center'>
              {i}</Typography>)}
        </div>
        
        <div style={{ width: '100%', height: '100vh', background: 'linear-gradient(rgb(166, 130, 231), rgb(241, 240, 240))', padding: '50px 0px' }}>
          <Typography style={{ fontWeight: 400 }} variant='h2' align='center'>Conversational (AI) Action Bot</Typography>
          <img src='/static/Unisys.png' style={{ maxWidth: '1000px', height: '600px', width: '80vw', display: 'block', margin: '20px auto', borderRadium: "60px" }} />
          {/* <Typography style={{ fontWeight: 380 }} variant='h4' align='center'>Support for multiple Voice, Messaging and Social media channels.</Typography>
          <Typography style={{ fontWeight: 380 }} variant='h4' align='center'>Implemented for <Changer names={['Website', 'Google Assitant', 'Telegram']} /></Typography> */}

        </div>

        {/*  Rasa(how) */}
        <div style={{ width: '100%', height: '100vh', background: 'linear-gradient(rgb(166, 130, 231), rgb(241, 240, 240))', padding: '50px 0px' }}>
          <Typography style={{ fontWeight: 400 }} variant='h2' align='center'>Conversational (AI) Action Bot</Typography>
          <img src='/static/Multi.svg' style={{ maxWidth: '800px', width: '80vw', display: 'block', margin: '20px auto', borderRadium: "60px" }} />
          <Typography style={{ fontWeight: 380 }} variant='h4' align='center'>Support for multiple Voice, Messaging and Social media channels.</Typography>
          <Typography style={{ fontWeight: 380 }} variant='h4' align='center'>Implemented for <Changer names={['Website', 'Google Assitant', 'Telegram']} /></Typography>

        </div>


        <div style={{ width: '100%', height: '100vh', background: 'linear-gradient(rgb(166, 130, 231), rgb(241, 240, 240))', padding: '50px 0px' }}>
          <Typography style={{ fontWeight: 400 }} variant='h2' align='center'>Conversational (AI) Action Bot</Typography>
          <img src='/static/Unisys MindMap.png' style={{ maxWidth: '1200px', height: '800px', width: '80vw', display: 'block', margin: '20px auto', borderRadium: "60px" }} />
          {/* <Typography style={{ fontWeight: 380 }} variant='h4' align='center'>Support for multiple Voice, Messaging and Social media channels.</Typography>
          <Typography style={{ fontWeight: 380 }} variant='h4' align='center'>Implemented for <Changer names={['Website', 'Google Assitant', 'Telegram']} /></Typography> */}

        </div>

        <div style={{ width: '100%', height: '100vh', background: 'linear-gradient(rgb(166, 130, 231), rgb(241, 240, 240))', padding: '50px 0px' }}>
          <Typography style={{ fontWeight: 400 }} variant='h2' align='center'>Conversational (AI) Action Bot</Typography>
          <img src='/static/Cluster Chart.png' style={{ maxWidth: '1000px', height: '800px', width: '80vw', display: 'block', margin: '20px auto', borderRadium: "60px" }} />
          {/* <Typography style={{ fontWeight: 380 }} variant='h4' align='center'>Support for multiple Voice, Messaging and Social media channels.</Typography>
          <Typography style={{ fontWeight: 380 }} variant='h4' align='center'>Implemented for <Changer names={['Website', 'Google Assitant', 'Telegram']} /></Typography> */}

        </div>


        {/*  Contact-use Cases */}
        <div style={{ width: '100%', height: '100vh', background: 'linear-gradient(rgb(166, 130, 231), rgb(241, 240, 240))', padding: '50px 0px' }}>
          <Typography style={{ fontWeight: 400 }} variant='h2' align='center'>Conversational (AI) Action Bot</Typography>

          <Typography style={{ fontWeight: 400, maxWidth: '600px', margin: '40px auto' }} variant='h3' align='center'>
            Demonstration</Typography>
          <Typography style={{ fontWeight: 400, maxWidth: '600px', margin: '20px auto' }} variant='h4' align='center'>
            <Changer names={['Website', 'Telegram', 'Google Virtual Voice Assitant']} /></Typography>
        </div>




        {/*  Further */}
        <div style={{ width: '100%', height: '100vh', background: 'linear-gradient(rgba(204, 129, 239, 0.67), rgba(241, 240, 240, 0))', padding: '50px 0px' }}>
          <Typography style={{ fontWeight: 400 }} variant='h2' align='center'>Team:</Typography>
          <div style={{ height: '300px' }} />

          <Typography style={{ fontWeight: 380, maxWidth: '600px', margin: 'auto' }} variant='h4' align='center'>
            <Changer names={['Naren Chandra', 'Rakshith R', 'Pranav Hegde']} /></Typography>
        </div>



      </div>

    </ThemeProvider>
  );
}

export default App;
