/*
QUESTIONNAIRES for Approach Avoidance Task
Bach Lab, University College London
Juliana Sporrer, 02.2021
Version: 3.0.0 (Based on Pascal Misala's code, 10.2017)
jspsych version: 6.2.0

*/

function quest() {

	var qns = [];

	var  begin_qns = {
		type: 'html-keyboard-response',
		stimulus: '<p class="instructions"><strong> We will now ask you to complete some questionnaires.</strong> <br> Please note the options given might differ for different questionnairies.<br> Please read each question carefully and answer according to the options given.</p>' +
		'<p class="instructions">Press spacebar to continue.</p>',
		choices: [32],
		data: {test_part: 'questinstruction',}
	};


	//BIS PLUGIN
	var bis_scale = ["Do not agree at all",  "Agree slightly", "Agree a lot",  "Agree completely"];

	var bis = {
		type: 'survey-multi-choice',
		questions:  [{prompt: '1) I plan tasks carefully.', options: bis_scale, required:true, horizontal: true},
		{prompt: '2) I do things without thinking.', options: bis_scale, required:true, horizontal: true},
		{prompt: '3) I make-up my mind quickly.', options: bis_scale, required:true, horizontal: true},
		{prompt: '4) I am happy-go-lucky.', options: bis_scale, required:true, horizontal: true},
		{prompt: "5) I don't pay attention.", options: bis_scale, required:true, horizontal: true},
		{prompt: '6) I have "racing" thoughts.', options: bis_scale, required:true, horizontal: true},
		{prompt: '7) I plan trips well ahead of time.', options: bis_scale, required:true, horizontal: true},
		{prompt: '8) I am self controlled.', options: bis_scale, required:true, horizontal: true},
		{prompt: '9) I concentrate easily.', options: bis_scale, required:true, horizontal: true},
		{prompt: '10) I save regularly.', options: bis_scale, required:true, horizontal: true},
		{prompt: '11) I "squirm" at plays or lectures.', options: bis_scale, required:true, horizontal: true},
		{prompt: '12) I am a careful thinker.', options: bis_scale, required:true, horizontal: true},
		{prompt: '13) I plan for job security.', options: bis_scale, required:true, horizontal: true},
		{prompt: '14) I say things without thinking.', options: bis_scale, required:true, horizontal: true},
		{prompt: '15) I like to think about complex problems.', options: bis_scale, required:true, horizontal: true},
		{prompt: '16) I change jobs.', options: bis_scale, required:true, horizontal: true},
		{prompt: '17) I act "on impulse".', options: bis_scale, required:true, horizontal: true},
		{prompt: '18) I get easily bored when solving thought problems.', options: bis_scale, required:true, horizontal: true},
		{prompt: '19) I act on the spur of the moment.', options: bis_scale, required:true, horizontal: true},
		{prompt: '20) I am a steady thinker.', options: bis_scale, required:true, horizontal: true},
		{prompt: '21) I change residences.', options: bis_scale, required:true, horizontal: true},
		{prompt: '22) I buy things on impulse.', options: bis_scale, required:true, horizontal: true},
		{prompt: '23) I can only think about one thing at a time.', options: bis_scale, required:true, horizontal: true},
		{prompt: '24) I change hobbies.', options: bis_scale, required:true, horizontal: true},
		{prompt: '25) I spend or charge more than I earn.', options: bis_scale, required:true, horizontal: true},
		{prompt: '26) I often have extraneous thoughts when thinking.', options: bis_scale, required:true, horizontal: true},
		{prompt: '27) I am more interested in the present than the future.', options: bis_scale, required:true, horizontal: true},
		{prompt: '28) I am restless at the theater or lectures.', options: bis_scale, required:true, horizontal: true},
		{prompt: '29) I like puzzles.', options: bis_scale, required:true, horizontal: true},
		{prompt: '30) I am future oriented.', options: bis_scale, required:true, horizontal: true}],
		preamble: ['<strong>People differ in the ways they act and think in different situations. Read each statement and rate according to the labels. Do not spend too much time on any statment. Answer quickly and honestly. </strong>'],
		data:{test_part: 'bis',}
	};

	//OCIR PLUGIN

	var ocir_scale = ["Not at all",  "A little", "Moderately",  "A lot" , "Extremely"];

	var ocir = {
		type: "survey-multi-choice",
		questions:  [{prompt: '1) I have saved up so many things that they get in the way.', options: ocir_scale, required:true, horizontal: true},
		{prompt: '2) I check things more often than necessary.', options: ocir_scale, required:true, horizontal: true},
		{prompt: '3) I get upset if objects are not arranged properly.', options: ocir_scale, required:true, horizontal: true},
		{prompt: '4) I feel compelled to count while I am doing things. ', options: ocir_scale, required:true, horizontal: true},
		{prompt: '5) I find it difficult to touch an object when I know it has been touched by strangers or certain people.', options: ocir_scale, required:true, horizontal: true},
		{prompt: '6) I find it difficult to control my own thoughts.', options: ocir_scale, required:true, horizontal: true},
		{prompt: "7) I collect things I don't need.", options: ocir_scale, required:true, horizontal: true},
		{prompt: '8) I repeatedly check doors, windows, drawers, etc.', options: ocir_scale, required:true, horizontal: true},
		{prompt: '9) I get upset if others change the way I have arranged things. ', options: ocir_scale, required:true, horizontal: true},
		{prompt: '10) I feel I have to repeat certain numbers.', options: ocir_scale, required:true, horizontal: true},
		{prompt: '11) I sometimes have to wash or clean myself simply because I feel contaminated.', options: ocir_scale, required:true, horizontal: true},
	{prompt: '12) If you were paying attention to the previous questions, please select "a lot" as your answer.', options: ocir_scale, required:true, horizontal: true},  // !!!!!catch question in OCIR number 12
		{prompt: '13) I am upset by unpleasant thoughts that come into my mind against my will.', options: ocir_scale, required:true, horizontal: true},
		{prompt: '14) I avoid throwing things away because I am afraid I might need them later. ', options: ocir_scale, required:true, horizontal: true},
		{prompt: '15) I repeatedly check gas and water taps and light switches after turning them off.', options: ocir_scale, required:true, horizontal: true},
		{prompt: '16) I need things to be arranged in a particular way.', options: ocir_scale, required:true, horizontal: true},
		{prompt: '17) I feel that there are good and bad numbers.', options: ocir_scale, required:true, horizontal: true},
		{prompt: '18) I wash my hands more often and longer than necessary.', options: ocir_scale, required:true, horizontal: true},
		{prompt: '19) I frequently get nasty thoughts and have difficulty in getting rid of them.', options: ocir_scale, required:true, horizontal: true}],

		preamble: ['<strong>The following statements refer to experiences that many people have in their everyday lives. Rate according to the label that best describes HOW MUCH that experience has DISTRESSED or BOTHERED you during the PAST MONTH.</strong>'],

		data:{test_part: 'ocir',}
	};
	//ocir has 18 qns + 1 for catch question

	//SCHIZO PLUGIN
	//schizo has 43 qns
	var schizo_scale = ["No", "Yes"];

	var schizo_qn1 = {
		type: "survey-multi-choice",
		questions:  [
			{prompt: '1) When in the dark do you often see shapes and forms even though there is nothing there?', options: schizo_scale, required:true, horizontal: true},
			{prompt: '2) Are your thoughts sometimes so strong that you can almost hear them?', options: schizo_scale, required:true, horizontal: true},
			{prompt: '3) Have you ever thought that you had special, almost magical powers?', options: schizo_scale, required:true, horizontal: true},
			{prompt: '4) Have you sometimes sensed an evil presence around you, even though you could not see it?', options: schizo_scale, required:true, horizontal: true},
			{prompt: "5) Do you think that you could learn to read other's minds if you wanted to?", options: schizo_scale, required:true, horizontal: true},
			{prompt: '6) When you look in the mirror does your face sometimes seem quite different from usual?', options: schizo_scale, required:true, horizontal: true},
			{prompt: '7) Do ideas and insights sometimes come to you so fast that you cannot express them all?', options: schizo_scale, required:true, horizontal: true},
			{prompt: '8) Can some people make you aware of them just by thinking about you?', options: schizo_scale, required:true, horizontal: true},
			{prompt: '9) Does a passing thought ever seem so real it frightens you?', options: schizo_scale, required:true, horizontal: true},
			{prompt: '10) Do you feel that your accidents are caused by mysterious forces?', options: schizo_scale, required:true, horizontal: true},
			{prompt: '11) Do you ever have a sense of vague danger or sudden dread for reasons that you do not understand?', options: schizo_scale, required:true, horizontal: true},
			{prompt: '12) Does your sense of smell sometimes become unusually strong?', options: schizo_scale, required:true, horizontal: true},
			{prompt: '13) Are you easily confused if too much happens at the same time?', options: schizo_scale, required:true, horizontal: true},
			{prompt: '14) Do you frequently have difficulty in starting to do things?', options: schizo_scale, required:true, horizontal: true},
			{prompt: '15) Are you a person whose mood goes up and down easily?', options: schizo_scale, required:true, horizontal: true},
			{prompt: '16) Do you dread going into a room by yourself where other people have already gathered and are talking?', options: schizo_scale, required:true, horizontal: true},
			{prompt: '17) Do you find it difficult to keep interested in the same thing for a long time?', options: schizo_scale, required:true, horizontal: true},
			{prompt: '18) Do you often have difficulties in controlling your thoughts?', options: schizo_scale, required:true, horizontal: true},
			{prompt: '19) Are you easily distracted from work by daydreams?', options: schizo_scale, required:true, horizontal: true},
			{prompt: "20) Do you ever feel that your speech is difficult to understand because the words are all mixed up and don't make sense?", options: schizo_scale, required:true, horizontal: true},
			{prompt: '21) Are you easily distracted when you read or talk to someone?', options: schizo_scale, required:true, horizontal: true},
			{prompt: '22) Is it hard for you to make decisions?', options: schizo_scale, required:true, horizontal: true},
			{prompt: '23) When in a crowded room, do you often have difficulty in following a conversation?', options: schizo_scale, required:true, horizontal: true}
		],
		preamble: ["<strong>Please read the statments and answer whether you agree or disagree with the statements with 'No' or 'Yes' ONLY.</strong>"],
		data:{test_part: 'schizo_qn1',}
	};

	var schizo_qn2 = {
		type: "survey-multi-choice",
		questions:  [
			{prompt: '24) Are there very few things that you have ever enjoyed doing?', options: schizo_scale, required:true, horizontal: true},
			{prompt: '25) Are you much too independent to get involved with other people?', options: schizo_scale, required:true, horizontal: true},
			{prompt: '26) Do you love having your back massaged?', options: schizo_scale, required:true, horizontal: true},
			{prompt: '27) Do you find the bright lights of a city exciting to look at?', options: schizo_scale, required:true, horizontal: true},
			{prompt: '28) Do you feel very close to your friends?', options: schizo_scale, required:true, horizontal: true},
			{prompt: '29) Has dancing or the idea of it always seemed dull to you?', options: schizo_scale, required:true, horizontal: true},
			{prompt: '30) Do you like mixing with people?', options: schizo_scale, required:true, horizontal: true},
			{prompt: '31) Is trying new foods something you have always enjoyed?', options: schizo_scale, required:true, horizontal: true},
			{prompt: '32) Have you often felt uncomfortable when your friends touch you?', options: schizo_scale, required:true, horizontal: true},
			{prompt: '33) Do you prefer watching television to going out with people?', options: schizo_scale, required:true, horizontal: true},
			{prompt: '34) Do you consider yourself to be pretty much an average sort of person?', options: schizo_scale, required:true, horizontal: true},
			{prompt: '35) Would you like other people to be afraid of you?', options: schizo_scale, required:true, horizontal: true},
			{prompt: "36) Do you often feel the impulse to spend money which you know you can't afford?", options: schizo_scale, required:true, horizontal: true},
			{prompt: '37) Are you usually in an average kind of mood, not too high and not too low?', options: schizo_scale, required:true, horizontal: true},
			{prompt: '38) Do you at times have an urge to do something harmful or shocking?', options: schizo_scale, required:true, horizontal: true},
		{prompt: '39) It is important that you carefully read the following options, choose "yes" below.', options: schizo_scale, required:true, horizontal: true},
			{prompt: '40) Do you stop to think things over before doing anything?', options: schizo_scale, required:true, horizontal: true},
			{prompt: '41) Do you often overindulge in alcohol or food?', options: schizo_scale, required:true, horizontal: true},
			{prompt: '42) Do you ever have the urge to break or smash things?', options: schizo_scale, required:true, horizontal: true},
			{prompt: '43) Have you ever felt the urge to injure yourself?', options: schizo_scale, required:true, horizontal: true},
			{prompt: '44) Do you often feel like doing the opposite of what other people suggest even though you know they are right?', options: schizo_scale, required:true, horizontal: true}
		],
		preamble: ["<strong>Please read the statments and answer whether you agree or disagree with the statements with 'No' or 'Yes' ONLY.</strong>"],
		data:{test_part: 'schizo_qn2',}
	};

	//XUNG PLUGIN
	var zung_scale = ["A little of the time",  "Some of the time", "Good part of the time",  "Most of the time"];

	//zung has 20 qns
	var zungdep = {
		type: "survey-multi-choice",
		questions:  [
			{prompt: '1) I feel down-hearted and blue.', options: zung_scale, required:true, horizontal: true},
			{prompt: '2) Morning is when I feel the best.', options: zung_scale, required:true, horizontal: true},
			{prompt: '3) I have crying spells or feel like it.', options: zung_scale, required:true, horizontal: true},
			{prompt: '4) I have trouble sleeping at night.', options: zung_scale, required:true, horizontal: true},
			{prompt: '5) I eat as much as I used to.', options: zung_scale, required:true, horizontal: true},
			{prompt: '6) I still enjoy sex.', options: zung_scale, required:true, horizontal: true},
			{prompt: '7) I notice that I am losing weight.', options: zung_scale, required:true, horizontal: true},
			{prompt: '8) I have trouble with constipation.', options: zung_scale, required:true, horizontal: true},
			{prompt: '9) My heart beats faster than normal.', options: zung_scale, required:true, horizontal: true},
			{prompt: '10) I get tired for no reason.', options: zung_scale, required:true, horizontal: true},
			{prompt: '11) My mind is as clear as it used to be.', options: zung_scale, required:true, horizontal: true},
			{prompt: '12) I find it easy to do the things I used to do.', options: zung_scale, required:true, horizontal: true},
			{prompt: "13) I am restless and can't keep still.", options: zung_scale, required:true, horizontal: true},
			{prompt: '14) I feel hopeful about the future.', options: zung_scale, required:true, horizontal: true},
			{prompt: '15) I am more irritable than usual.', options: zung_scale, required:true, horizontal: true},
			{prompt: '16) I find it easy to make decisions.', options: zung_scale, required:true, horizontal: true},
			{prompt: '17) I feel that I am useful and needed.', options: zung_scale, required:true, horizontal: true},
			{prompt: '18) My life is pretty full.', options: zung_scale, required:true, horizontal: true},
			{prompt: '19) I feel that others would be better off if I were dead.', options: zung_scale, required:true, horizontal: true},
			{prompt: '20) I still enjoy the things I used to do.', options: zung_scale, required:true, horizontal: true}],
		preamble : ['<strong>Please read each statement and decide how much of the time the statement describes how you have been feeling during the past several days.</strong>'],

		data:{test_part: 'zungdep',}
	};

	//LIEBO SOCIAL ANXIETY QUESTIONNAIRE
	var lebsocial_scale1 = [ "None" , "Mild", "Moderate","Severe"];
	var lebsocial_scale2 = [ "Never (0%)" ,"Occasionally (1-33%)", "Often (33-67%)","Usually (67-100%)"];

	var lebsocial_qn1 = {
		type: "survey-multi-choice",
		questions:  [
			{prompt: '<strong>1) Telephoning in public.</strong><br></br> Fear/Anxiety:', options: lebsocial_scale1, required:true, horizontal: true},
			{prompt: 'Avoidance:', options: lebsocial_scale2, required:true, horizontal: true},
			{prompt: '<strong>2) Participating in small groups.</strong><br></br> Fear/Anxiety:', options: lebsocial_scale1, required:true, horizontal: true},
			{prompt: 'Avoidance:', options: lebsocial_scale2, required:true, horizontal: true},
			{prompt: '<strong>3) Eating in public places.</strong><br></br> Fear/Anxiety:',options: lebsocial_scale1, required:true, horizontal: true},
			{prompt: 'Avoidance:', options: lebsocial_scale2, required:true, horizontal: true},
			{prompt: '<strong>4) Drinking with others in public places.</strong><br></br> Fear/Anxiety:',options: lebsocial_scale1, required:true, horizontal: true},
			{prompt: 'Avoidance:',options: lebsocial_scale2, required:true, horizontal: true},
			{prompt: '<strong>5) Talking to people in authority.</strong><br></br> Fear/Anxiety:', options: lebsocial_scale1, required:true, horizontal: true},
			{prompt: 'Avoidance:', options: lebsocial_scale2, required:true, horizontal: true},
			{prompt: "<strong>6) Acting, performing or giving a talk in front of an audience.</strong><br></br> Fear/Anxiety:", options: lebsocial_scale1, required:true, horizontal: true},
			{prompt: 'Avoidance:', options: lebsocial_scale2, required:true, horizontal: true},
			{prompt: '<strong>7) Going to a party.</strong><br></br> Fear/Anxiety:', options: lebsocial_scale1, required:true, horizontal: true},
			{prompt: 'Avoidance:', options: lebsocial_scale2, required:true, horizontal: true},
			{prompt: '<strong>8) Working while being observed.</strong><br></br> Fear/Anxiety:', options: lebsocial_scale1, required:true, horizontal: true},
			{prompt: 'Avoidance:', options: lebsocial_scale2, required:true, horizontal: true},
			{prompt: "<strong>9) Writing while being observed.</strong><br></br> Fear/Anxiety:", options: lebsocial_scale1, required:true, horizontal: true},
			{prompt: 'Avoidance:', options: lebsocial_scale2, required:true, horizontal: true},
			{prompt: "<strong>10) Calling someone you don't know very well.</strong><br></br> Fear/Anxiety:", options: lebsocial_scale1, required:true, horizontal: true},
			{prompt: 'Avoidance:', options: lebsocial_scale2, required:true, horizontal: true},
			{prompt: "<strong>11) Talking with people you don't know very well.</strong><br></br> Fear/Anxiety:", options: lebsocial_scale1, required:true, horizontal: true},
			{prompt: 'Avoidance:', options: lebsocial_scale2, required:true, horizontal: true},
			{prompt: '<strong>12) Meeting strangers.</strong><br></br> Fear/Anxiety:', options: lebsocial_scale1, required:true, horizontal: true},
			{prompt: 'Avoidance:', options: lebsocial_scale2, required:true, horizontal: true}
		],
		preamble: ['<strong>Read each bolded statement carefully and answer two questions about that statement. The first question asks how ANXIOUS or FEARFUL you feel in that situation. The second question asks how often you AVOID that situation. Please base your ratings on the way that the situations have affected you in the LAST WEEK.</strong>'],

		data:{test_part: 'lebsocial_qn1',}
	};

	var lebsocial_qn2 = {
		type: "survey-multi-choice",
		questions:  [
			{prompt: '<strong>13) Urinating in a public bathroom.</strong><br></br> Fear/Anxiety:', options: lebsocial_scale1, required:true, horizontal: true},
			{prompt: 'Avoidance:', options: lebsocial_scale2, required:true, horizontal: true},
			{prompt: '<strong>14) Entering a room when others are already seated.</strong><br></br> Fear/Anxiety:', options: lebsocial_scale1, required:true, horizontal: true},
			{prompt: 'Avoidance:', options: lebsocial_scale2, required:true, horizontal: true},
			{prompt: '<strong>15) Being the center of attention.</strong><br></br> Fear/Anxiety:',options: lebsocial_scale1, required:true, horizontal: true},
			{prompt: 'Avoidance:', options: lebsocial_scale2, required:true, horizontal: true},
			{prompt: '<strong>16) Speaking up at a meeting.</strong><br></br> Fear/Anxiety:',options: lebsocial_scale1, required:true, horizontal: true},
			{prompt: 'Avoidance:',options: lebsocial_scale2, required:true, horizontal: true},
			{prompt: '<strong>17) Taking a test.</strong><br></br> Fear/Anxiety:', options: lebsocial_scale1, required:true, horizontal: true},
			{prompt: 'Avoidance:', options: lebsocial_scale2, required:true, horizontal: true},
			{prompt: "<strong>18) Expressing a disagreement or disapproval to people you don't know very well.</strong><br></br> Fear/Anxiety:", options: lebsocial_scale1, required:true, horizontal: true},
			{prompt: 'Avoidance:', options: lebsocial_scale2, required:true, horizontal: true},
			{prompt: "<strong>19) Looking at people you don't know very well in the eyes.</strong><br></br> Fear/Anxiety:", options: lebsocial_scale1, required:true, horizontal: true},
			{prompt: 'Avoidance:', options: lebsocial_scale2, required:true, horizontal: true},
			{prompt: '<strong>20) Giving a report to a group.</strong><br></br> Fear/Anxiety:', options: lebsocial_scale1, required:true, horizontal: true},
			{prompt: 'Avoidance:', options: lebsocial_scale2, required:true, horizontal: true},
			{prompt: '<strong>21) Trying to pick up someone.</strong><br></br> Fear/Anxiety:', options: lebsocial_scale1, required:true, horizontal: true},
			{prompt: 'Avoidance:', options: lebsocial_scale2, required:true, horizontal: true},
			{prompt: '<strong>22) Returning goods to a store.</strong><br></br> Fear/Anxiety:', options: lebsocial_scale1, required:true, horizontal: true},
			{prompt: 'Avoidance:', options: lebsocial_scale2, required:true, horizontal: true},
			{prompt: '<strong>23) Giving a party.</strong><br></br> Fear/Anxiety:', options: lebsocial_scale1, required:true, horizontal: true},
			{prompt: 'Avoidance:', options: lebsocial_scale2, required:true, horizontal: true},
			{prompt: '<strong>24) Resisting a high pressure salesperson.</strong><br></br> Fear/Anxiety:', options: lebsocial_scale1, required:true, horizontal: true},
			{prompt: 'Avoidance:', options: lebsocial_scale2, required:true, horizontal: true}
		],
		preamble: ['<strong>Read each bolded statement carefully and answer two questions about that statement. The first question asks how ANXIOUS or FEARFUL you feel in that situation. The second question asks how often you AVOID that situation. Please base your ratings on the way that the situations have affected you in the LAST WEEK.</strong>'],
		data:{test_part: 'lebsocial_qn2',}
	};


	//	IQ QUESTIONAIRE PLUGIN
	var iq_scale1 = ["2", "3", "4", "5", "6","7"];
	var iq_scale2 = ["Richard is taller than Matt", "Richard is shorter than Matt",  "Richard is as tall as Matt" ,"It's impossible to tell"];
	var iq_scale3 = ["25" ,"39", "44", "47" ,"53", "57"];
	var iq_scale4 = ["Friday" ,"Monday", "Wednesday",  "Saturday" ,"Tuesday", "Sunday"];
	var iq_scale5 = ["S" ,"T", "U",  "V" ,"W", "X"];
	var iq_scale6 = ["E" ,"F", "G", "H" ,"I", "J"];
	var iq_scale7 = ["T" ,"U", "V",  "X" ,"Y", "Z"];
	var iq_scale8 = ["J" ,"H", "I", "N" ,"M", "L"];
	var iq_scale9 = ["A" ,"B", "C", "D" ,"E", "F"];
	var iq_scale10 = ["A" ,"B", "C", "D" , "E", "F","G","H"];


	var icariq = {
		type: "survey-multi-choice",
		questions: [
			{prompt:'1) What number is one fifth of one fourth of one ninth of 900?', options: iq_scale1, required:true, horizontal: true},
			{prompt:'2) Zach is taller than Matt and Richard is shorter than Zach. Which of the following statements would be the most accurate?',options: iq_scale2, required:true,},
			{prompt:'3) Joshua is 12 years old and his sister is three times as old as he. When Joshua is 23 years old, how old will his sister be?',options: iq_scale3, required:true, horizontal: true},
			{prompt:'4) If the day after tomorrow is two days before Thursday then what day is it today?',options: iq_scale4, required:true,},
			{prompt:'5) In the following alphanumeric series, what letter comes next? K N P S U',options: iq_scale5, required:true, horizontal: true},
			{prompt:'6) In the following alphanumeric series, what letter comes next? V Q M J H',options: iq_scale6, required:true, horizontal: true},
			{prompt:'7) In the following alphanumeric series, what letter comes next? I J L O S',options: iq_scale7, required:true, horizontal: true},
			{prompt:'8) In the following alphanumeric series, what letter comes next? Q S N P L', options: iq_scale8, required:true, horizontal: true},
			{prompt:'<center><img src="img/iq_1.png"><br><img src="img/iq_1_a.png"><br></center>'+
			'9) Which figure fits into the missing slot?',options: iq_scale9, required:true, horizontal: true},
			{prompt:	'<center><img src="img/iq_2.png"><br><img src="img/iq_2_a.png"><br></center>'+
			'10) Which figure fits into the missing slot?',options: iq_scale9, required:true, horizontal: true},
			{prompt:		'<center><img src="img/iq_3.png"><br><img src="img/iq_3_a.png"><br></center>'+
			'11) Which figure fits into the missing slot?',options: iq_scale9, required:true, horizontal: true},
			{prompt:	'<center><img src="img/iq_4.png"><br><img src="img/iq_4_a.png"><br></center>'+
			'12) Which figure fits into the missing slot?',options: iq_scale9, required:true, horizontal: true},
			{prompt:'13) All the cubes below have a different image on each side. Select the choice that represents a rotation of the cube labeled X.<br>' +
			'<center><img src="img/iq_5.png"></center>',options: iq_scale10, required:true, horizontal: true},
			{prompt:'14) All the cubes below have a different image on each side. Select the choice that represents a rotation of the cube labeled X.<br>' +
			'<center><img src="img/iq_6.png"></center>',options: iq_scale10, required:true, horizontal: true},
			{prompt:'15) All the cubes below have a different image on each side. Select the choice that represents a rotation of the cube labeled X.<br>' +
			'<center><img src="img/iq_7.png"></center>',options: iq_scale10, required:true, horizontal: true},
			{prompt:	'16) All the cubes below have a different image on each side. Select the choice that represents a rotation of the cube labeled X.<br>' +
			'<center><img src="img/iq_8.png"></center>',options: iq_scale10, required:true, horizontal: true},
		],
		preamble: ['<strong>Please read each question carefully and answer as best as you can.</strong>'],
		data:{test_part: 'IQ',}
	};

	//AUDIT PLUGIN
	var alcohol_scale1 = [ "Never" , "Monthly or less", "Two to four times a month","Two to three times a week","Four or more times a week"];
	var alcohol_scale2 = [ "1 or 2" , "3 or 4","5 or 6","7 to 9","10 or more"];
	var alcohol_scale3 = [ "Never","Less than monthly","Monthly","Weekly","Daily or almost daily"];
	var alcohol_scale4 = [ "No","Yes, but not in the last year","Yes, during the last year"];


	var alcoholadd = {
		type: "survey-multi-choice",
		questions:  [
			{prompt: '1) How often do you have a drink containing alcohol?', options: alcohol_scale1, required:true, horizontal: true},
			{prompt: '2) How many drinks containing alcohol do you have on a typical day when you are drinking?', options: alcohol_scale2, required:true, horizontal: true},
			{prompt: '3) How often do you have six or more drinks on one occasion?', options: alcohol_scale3, required:true, horizontal: true},
			{prompt: '4) How often during the last year have you found that you were not able to stop drinking once you had started? ', options: alcohol_scale3, required:true, horizontal: true},
			{prompt: '5) How often during the last year have you failed to do what was normally expected from you because of drinking? ', options: alcohol_scale3, required:true, horizontal: true},
			{prompt: '6) How often during the last year have you needed a first drink in the morning to get yourself going after a heavy drinking session?', options: alcohol_scale3, required:true, horizontal: true},
			{prompt: '7) How often during the last year have you had a feeling of guilt or remorse after drinking?', options: alcohol_scale3, required:true, horizontal: true},
			{prompt: '8) How often during the last year have you been unable to remember what happened the night before because you had been drinking?', options: alcohol_scale3, required:true, horizontal: true},
			{prompt: '9) Have you or someone else been injured as a result of your drinking?', options: alcohol_scale4, required:true, horizontal: true},
			{prompt: '10) Has a relative or friend, or a doctor or other health worker been concerned about your drinking or suggested you cut down?', options: alcohol_scale4, required:true, horizontal: true}
		],
		preamble: ['<strong>Now we are going to ask you some questions about your use of alcoholic beverages during the past year. Please try to be as honest and as accurate as you can be.</strong>'],
		data:{test_part: 'alcoholadd',}
	};

	//APATHY PLUGIN
	var apathy_scale = [ "Not at all characteristic","Slightly characteristic","Somewhat characteristic","Very characteristic"];

	var apathy = {
		type: "survey-multi-choice",
		questions:  [
			{prompt: '1) I am interested in things.', options: apathy_scale, required:true, horizontal: true},
			{prompt: '2) I get things done during the day. ', options: apathy_scale, required:true, horizontal: true},
			{prompt: '3) Getting things started on my own is important to me.', options: apathy_scale, required:true, horizontal: true},
			{prompt: '4) I am interested in having new experiences.', options: apathy_scale, required:true, horizontal: true},
			{prompt: '5) I am interested in learning new things.', options: apathy_scale, required:true, horizontal: true},
			{prompt: '6) I put little effort into anything.', options: apathy_scale, required:true, horizontal: true},
			{prompt: '7) I approach life with intensity.', options: apathy_scale, required:true, horizontal: true},
			{prompt: '8) Seeing a job through to the end is important to me.', options: apathy_scale, required:true, horizontal: true},
			{prompt: '9) I spend time doing things that interest me.', options: apathy_scale, required:true, horizontal: true},
			{prompt: '10) Someone has to tell me what to do each day.', options: apathy_scale, required:true, horizontal: true},
			{prompt: '11) I am less concerned about my problems than I should be.', options: apathy_scale, required:true, horizontal: true},
			{prompt: '12) I have friends.', options: apathy_scale, required:true, horizontal: true},
			{prompt: '13) Getting together with friends is important to me.', options: apathy_scale, required:true, horizontal: true},
			{prompt: '14) When something good happens, I get excited.', options: apathy_scale, required:true, horizontal: true},
			{prompt: '15) I have an accurate understanding of my problems.', options: apathy_scale, required:true, horizontal: true},
			{prompt: '16) Getting things done during the day is important to me.', options: apathy_scale, required:true, horizontal: true},
			{prompt: '17) I have initiative.', options: apathy_scale, required:true, horizontal: true},
			{prompt: '18) I have motivation.', options: apathy_scale, required:true, horizontal: true},
		],
		preamble: ['<strong>For each question, choose the answer that best describes your thoughts, feelings, and actions during the past 4 weeks.</strong>'],

		data:{test_part: 'apathy',}
	};


	//EATING DISORDER PLUGIN
	var eat_scale = [ "Always","Usually","Often","Sometimes","Rarely","Never"];

	var eat = {
		type: "survey-multi-choice",
		questions:  [
			{prompt: '1) I am terrified about being overweight.', options: eat_scale, required:true, horizontal: true},
			{prompt: '2) I avoid eating when I am hungry.', options: eat_scale, required:true, horizontal: true},
			{prompt: '3) I find myself preoccupied with food.', options: eat_scale, required:true, horizontal: true},
			{prompt: '4) I have gone on eating binges where I feel that I may not be able to stop.', options: eat_scale, required:true, horizontal: true},
			{prompt: '5) I cut my food into small pieces.', options: eat_scale, required:true, horizontal: true},
			{prompt: '6) I am aware of the calorie content of foods I eat.', options: eat_scale, required:true, horizontal: true},
			{prompt: '7) I particularly avoid foods with high carbohydrate content.', options: eat_scale, required:true, horizontal: true},
			{prompt: '8) I feel that others would prefer if I ate more.', options: eat_scale, required:true, horizontal: true},
			{prompt: '9) I vomit after I have eaten. ', options: eat_scale, required:true, horizontal: true},
			{prompt: '10) I feel extremely guilty after eating.', options: eat_scale, required:true, horizontal: true},
			{prompt: '11) I am preoccupied with a desire to be thinner.', options: eat_scale, required:true, horizontal: true},
			{prompt: '12) I think about burning up calories when I exercise.', options: eat_scale, required:true, horizontal: true},
			{prompt: '13) Other people think that I am too thin.', options: eat_scale, required:true, horizontal: true},
			{prompt: '14) I am preoccupied with the thought of having fat on my body.', options: eat_scale, required:true, horizontal: true},
			{prompt: '15) I take longer than others to eat meals.', options: eat_scale, required:true, horizontal: true},
			{prompt: '16) I avoid foods with sugar in them.', options: eat_scale, required:true, horizontal: true},
			{prompt: '17) I eat diet foods.', options: eat_scale, required:true, horizontal: true},
			{prompt: '18) I feel that food controls my life.', options: eat_scale, required:true, horizontal: true},
			{prompt: '19) I display self-control around food.', options: eat_scale, required:true, horizontal: true},
			{prompt: '20) I feel that others pressure me to eat.', options: eat_scale, required:true, horizontal: true},
			{prompt: '21) I give too much time and thought to food.', options: eat_scale, required:true, horizontal: true},
			{prompt: '22) I feel uncomfortable after eating sweets.', options: eat_scale, required:true, horizontal: true},
			{prompt: '23) I engage in dieting behaviour.', options: eat_scale, required:true, horizontal: true},
			{prompt: '24) I like my stomach to be empty.', options: eat_scale, required:true, horizontal: true},
			{prompt: '25) I enjoy trying new rich foods.', options: eat_scale, required:true, horizontal: true},
			{prompt: '26) I have the impulse to vomit after meals.', options: eat_scale, required:true, horizontal: true},
		],
		preamble: ['<strong>Please answer the questions below as accurately, honestly and completely as possible. There are no right or wrong answers.</strong>'],

		data:{test_part: 'eat',}
	};

	//ANXIETY PLUGIN
	var anxiety_scale = [ "Almost never","Sometimes","Often","Almost always"];

	var genanxiety = {
		type: "survey-multi-choice",
		questions:  [
			{prompt: '1) I feel pleasant.', options: anxiety_scale, required:true, horizontal: true},
			{prompt: '2) I feel nervous and restless.', options: anxiety_scale, required:true, horizontal: true},
			{prompt: '3) I feel satisfied with myself.', options: anxiety_scale, required:true, horizontal: true},
			{prompt: '4) I wish I could be as happy as others seem to be.', options: anxiety_scale, required:true, horizontal: true},
			{prompt: '5) I feel like a failure.', options: anxiety_scale, required:true, horizontal: true},
			{prompt: '6) I feel rested.', options: anxiety_scale, required:true, horizontal: true},
			{prompt: '7) I am "calm, cool, and collected".', options: anxiety_scale, required:true, horizontal: true},
			{prompt: '8) I feel that difficulties are piling up so that I cannot overcome them.', options: anxiety_scale, required:true, horizontal: true},
			{prompt: "9) I worry too much over something that really doesn't matter. ", options: anxiety_scale, required:true, horizontal: true},
			{prompt: '10) I am happy.', options: anxiety_scale, required:true, horizontal: true},
			{prompt: '11) I have disturbing thoughts.', options: anxiety_scale, required:true, horizontal: true},
			{prompt: '12) I lack self-confidence.', options: anxiety_scale, required:true, horizontal: true},
			{prompt: '13) I feel secure.', options: anxiety_scale, required:true, horizontal: true},
			{prompt: '14) I make decisions easily.', options: anxiety_scale, required:true, horizontal: true},
			{prompt: '15) I feel inadequate.', options: anxiety_scale, required:true, horizontal: true},
			{prompt: '16) I am content.', options: anxiety_scale, required:true, horizontal: true},
			{prompt: '17) Some unimportant thought runs through my mind and bothers me.', options: anxiety_scale, required:true, horizontal: true},
			{prompt: "18) I take disappointments so keenly that I can't put them out of my mind.", options: anxiety_scale, required:true, horizontal: true},
			{prompt: '19) I am a steady person.', options: anxiety_scale, required:true, horizontal: true},
			{prompt: '20) I get in a state of tension or turmoil as I think over my recent concerns and interests.', options: anxiety_scale, required:true, horizontal: true},
		],
		preamble: ['<strong>Read each statement and select the appropriate response to indicate how you generally feel. There are no right or wrong answers. Do not spend too much time on any one statement but give the answer which seems to describe how you generally feel.</strong>'],
		data:{test_part: 'genanxiety',}
	};

	/* Taylor Manifest Anxiety Scale (TMAS)

	var anxietyTMAS_scale = [ "True","False"];

	var  anxiety_TMAS = {
		type: "survey-multi-choice",
		questions:  [
		        {prompt: '1) I do not tire quickly.', options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'2) I am troubled by attacks of nausea.', options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'3) I believe I am no more nervous than most others.',options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'4) I have very few headaches.',options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'5) I work under a great deal of tension.',options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'6) I cannot keep my mind on one thing.',options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'7) I worry over money and business.',options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:"8) I frequently notice my hand shakes when I try to do something.",options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'9) I blush no more often than others.',options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'10) I have diarrhea once a month or more.',options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'11) I worry quite a bit over possible misfortunes.',options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'12) I practically never blush.',options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'13) I am often afraid that I am going to blush.',options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'14) I have nightmares every few nights.',options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'15) My hands and feet are usually warm.',options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'16) I sweat very easily even on cool days.',options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:"17) Sometimes when embarrassed, I break out in a sweat.",options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'18) I hardly ever notice my heart pounding and I am seldom short of breath.',options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'19) I feel hungry almost all the time.',options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'20) I am very seldom troubled by constipation.',options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'21) I have a great deal of stomach trouble.',options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'22) I have had periods in which I lost sleep over worry.',options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'23) My sleep is fitful and disturbed.',options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'24) I dream frequently about things that are best kept to myself.',options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'25) I am easily embarrassed.',options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'26) I am more sensitive than most other people.',options: anxietyTMAS_scale, required:true, horizontal: true},
			  {prompt:'27) I frequently find myself worrying about something.',options: anxietyTMAS_scale, required:true, horizontal: true},
			  {prompt:'28) I wish I could be as happy as others seem to be.',options: anxietyTMAS_scale, required:true, horizontal: true},
			  {prompt:'29) I am usually calm and not easily upset.',options: anxietyTMAS_scale, required:true, horizontal: true},
			  {prompt:'30) I cry easily.',options: anxietyTMAS_scale, required:true, horizontal: true},
			  {prompt:'31) I feel anxiety about something or someone almost all the time.',options: anxietyTMAS_scale, required:true, horizontal: true},
			  {prompt:'32) I am happy most of the time.',options: anxietyTMAS_scale, required:true, horizontal: true},
			  {prompt:'33) It makes me nervous to have to wait.',options: anxietyTMAS_scale, required:true, horizontal: true},
			  {prompt:'34) I have periods of such great restlessness that I cannot sit long I a chair.',options: anxietyTMAS_scale, required:true, horizontal: true},
			  {prompt:'35) Sometimes I become so excited that I find it hard to get to sleep.',options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'36) I have sometimes felt that difficulties were piling up so high that I could not overcome them.', options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:"37) If you were paying attention to the previous questions, please select 'False' as your answer.", options: anxietyTMAS_scale, required:true, horizontal: true},               // !!!!!catch question in eat number 37
		        {prompt:'38) I must admit that I have at times been worried beyond reason over something that really did not matter.', options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'39) I have very few fears compared to my friends.',options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'40) I have been afraid of things or people that I know could not hurt me.',options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'41) I certainly feel useless at times.',options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'42) I find it hard to keep my mind on a task or job.',options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'43) I am usually self-conscious.',options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'44) I am inclined to take things hard.',options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'45) I am a high-strung person.',options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'46) Life is a strain for me much of the time.',options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'47) At times I think I am no good at all.',options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'48) I am certainly lacking in self-confidence.',options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'49) I sometimes feel that I am about to go to pieces.',options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'50) I shrink from facing crisis or difficulty.',options: anxietyTMAS_scale, required:true, horizontal: true},
		        {prompt:'51) I am entirely self-confident.', options: anxietyTMAS_scale, required:true, horizontal: true},
		  ],
		  preamble: ['<strong>Read each statement and select the appropriate response.</strong>'],
		  data:{test_part: 'anxiety_TMAS',}
	  };

	  */

	  	var anxiety_STICSA_scale = [ "Not at all","A little", "Moderately","Very much so"];

	  	var  anxiety_STICSA = {
	  		type: "survey-multi-choice",
	  		questions:  [
	  		        {prompt: '1) My heart beats fast.', options: anxiety_STICSA_scale, required:true, horizontal: true},
	  		        {prompt: '2) My muscles are tense.', options: anxiety_STICSA_scale, required:true, horizontal: true},
	  		        {prompt:'3) I feel agonized over my problems.',options: anxiety_STICSA_scale, required:true, horizontal: true},
	  		        {prompt:"4) I think that others won't approve of me.",options: anxiety_STICSA_scale, required:true, horizontal: true},
	  		        {prompt:"5) I feel like I'm missing out on things because I can't make up my mind soon enough.",options: anxiety_STICSA_scale, required:true, horizontal: true},
	  		        {prompt:'6) I feel dizzy.',options: anxiety_STICSA_scale, required:true, horizontal: true},
	  		        {prompt:'7) My muscles feel weak.',options: anxiety_STICSA_scale, required:true, horizontal: true},
	  		        {prompt:"8) I feel trembly and shaky.",options: anxiety_STICSA_scale, required:true, horizontal: true},
	  		        {prompt:'9) I picture some future misfortune.',options: anxiety_STICSA_scale, required:true, horizontal: true},
	  		        {prompt:"10) I can't get some thought out of my mind.",options: anxiety_STICSA_scale, required:true, horizontal: true},
	  		        {prompt:'11) I have trouble remembering things.',options: anxiety_STICSA_scale, required:true, horizontal: true},
	  		        {prompt:'12) My face feels hot.',options: anxiety_STICSA_scale, required:true, horizontal: true},
				  {prompt:'13) I think that the worst will happen.',options: anxiety_STICSA_scale, required:true, horizontal: true},
	  		        {prompt:'14) My arms and legs feel stiff.',options: anxiety_STICSA_scale, required:true, horizontal: true},
	  		        {prompt:'15) My throat feels dry.',options: anxiety_STICSA_scale, required:true, horizontal: true},
	  		        {prompt:'16) I keep busy to avoid uncomfortable thoughts.',options: anxiety_STICSA_scale, required:true, horizontal: true},
	  		        {prompt:"17) I cannot concentrate without irrelevant thoughts intruding.",options: anxiety_STICSA_scale, required:true, horizontal: true},
			{prompt:'18) If you were focusing on the statements above, tick "A little".',options: anxiety_STICSA_scale, required:true, horizontal: true},
	  		        {prompt:'19) My breathing is fast and shallow.',options: anxiety_STICSA_scale, required:true, horizontal: true},
	  		        {prompt:'20) I worry that I cannot control my thoughts as well as I would like to.',options: anxiety_STICSA_scale, required:true, horizontal: true},
	  		        {prompt:'21) I have butterflies in the stomach.',options: anxiety_STICSA_scale, required:true, horizontal: true},
	  		        {prompt:'22) My palms feel clammy.',options: anxiety_STICSA_scale, required:true, horizontal: true},
	  		  ],
	  		  preamble: ['<strong> Please read each statement carefully and select the option which best indicates how often, in general, the statement is true of you.</strong>'],
	  		  data:{test_part: 'anxiety_STICSA',}
	  	  };


	  // CADS questionnare (daringness subscale) - Items 3/6/9/11/50
	  var daringnessCADS_scale = [ "Not at all","Just a little","Pretty much/pretty often","Very much/very often"];

	  var  daringness_CADS  = {
		  type: "survey-multi-choice",
		  questions:  [
			{prompt: '1) Are you daring and adventurous?',options: daringnessCADS_scale, required:true, horizontal: true},
        		{prompt: '2) Do you like rough games and sports?',options: daringnessCADS_scale, required:true, horizontal: true},
        		{prompt: '3) Do you enjoy doing things that are risky or dangerous?',options: daringnessCADS_scale, required:true, horizontal: true},
        		{prompt: '4) Do you like things that are exciting and loud?',options: daringnessCADS_scale, required:true, horizontal: true},
        		{prompt: '5) Are you brave?', options: daringnessCADS_scale, required:true, horizontal: true},
		],
		preamble: ['<strong> When you answer these questions, please think about the last 12 months and tick the box that you feel best describes you. </strong>'],
		data:{test_part: 'daringness_CADS',}
	};

	// CADS questionnare (daringness subscale) - Items 3/6/9/11/50
	var BSSS_scale = [ "Strongly disagree","Disagree","Neither disagree nor agree","Agree", "Strongly agree"];

	var  daringness_BSSS  = {
		type: "survey-multi-choice",
		questions:  [
		    {prompt: '1) I would like to explore strange places.',options: BSSS_scale, required:true, horizontal: true},
		    {prompt: '2) I get restless when I spend too much time at home.',options: BSSS_scale, required:true, horizontal: true},
		    {prompt: '3) I like to do frightening things.',options: BSSS_scale, required:true, horizontal: true},
		    {prompt: '4) I like wild parties.',options: BSSS_scale, required:true, horizontal: true},
		    {prompt: '5) I would like to take off on a trip with no pre-planned routes or timetables.', options: BSSS_scale, required:true, horizontal: true},
		    {prompt: '6) I prefer friends who are excitingly unpredictable.', options: BSSS_scale, required:true, horizontal: true},
		    {prompt: '7) I would like to try bungee jumping.', options: BSSS_scale, required:true, horizontal: true},
		    {prompt: '8) I would love to have new and exciting experiences, even if they are illegal.', options: BSSS_scale, required:true, horizontal: true},
	    ],
	    preamble: ['<strong> Please read each statement carefully and select the option which best describes you. We are interested only in your likes or feelings, not how others feel about these things or how one is supposed to feel. </strong>'],
	    data:{test_part: 'daringness_BSSS',}
    };

    // --------------------------------- Finish message  --------------------------------- //

    var  end_qns = {
	    type: 'html-keyboard-response',
	    stimulus: '<h3> Thank you for your participation. The study is now finished. </BR> </BR> Please wait for the experimenter. </h3>',
	    choices: [32],
	    data: {test_part: 'end_qns',}
    };


	//PUSH QUESTIONNAIRE INSTRUCTIONS
	qns.push(begin_qns);

	//, ocir, schizo, zungdep, lebsocial, icariq, genanxiety, apathy, eat, alcoholadd
	var questlist = [daringness_CADS, daringness_BSSS, anxiety_STICSA, bis, ocir, icariq, schizo_qn1, zungdep, lebsocial_qn1,  genanxiety, apathy, eat, alcoholadd];

	var shufflequestlist  = jsPsych.randomization.shuffle(questlist);

	//PUSH THE QUESTIONNAIRES
	for(var i = 0; i < shufflequestlist.length; i++){
		qns.push(shufflequestlist[i]);

		if (shufflequestlist[i] == schizo_qn1)
		{qns.push(schizo_qn2);}

		if (shufflequestlist[i] == lebsocial_qn1)
		{qns.push(lebsocial_qn2);}

	};

	qns.push(end_qns);

	return qns;
}
