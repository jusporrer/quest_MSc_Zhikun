jsPsych.plugins.fullscreen = (function() {

  var plugin = {};

  plugin.info = {
    name: 'fullscreen',
    description: '',
    parameters: {
      fullscreen_mode: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Fullscreen mode',
        default: true,
        array: false,
        description: 'If true, experiment will enter fullscreen mode. If false, the browser will exit fullscreen mode.'
      },
      message: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Message',
        default: '<p>The experiment will switch to full screen mode when you press the button below</p>',
        array: false,
        description: 'HTML content to display above the button to enter fullscreen mode.'
      },
      button_label: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Button label',
        default:  'Continue',
        array: false,
        description: 'The text that appears on the button to enter fullscreen.'
      },
      delay_after: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Delay after',
        default: 1000,
        array: false,
        description: 'The length of time to delay after entering fullscreen mode before ending the trial.'
      },
    }
  }

  plugin.trial = function(display_element, trial) {

      if (!document.isFullScreen && !document.fullscreenElement && !document.webkitFullscreenElement && !document.mozFullScreenElement && !document.msFullscreenElement) {
            let cursornone = document.getElementById("cursornone").innerHTML;
            var res = cursornone.replace("none", "default");
            document.getElementById("cursornone").innerHTML = res;
        display_element.innerHTML = trial.message + '<button id="jspsych-fullscreen-btn" class="jspsych-btn">'+trial.button_label+'</button>';
        var listener = display_element.querySelector('#jspsych-fullscreen-btn').addEventListener('click', function() {
          var element = document.documentElement;
          if (element.requestFullscreen) {
            element.requestFullscreen();
          } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
          } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
          } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
          }
          endTrial();
        });
      } else {
        endTrial();
      }


    function endTrial() {

      display_element.innerHTML = '';

      jsPsych.pluginAPI.setTimeout(function(){

        var trial_data = {
             "rt": 0,
             "responses": "0",
        };

        jsPsych.finishTrial(trial_data);

      }, trial.delay_after);

    }

  };

  return plugin;
})();
