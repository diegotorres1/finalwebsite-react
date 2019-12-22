import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './../Pages.css';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

var tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,

  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    'border-bottom': "2px solid orange",
  },
  img: {
    display: 'block',
    overflow: 'hidden',
    display: 'block',
    'margin-left': 'auto',
    'margin-right': 'auto',
    'max-width' : 400,
    'max-height' : 400,
  },
}));
function get_text(){
  var text_list = {'gallery_1' : [
    'switcheroo',
    'higrid',
    'zotbins',
    'darknet',
    'datapath',
    'fpga',
    'ti'
    ]
  }
  var text_dict = {'gallery_1' : {
    'switcheroo' : {
      'caption' : 'Switcheroo',
      'alt' : 'switcheroo',
      'image' : 'switcheroo.png'
    },
    'higrid' : {
      'caption' : 'HiGRID',
      'alt' : 'higrid',
      'image' : 'higridplusdatabase.png'
    },
    'zotbins' : {
      'caption' : 'Zotbins',
      'alt' : 'zotbins',
      'image' : 'full_zotbins_logo.png'
    },
      'darknet' : {
        'caption' : 'Darknet Open Source Neural Network',
        'alt' : 'Darknet',
        'image' : 'darknet.png'
      },
      'datapath' : {
        'caption' : 'Processor Datapath',
        'alt' : 'datapath',
        'image' : 'datapath.png'
      },
      'fpga' : {
        'caption' : 'FPGA Processor Design',
        'alt' : 'fpga',
        'image' : 'fpga.png'
      },
      'ti' : {
        'caption' : 'TI RSLK',
        'alt' : 'ti',
        'image' : 'ti.jpg'
      }
    }
  }

  return [text_list, text_dict];
}
function create_image_steps(){
  var text_list, text_dict;
  var gallery_key;
  var tut_arr = [];

  [text_list, text_dict] = get_text();
  gallery_key = 'gallery_1';

  for (var key of text_list[gallery_key]){
    tut_arr.push(
      {
      label: text_dict[gallery_key][key]['caption'],
      imgPath: "Resources/Gallery/" + text_dict[gallery_key][key]['image']
      }
    )

  }
  return tut_arr;
}


function SwipeableTextMobileStepper() {
  tutorialSteps = create_image_steps()
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>
          <h4>
            {tutorialSteps[activeStep].label}
          </h4>
        </Typography>
      </Paper>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        style={{'background-color' : 'rgb(255, 217, 179)'}}
        nextButton={
          <Button style={{'background-color' : 'rgb(255, 117, 26)', 'border-color' : 'rgb(255, 102, 0)'}} size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button style={{'background-color' : 'rgb(255, 117, 26)', 'border-color' : 'rgb(255, 102, 0)'}} size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        style = {{'verticalAlign' : 'center'}}
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} style = {{'verticalAlign' : 'center'}} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
     
    </div>
  );
}

export default SwipeableTextMobileStepper;
