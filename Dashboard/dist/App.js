'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./App.css');

var _styles = require('@material-ui/core/styles');

var _AppBar = require('@material-ui/core/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = require('@material-ui/core/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _useMediaQuery = require('@material-ui/core/useMediaQuery');

var _useMediaQuery2 = _interopRequireDefault(_useMediaQuery);

var _icons = require('@material-ui/icons');

var _changer = require('./components/changer.js');

var _changer2 = _interopRequireDefault(_changer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = (0, _styles.createMuiTheme)();
theme = (0, _styles.responsiveFontSizes)(theme);
// import img from '../public/Image.svg'

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
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
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  };
});

function App() {
  var classes = useStyles();
  var match = (0, _useMediaQuery2.default)('(min-width:1000px)');
  return _react2.default.createElement(
    _styles.ThemeProvider,
    { theme: theme },
    _react2.default.createElement(
      'div',
      { className: classes.root },
      _react2.default.createElement(
        _AppBar2.default,
        { position: 'static' },
        _react2.default.createElement(
          _Toolbar2.default,
          { style: { backgroundColor: 'white', color: 'black', width: '100%', padding: '0px' } },
          _react2.default.createElement('img', { style: { maxWidth: '200px', height: '100%', width: '20vw' }, src: '/static/Image.svg' }),
          _react2.default.createElement(
            _Typography2.default,
            { variant: 'h4', align: 'center', className: classes.title },
            _react2.default.createElement('img', { src: '/static/favicon1.ico', style: { display: 'inline', height: '40px', marginBottom: '-10px' } }),
            'Kempegowda International Airport'
          ),
          _react2.default.createElement('img', { style: { maxWidth: '160px', height: '100%', width: '20vw' }, src: '/static/Image 2.svg' })
        )
      ),
      _react2.default.createElement('div', { style: {
          width: '100%',
          height: '800px',
          background: 'fixed',
          backgroundPosition: 'bottom',
          backgroundColor: 'white',
          backgroundRepeat: 'no-repeat',
          backgroundImage: 'url(https://images6.alphacoders.com/653/653357.jpg)',
          backgroundSize: 'cover'
        } }),
      _react2.default.createElement('div', { style: { width: '100%', height: '400px' } }),
      _react2.default.createElement(
        'div',
        { style: { width: '100%', height: '800px', background: 'linear-gradient(180deg, #b3e1ebab, #f1f0f000)', padding: '50px 0px' } },
        _react2.default.createElement(
          _Typography2.default,
          { style: { fontWeight: 430 }, variant: 'h2', align: 'center' },
          'Conversational AI '
        ),
        _react2.default.createElement(
          'div',
          { style: { height: '220px' } },
          _react2.default.createElement('img', { src: "https://images.idgesg.net/images/article/2019/11/ai_artificial_intelligence_ml_machine_learning_vector_by_kohb_gettyimages_1146634284-100817775-large.jpg", style: { height: 'inherit', display: match ? 'block' : 'none', width: 'auto', marginLeft: ' 70vw', opacity: '70%' } })
        ),
        _react2.default.createElement(
          _Typography2.default,
          { style: { fontWeight: 400, maxWidth: '900px', margin: 'auto' }, variant: 'h4', align: 'center' },
          'Set of technologies that enable computers to understand, process, and respond to voice or text inputs in natural human-like ways.'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _Typography2.default,
          { style: { fontWeight: 400, maxWidth: '900px', margin: 'auto' }, variant: 'h4', align: 'center' },
          'Create personalized customer experiences at scale like never before.'
        ),
        _react2.default.createElement(
          _Typography2.default,
          { style: { fontWeight: 380, maxWidth: '600px', margin: 'auto' }, variant: 'h4', align: 'center' },
          'Conversational Artificial Intelligence to '
        ),
        _react2.default.createElement(
          _Typography2.default,
          { style: { fontWeight: 380, maxWidth: '600px', margin: 'auto' }, variant: 'h4', align: 'center' },
          _react2.default.createElement(_changer2.default, { names: ['Automate communication', 'Facilitate transaction', 'Provide information'] }),
          ' '
        )
      ),
      _react2.default.createElement(
        'div',
        { style: { width: '100%', height: '800px', background: 'linear-gradient(180deg, rgb(150, 213, 227), rgb(212, 236, 242))', padding: '50px 0px' } },
        _react2.default.createElement(
          _Typography2.default,
          { style: { fontWeight: 400 }, variant: 'h2', align: 'center' },
          'Why Conversational AI?'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { style: { width: 'fit-content', margin: 'auto' } },
          [' Engaging', ' Multi-Channel', ' Asychronous', ' Data-Driven', ' Adaptable', ' Cost-Effective', ' Prompt'].map(function (i) {
            return _react2.default.createElement(
              _Typography2.default,
              { style: { fontWeight: 400 }, variant: 'h4', align: 'center' },
              _react2.default.createElement(_icons.ArrowRight, null),
              i
            );
          })
        ),
        _react2.default.createElement('img', { src: '/static/stats.jpg', style: { display: 'block', margin: '50px auto', maxWidth: '500px', width: '80vw' } }),
        _react2.default.createElement(_Typography2.default, { style: { fontWeight: 380, maxWidth: '600px', margin: 'auto' }, variant: 'h4', align: 'center' })
      ),
      _react2.default.createElement(
        'div',
        { style: { width: '100%', height: '800px', background: 'linear-gradient(rgb(147, 162, 233), rgb(241, 240, 240))', padding: '50px 0px' } },
        _react2.default.createElement(
          _Typography2.default,
          { style: { fontWeight: 400 }, variant: 'h2', align: 'center' },
          'Conversational (AI) Action Bot'
        ),
        _react2.default.createElement('img', { src: '/static/flowchart.png', style: {
            width: '80vw',
            maxWidth: '600px',
            display: 'block',
            margin: 'auto'
          } })
      ),
      _react2.default.createElement(
        'div',
        { style: { width: '100%', height: '800px', background: 'linear-gradient(rgb(156, 147, 233), rgb(241, 240, 240))', padding: '50px 0px' } },
        _react2.default.createElement('img', { src: 'static/rasa.svg', style: {
            width: '300px',
            display: 'block',
            margin: 'auto'
          }
        }),
        _react2.default.createElement(
          _Typography2.default,
          { style: { fontWeight: 380, maxWidth: '800px', margin: '20px auto' }, variant: 'h4', align: 'center' },
          'Open source framework to build high-performing, resilient, proprietary contextual AI assistants.'
        ),
        _react2.default.createElement(
          _Typography2.default,
          { style: { fontWeight: 400, maxWidth: '800px', margin: '20px auto' }, variant: 'h4', align: 'center' },
          '2 Million downloads since launch.'
        ),
        _react2.default.createElement(
          _Typography2.default,
          { style: { fontWeight: 380, maxWidth: '800px', margin: '20px auto' }, variant: 'h4', align: 'center' },
          'Developed with latest research, consists of ',
          _react2.default.createElement('br', null),
          ' cutting edge ',
          _react2.default.createElement(
            'span',
            { style: { fontWeight: '400' } },
            'Natural Language Understanding (NLU)'
          ),
          _react2.default.createElement('br', null),
          '&',
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'span',
            { style: { fontWeight: '400' } },
            'Dialogue management with machine learning (core).'
          )
        ),
        _react2.default.createElement(
          _Typography2.default,
          { style: { fontWeight: 400, maxWidth: '600px', margin: '20px auto' }, variant: 'h4', align: 'center' },
          'Provides flexible ',
          _react2.default.createElement(
            'span',
            { style: { fontWeight: '400', fontSize: '0.8em' } },
            _react2.default.createElement(_changer2.default, { names: ['Deployment', 'Integrations', 'Channels', 'Architecture'] })
          ),
          ' '
        )
      ),
      _react2.default.createElement(
        'div',
        { style: { width: '100%', height: '800px', background: 'linear-gradient(rgb(156, 147, 233), rgb(241, 240, 240))', padding: '50px 0px' } },
        _react2.default.createElement('img', { src: 'static/rasa.svg', style: {
            width: '150px',
            display: 'block',
            margin: 'auto'
          }
        }),
        _react2.default.createElement('img', { src: 'static/levels.png', style: {
            maxWidth: '800px',
            width: '80vw',
            display: 'block',
            margin: 'auto'
          }
        }),
        _react2.default.createElement(
          _Typography2.default,
          { style: { fontWeight: 400, maxWidth: '800px', margin: '20px auto' }, variant: 'h4', align: 'center' },
          'Rasa NLU is an open-source natural language processing tool for intent classification, response retrieval and entity extraction in chatbots.'
        ),
        _react2.default.createElement(
          _Typography2.default,
          { style: { fontWeight: 400, maxWidth: '800px', margin: '30px auto' }, variant: 'h4', align: 'center' },
          'Rasa Core is a dialogue engine for building AI assistants,Rather than a bunch of if/else statements, it uses a machine learning model trained on example conversations to decide what to do next.'
        )
      ),
      _react2.default.createElement(
        'div',
        { style: { width: '100%', height: '800px', background: 'linear-gradient(rgb(156, 147, 233), rgb(241, 240, 240))', padding: '50px 0px' } },
        _react2.default.createElement('img', { src: 'static/rasa.svg', style: {
            width: '200px',
            display: 'block',
            margin: 'auto'
          }
        }),
        ['Intents', 'Entity', 'Stories', 'Slots', 'Forms', 'Pipeline'].map(function (i) {
          return _react2.default.createElement(
            _Typography2.default,
            { style: { fontWeight: 380, maxWidth: '800px', margin: '20px auto' }, variant: 'h4', align: 'center' },
            i
          );
        })
      ),
      _react2.default.createElement(
        'div',
        { style: { width: '100%', height: '800px', background: 'linear-gradient(rgb(166, 130, 231), rgb(241, 240, 240))', padding: '50px 0px' } },
        _react2.default.createElement(
          _Typography2.default,
          { style: { fontWeight: 400 }, variant: 'h2', align: 'center' },
          'Conversational (AI) Action Bot'
        ),
        _react2.default.createElement('img', { src: '/static/Multi.svg', style: { maxWidth: '800px', width: '80vw', display: 'block', margin: '20px auto', borderRadium: "60px" } }),
        _react2.default.createElement(
          _Typography2.default,
          { style: { fontWeight: 380 }, variant: 'h4', align: 'center' },
          'Support for multiple Voice, Messaging and Social media channels.'
        ),
        _react2.default.createElement(
          _Typography2.default,
          { style: { fontWeight: 380 }, variant: 'h4', align: 'center' },
          'Implemented for ',
          _react2.default.createElement(_changer2.default, { names: ['Website', 'Google Assitant', 'Telegram'] })
        )
      ),
      _react2.default.createElement(
        'div',
        { style: { width: '100%', height: '800px', background: 'linear-gradient(rgb(166, 130, 231), rgb(241, 240, 240))', padding: '50px 0px' } },
        _react2.default.createElement(
          _Typography2.default,
          { style: { fontWeight: 400 }, variant: 'h2', align: 'center' },
          'Conversational (AI) Action Bot'
        ),
        _react2.default.createElement(
          _Typography2.default,
          { style: { fontWeight: 400, maxWidth: '600px', margin: '40px auto' }, variant: 'h3', align: 'center' },
          'Demonstration'
        ),
        _react2.default.createElement(
          _Typography2.default,
          { style: { fontWeight: 400, maxWidth: '600px', margin: '20px auto' }, variant: 'h4', align: 'center' },
          _react2.default.createElement(_changer2.default, { names: ['Website', 'Telegram', 'Google Virtual Voice Assitant'] })
        )
      ),
      _react2.default.createElement(
        'div',
        { style: { width: '100%', height: '800px', background: 'linear-gradient(rgba(204, 129, 239, 0.67), rgba(241, 240, 240, 0))', padding: '50px 0px' } },
        _react2.default.createElement(
          _Typography2.default,
          { style: { fontWeight: 400 }, variant: 'h2', align: 'center' },
          'Team:'
        ),
        _react2.default.createElement('div', { style: { height: '300px' } }),
        _react2.default.createElement(
          _Typography2.default,
          { style: { fontWeight: 380, maxWidth: '600px', margin: 'auto' }, variant: 'h4', align: 'center' },
          _react2.default.createElement(_changer2.default, { names: ['Naren Chandra', 'Rakshith R', 'Pranav Hegde'] })
        )
      )
    )
  );
}

exports.default = App;