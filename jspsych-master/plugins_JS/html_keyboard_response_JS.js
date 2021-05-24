/**
* jspsych-html-keyboard-response
* Josh de Leeuw
*
* plugin for displaying a stimulus and getting a keyboard response
*
* Updated : Juliana Sporrer (Feb, 2021)
*
**/


jsPsych.plugins["html-keyboard-response"] = (function() {

      var plugin = {};

      plugin.info = {
            name: 'html-keyboard-response',
            description: '',
            parameters: {
                  stimulus: {
                        type: jsPsych.plugins.parameterType.HTML_STRING,
                        pretty_name: 'Stimulus',
                        default: undefined,
                        description: 'The HTML string to be displayed'
                  },
                  choices: {
                        type: jsPsych.plugins.parameterType.KEYCODE,
                        array: true,
                        pretty_name: 'Choices',
                        default: jsPsych.ALL_KEYS,
                        description: 'The keys the subject is allowed to press to respond to the stimulus.'
                  },
                  prompt: {
                        type: jsPsych.plugins.parameterType.STRING,
                        pretty_name: 'Prompt',
                        default: null,
                        description: 'Any content here will be displayed below the stimulus.'
                  },
                  response_ends_trial: {
                        type: jsPsych.plugins.parameterType.BOOL,
                        pretty_name: 'Response ends trial',
                        default: true,
                        description: 'If true, trial will end when subject makes a response.'
                  },

            }
      }

      plugin.trial = function(display_element, trial) {

            var new_html = '<div id="jspsych-html-keyboard-response-stimulus">'+trial.stimulus+'</div>';

            // add prompt
            if(trial.prompt !== null){
                  new_html += trial.prompt;
            }

            // draw
            display_element.innerHTML = new_html;
            document.getElementById("jspsych-html-keyboard-response-stimulus").style.margin = "5% 10%";

            // store response
            var response = {
                  rt: null,
                  key: null
            };

            // function to end trial when it is time
            var end_trial = function() {

                  // kill any remaining setTimeout handlers
                  jsPsych.pluginAPI.clearAllTimeouts();

                  // kill keyboard listeners
                  if (typeof keyboardListener !== 'undefined') {
                        jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
                  }

                  // gather the data to store for the trial
                  var trial_data = {
                        "rt": response.rt,
                        "responses": trial.stimulus,
                  };

                  // clear the display
                  display_element.innerHTML = '';

                  // move on to the next trial
                  jsPsych.finishTrial(trial_data);
            };

            // function to handle responses by the subject
            var after_response = function(info) {

                  // after a valid response, the stimulus will have the CSS class 'responded'
                  // which can be used to provide visual feedback that a response was recorded
                  display_element.querySelector('#jspsych-html-keyboard-response-stimulus').className += ' responded';

                  // only record the first response
                  if (response.key == null) {
                        response = info;
                  }

                  if (trial.response_ends_trial) {
                        end_trial();
                  }
            };

            // start the response listener
            if (trial.choices != jsPsych.NO_KEYS) {
                  var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
                        callback_function: after_response,
                        valid_responses: trial.choices,
                        rt_method: 'performance',
                        persist: false,
                        allow_held_key: false
                  });
            }


      };

      return plugin;
})();
