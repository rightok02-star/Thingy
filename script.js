// ===== SETTINGS & STATE =====
const settings = {
  length: 30,
  intensity: 'standard',
  focus: 'media'
};

let state = {
  daysCompleted: 0,
  streak: 0,
  locked: [],
  history: [],
  currentFetish: null,
  materialsChecked: {},
  sessionStart: null,
  timerInterval: null
};

// ===== FETISH DATABASE =====
const FETISHES = [
  {
    id: "feet",
    name: "Foot Worship & Soles",
    intensity: "tame",
    desc: "Soles, arches, toes, scent, slow worship. You are going to stare at and stroke to feet until your brain starts treating them like a primary sex organ.",
    materials: ["Phone or laptop for video", "Headphones (recommended)", "Lotion or spit"],
    searchTerms: ["perfect soles worship POV", "girl showing dirty soles close up", "footjob slow teasing soles", "barefoot goddess soles ignore"],
    intros: ["Your cock is about to learn that feet are not just feet. They are the point. Soft soles, wrinkled arches, toes that flex while some girl on screen barely acknowledges you. That indifference is going to get you harder than any tits ever did.", "We are locking feet into your reward system today. Every time you see a sole after this, I want a little involuntary twitch."],
    taskPools: {
      media: [
        { title: "Sole fixation", body: "Open Pornhub or your preferred site. Search one of the suggested terms. Pick a video with clear, well-lit soles. Full screen it.\n\nFor the next 6–8 minutes you do not stroke. You only watch. Zoom in with your eyes on the wrinkles, the soft center of the sole, the way the toes move. Breathe slower than usual. Let the frustration build." },
        { title: "Scent fantasy + slow stroke", body: "Start stroking, extremely slow, two fingers only. While you do, imagine the smell of warm skin and slight sweat coming off those soles. Every time the girl flexes or presents the bottom of her foot, match it with a tighter grip for three seconds, then release.\n\nDo this for at least 7 minutes. Edge once, then back completely off." },
        { title: "Worship commentary", body: "Find a new clip or continue the same one. Now speak out loud while you watch. Call the feet perfect, superior, better than any pussy. Tell the screen how much you need to smell them. Keep the monologue going for a full 5 minutes while stroking at a medium pace. Edge again if you get close, but do not cum." },
        { title: "Ignored cock under soles", body: "Choose a video where the girl is clearly more interested in showing her feet than in the man. Stroke faster now, but every time she looks away or treats the cock on screen as irrelevant, slow down almost to a stop. Let the humiliation of being secondary to her feet soak in.\n\nStay in this loop for 8 minutes." },
        { title: "Final lock-in", body: "Last video. Highest quality soles you can find. Stroke with both hands, loose and desperate. Get yourself to a dangerous edge while staring at the center of a sole. Hold it there. When you cannot hold anymore, stop completely. Hands off. Keep staring at the feet for another full minute in silence. That frustration is the point." }
      ],
      mixed: [
        { title: "Real sole check", body: "If you have your own feet available, pause the video and spend 3 minutes actually looking at and smelling your own soles. Then return to the screen and notice how the video feet now feel more intense by comparison." }
      ]
    },
    missingAdapt: "No problem if you only have the screen. Pure video immersion is enough. The brain does not need real skin today — it needs repetition and focus."
  },
  {
    id: "armpits",
    name: "Armpit Fetish",
    intensity: "tame",
    desc: "Underarms as a primary erotic zone. Scent, taste, visual. You will watch girls raise their arms and treat the pit like something worth worshipping.",
    materials: ["Phone/laptop", "Headphones"],
    searchTerms: ["armpit worship licking", "girl raises arms sweaty pits", "axilla fetish close up", "armpit sniffing POV"],
    intros: ["There is a soft, warm, slightly musky place that most people ignore. Today it becomes the only thing that matters. You are going to stare at armpits until your cock starts responding to the simple act of an arm being raised."],
    taskPools: {
      media: [
        { title: "Arm raise trigger", body: "Search the terms above. Find a video where the girl deliberately shows her armpits. Full screen.\n\nDo not touch your cock yet. Every time an arm goes up, inhale through your nose as if you can actually smell it. Do this for 5 solid minutes. Let the association form." },
        { title: "Lick fantasy stroke", body: "Start stroking slowly. Imagine your tongue running through the hollow of her underarm. Match your stroke speed to the movement of her arm. When she holds the pose, grip tighter.\n\nContinue for 8 minutes. Edge once and back off." },
        { title: "Scent obsession verbal", body: "New clip or same one. Speak out loud: tell her how good her pits must smell, how you want your face buried there, how the slight sweat makes it better. Keep talking while you stroke. 6 minutes minimum." },
        { title: "Denied under the pit", body: "Get to a high edge while a clear armpit shot is on screen. Stop stroking completely. Keep the video playing and your eyes locked on the pit for a full 90 seconds without touching yourself. The ache is the conditioning." }
      ]
    },
    missingAdapt: "Screen only is perfect for this. The visual of a raised arm is the trigger we are installing."
  },
  {
    id: "bbw_fat",
    name: "BBW / Fat Worship",
    intensity: "medium",
    desc: "Soft, heavy, wobbling flesh. Belly, thighs, ass that moves like liquid. You are going to watch fat clap and roll until your brain starts craving the excess.",
    materials: ["Phone/laptop", "Good speakers or headphones"],
    searchTerms: ["BBW ass clapping slow motion", "fat belly wobble sitting", "SSBBW thighs smother", "soft BBW body worship"],
    intros: ["Look at all that soft, heavy meat. The way it moves when she walks, the way a belly rests, the way an ass that big claps and then keeps jiggling. Today that movement is going to become the most important thing on the screen. Your cock is going to learn to throb for the excess."],
    taskPools: {
      media: [
        { title: "Wobble study", body: "Search “BBW ass clapping” or “fat belly wobble”. Pick a video with clear, unfiltered movement. Full screen.\n\nFor the first 6 minutes you only watch. No stroking. Study how the fat moves — the delay, the ripple, the weight. Breathe with it." },
        { title: "Two-handed soft stroke", body: "Now stroke with both hands, very soft and loose, matching the rhythm of the clapping or wobbling. Every time a big wave of flesh moves, give a slightly firmer squeeze.\n\nStay in this for at least 8 minutes. Edge once, then return to the soft stroke." },
        { title: "Smother fantasy", body: "Find a clip where the BBW is sitting or leaning in a way that would completely cover someone. Stroke faster while imagining that weight and heat on your face. Speak out loud how much you want to be under it. 6–7 minutes." },
        { title: "Final heavy edge", body: "Highest quality soft-body video you can find. Stroke with intent. Get yourself right to the edge while watching a heavy ass or belly move. Hold. When you cannot hold, stop completely and keep watching the fat move for another full minute with your hands off. Let the want settle in." }
      ]
    },
    missingAdapt: "Pure video is ideal here. The visual and auditory of moving fat is the entire point."
  },
  {
    id: "sph",
    name: "Small Penis Humiliation",
    intensity: "medium",
    desc: "Your size becomes the main character. Comparison, laughter, dismissal, locked arousal from being inadequate.",
    materials: ["Phone/laptop", "Mirror (optional)"],
    searchTerms: ["small penis humiliation JOI", "SPH SPH SPH tiny dick", "cuck small cock comparison", "ruined orgasm small penis"],
    intros: ["We are going to take the thing between your legs and make it the joke of the session. Not in a soft way. In a way that gets you hard from the embarrassment. By the end you should feel a little rush every time the word “small” appears on screen."],
    taskPools: {
      media: [
        { title: "Comparison flood", body: "Search SPH or small penis humiliation JOI. Open 2–3 tabs of larger cocks next to the humiliation video. Alternate looking at the big ones and at the girl mocking size.\n\nDo not stroke for the first 5 minutes. Just absorb the difference." },
        { title: "Verbal agreement", body: "Start stroking slowly. Every time the girl on screen says something about small cocks, repeat it out loud and agree with her. “Yes, it’s small.” “I know it’s pathetic.” Keep the agreement going for a full 7 minutes while stroking." },
        { title: "Denied because of size", body: "Get close to the edge. When you are there, stop and look at any larger cock on screen. Tell yourself out loud that you do not get to cum because of what you have. Stay denied for at least 90 seconds while the video keeps playing." },
        { title: "Final humiliation edge", body: "Last clip. Hardest SPH language you can find. Stroke with both hands, desperate. Edge hard while she is mid-sentence mocking size. Stop before orgasm. Hands off. Let the words keep playing while you sit there frustrated. That pairing is the conditioning." }
      ]
    },
    missingAdapt: "Mirror is optional. The screen is doing the heavy lifting. If you have a mirror, glance at yourself between clips for extra sting."
  },
  {
    id: "prostate",
    name: "Prostate Focus",
    intensity: "medium",
    desc: "Internal pleasure pathway. Even if you only use media today, you will watch prostate milking and hands-free content until the idea of being touched there feels necessary.",
    materials: ["Phone/laptop", "Lube + finger or toy (optional)", "Towel"],
    searchTerms: ["prostate milking hands free", "male pegging moaning", "Aneros orgasm", "prostate massage close up"],
    intros: ["There is a place inside you that most men never properly use. Today we are going to make your brain hungry for pressure there. Even if you only watch, the association will start forming."],
    taskPools: {
      media: [
        { title: "Visual education", body: "Search prostate milking or Aneros. Watch at least 6–7 minutes of clear internal stimulation without touching yourself. Notice the expressions, the way the body reacts when the spot is hit correctly." },
        { title: "Empathy stroke", body: "Start stroking very slowly while continuing to watch. Try to time your grip with the thrusts or pressure on screen. Imagine the same fullness building inside you. 8 minutes. Edge once." },
        { title: "Verbal craving", body: "Speak out loud while watching: tell the screen you want to feel that, you want something inside pressing there, you want the hands-free full-body version. Keep the craving verbal for 5+ minutes." },
        { title: "Denial with the idea", body: "Edge hard while a clear milking or pegging clip is playing. Stop before orgasm. Keep watching the internal stimulation for another minute with your hands completely still. Let the want for the real sensation sit in your body." }
      ],
      mixed: [
        { title: "Optional real pressure", body: "If you have lube and privacy, add 5–8 minutes of actual gentle prostate pressure (finger or toy) while continuing to watch. Keep it exploratory, not forced. If you do not have the materials, stay with the media version — it is still effective." }
      ]
    },
    missingAdapt: "No toy or lube is completely fine. Pure observational conditioning works. The hunger is what we are installing."
  },
  {
    id: "cei",
    name: "Cum Eating Instruction",
    intensity: "intense",
    desc: "The load is not the end. It is the beginning of the next act. You will watch men eat their own and be instructed until the idea starts feeling natural.",
    materials: ["Phone/laptop"],
    searchTerms: ["CEI JOI eat your cum", "self facials eating", "cum eating instruction detailed", "post orgasm CEI"],
    intros: ["Orgasm is not the finish line today. It is the moment the real task starts. You are going to watch men lick their own mess off their hands and stomachs until the idea of swallowing stops feeling foreign and starts feeling like the correct ending."],
    taskPools: {
      media: [
        { title: "Observation phase", body: "Search CEI JOI or cum eating instruction. Watch at least two different men follow through. No stroking yet. Just watch the moment they taste it and the moment they swallow. 6–7 minutes." },
        { title: "Synchronized buildup", body: "Start stroking in time with a good CEI JOI. Follow her instructions as closely as possible. When she tells the men on screen to edge, you edge. Build a real load. 10+ minutes of guided edging." },
        { title: "The decision point", body: "When you are ready to finish, pause right before the point of no return. Look at the screen. Hear the instruction to eat it. Decide you are going to follow through. Then cum and catch everything you can." },
        { title: "Consumption", body: "Lick it up. Start with a small taste if you need to, then the rest. Watch the video keep playing while you do it. Sit with the taste for a full minute afterward without rushing to drink water." }
      ]
    },
    missingAdapt: "This one is almost pure media + your own orgasm. No extra materials required."
  },
  {
    id: "mixed_feet_sph",
    name: "Feet + Small Penis Humiliation",
    intensity: "intense",
    desc: "Feet are superior. Your cock is not. The two ideas get welded together.",
    materials: ["Phone/laptop"],
    searchTerms: ["foot domination SPH", "soles ignore small cock", "footjob humiliation tiny", "goddess feet small penis"],
    intros: ["Today the soles are the main character and your cock is the punchline. You will watch feet get worshipped while size is dismissed. The combination is going to sit in your head."],
    taskPools: {
      media: [
        { title: "Sole priority", body: "Find content that mixes feet and humiliation or simply alternate tabs. Spend the first 5 minutes only on clear sole shots. No stroking. Just feet." },
        { title: "Size enters", body: "Now bring in SPH language or comparison. Stroke slowly while looking at feet and listening to or reading size mockery. Every time a sole is presented, agree out loud that it is more interesting than what you have. 8 minutes." },
        { title: "Stacked edge", body: "Edge while a perfect sole is on screen and humiliation audio or text is present. Stop at the peak. Keep the feet visible. Stay denied for 90+ seconds." }
      ]
    },
    missingAdapt: "Screen only. Perfect."
  },
  {
    id: "heavy_degradation",
    name: "Stacked Degradation",
    intensity: "extreme",
    desc: "Multiple angles of being less — size, neediness, body, usefulness — delivered through media until the resistance softens.",
    materials: ["Phone/laptop"],
    searchTerms: ["heavy SPH JOI", "verbal humiliation JOI", "degrading dirty talk", "worthless cock JOI"],
    intros: ["We are not doing soft teasing. We are stacking language and visuals that treat you as secondary, small, and easy. The goal is to make the degradation itself start producing arousal instead of just discomfort."],
    taskPools: {
      media: [
        { title: "Flood", body: "Open multiple JOI or humiliation clips. Let them run. Do not stroke for the first 5 minutes. Just let the words hit." },
        { title: "Agreement phase", body: "Start stroking. Every degrading statement, repeat or agree with it out loud. Keep the agreement continuous. 10 minutes. Edge at least twice and deny both times." },
        { title: "Peak and drop", body: "Push to a very high edge under the heaviest language you can find. Stop. Leave the audio playing. Hands completely off for a full 2 minutes. Breathe through it." }
      ]
    },
    missingAdapt: "Pure audio/visual is the design."
  },
  {
    id: "chastity_mentality",
    name: "Chastity Mentality",
    intensity: "extreme",
    desc: "Even without a device, install the feeling that orgasm is not currently permitted. Long denial under media that reinforces ownership or locked status.",
    materials: ["Phone/laptop", "Timer"],
    searchTerms: ["chastity JOI", "locked cock denial", "keyholder tease", "denied orgasm instruction"],
    intros: ["Today your cock does not get to finish. That is the entire session. We are going to tease it, edge it, and leave it wanting while the screen tells you that this is correct."],
    taskPools: {
      media: [
        { title: "Lock declaration", body: "Start a chastity or denial JOI. State out loud that you are not allowed to cum during this session. Mean it. Watch for 5 minutes without stroking." },
        { title: "Tease under rules", body: "Stroke only when the video permits it. When it says stop, stop immediately. Build multiple edges. Never cross the line. 15+ minutes of controlled denial." },
        { title: "Final sealed state", body: "Reach one last high edge. Stop. Leave the denial language playing. Sit with the locked feeling for at least 2 full minutes. Carry it after you close the browser." }
      ]
    },
    missingAdapt: "No device needed. The rule is mental and media-enforced."
  }
];

// ===== PUNISHMENTS (fetish-aware) =====
const PUNISHMENTS = {
  postpone: {
    default: [
      "Edge for 40 minutes tonight to the same type of content you tried to postpone. No orgasm. Every time you get close, say out loud that you postponed it because you were weak. Sleep denied.",
      "Write 35 lines: “I postponed [FETISH] because I am still trainable.” Then watch 15 minutes of that exact fetish content without stroking at all."
    ],
    feet: ["Spend 25 minutes watching sole videos tonight. Stroke only with your non-dominant hand. No cumming. End by smelling your own hand and saying the feet are still waiting."],
    sph: ["Open three large-cock comparison images and one SPH JOI. Edge for 30 minutes while agreeing out loud with every size insult. Full denial."],
    bbw_fat: ["Watch BBW ass and belly content for 30 minutes tonight. Two-handed soft strokes only. Deny the orgasm and leave the last wobble on screen while you go soft."],
    cei: ["Edge to CEI content for 25 minutes. When you finish, you will catch it and eat it. No negotiation. That is the postponed price."],
    prostate: ["Watch prostate milking videos for 30 minutes while applying light external perineum pressure only. No orgasm. Go to sleep with the full feeling still missing."]
  },
  remove: {
    default: [
      "Severe: 55 minutes of hard edging to the fetish you just deleted. Multiple edges. Zero orgasms. Afterward write a short paragraph admitting you permanently refused it and what that costs you.",
      "Severe: Two separate 25-minute denial sessions on this fetish content before you are allowed to generate a new one. Both must end in full denial."
    ],
    feet: ["Severe: 45 minutes of pure sole content. Edge at least four times. No release. Finish by typing a note to yourself that you permanently removed feet and therefore do not get to cum to them tonight."],
    sph: ["Severe: Long SPH session (50 minutes). Continuous agreement with the humiliation. Multiple hard edges. Complete denial. The size jokes continue in your head after you stop."],
    bbw_fat: ["Severe: 50 minutes of the heaviest soft-body content you can find. Soft then desperate stroking. Deny every edge. End staring at a still image of the fat while you stay frustrated."],
    cei: ["Severe: You will still complete a full CEI tonight as punishment for trying to delete it. Build the load properly. Eat everything. That is the price of removal."],
    prostate: ["Severe: Extended prostate-focused media session (45–50 min) with external pressure only. Multiple edges. No orgasm. Sleep with the internal ache still unanswered."]
  }
};

// ===== UI HELPERS =====
function initPills() {
  document.querySelectorAll('.pill-group').forEach(group => {
    group.querySelectorAll('.pill').forEach(pill => {
      pill.addEventListener('click', () => {
        group.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const id = group.id;
        if (id === 'lengthPills') settings.length = parseInt(pill.dataset.value);
        if (id === 'intensityPills') settings.intensity = pill.dataset.value;
        if (id === 'focusPills') settings.focus = pill.dataset.value;
      });
    });
  });
}

function loadState() {
  const saved = localStorage.getItem('fcp_state_v2');
  if (saved) state = { ...state, ...JSON.parse(saved) };
  updateStats();
  renderHistory();
}

function saveState() {
  localStorage.setItem('fcp_state_v2', JSON.stringify(state));
}

function updateStats() {
  document.getElementById('daysCompleted').textContent = state.daysCompleted;
  document.getElementById('streak').textContent = state.streak;
  document.getElementById('lockedCount').textContent = state.locked.length;
}

function getAvailable() {
  return FETISHES.filter(f => !state.locked.includes(f.id));
}

function assignFetish() {
  const available = getAvailable();
  if (available.length === 0) {
    alert("No fetishes left in the pool.");
    return;
  }
  const pick = available[Math.floor(Math.random() * available.length)];
  state.currentFetish = pick;
  state.materialsChecked = {};
  saveState();

  document.getElementById('customizeCard').style.display = 'none';
  document.getElementById('assignmentCard').style.display = 'block';

  const badge = document.getElementById('intensityBadge');
  badge.textContent = pick.intensity.toUpperCase();
  badge.className = 'intensity ' + pick.intensity;

  document.getElementById('fetishName').textContent = pick.name;
  document.getElementById('fetishDesc').textContent = pick.desc;

  const list = document.getElementById('materialsList');
  list.innerHTML = '';
  pick.materials.forEach((mat, i) => {
    list.innerHTML += `<div class="material-item"><input type="checkbox" id="mat_${i}" onchange="toggleMaterial(${i})"><label for="mat_${i}">${mat}</label></div>`;
  });
}

function toggleMaterial(i) {
  state.materialsChecked[i] = !state.materialsChecked[i];
  saveState();
}

function buildSession(fetish) {
  const steps = [];
  const mediaTasks = fetish.taskPools.media || [];
  const mixedTasks = fetish.taskPools.mixed || [];
  const intro = fetish.intros[Math.floor(Math.random() * fetish.intros.length)];

  let count = settings.length === 30 ? 4 : settings.length === 45 ? 5 : 6;
  if (settings.intensity === 'hard') count += 1;
  if (settings.intensity === 'brutal') count += 2;

  const chosen = [];
  const pool = [...mediaTasks];
  while (chosen.length < Math.min(count, pool.length) && pool.length) {
    const idx = Math.floor(Math.random() * pool.length);
    chosen.push(pool.splice(idx, 1)[0]);
  }

  if (settings.focus === 'mixed' && mixedTasks.length) {
    chosen.splice(Math.min(2, chosen.length), 0, mixedTasks[0]);
  }

  const allChecked = fetish.materials.every((_, i) => state.materialsChecked[i]);
  if (!allChecked) {
    steps.push({ title: "Adaptation", body: fetish.missingAdapt || "Some items are missing. Stay with the media versions. The psychological link is still being built." });
  }

  steps.push({ title: "Content to open", body: "Suggested searches (use these or close variations):\n\n• " + fetish.searchTerms.join("\n• ") + "\n\nOpen them in tabs now before you begin the timed work." });

  chosen.forEach(t => steps.push(t));

  if (settings.intensity === 'brutal') {
    steps.push({ title: "Brutal addition", body: "Because you selected Brutal: after your final edge you will stay on the last video for a full extra 3 minutes with zero touching, only watching. No bargaining." });
  }

  return { intro, steps };
}

function startSession() {
  const fetish = state.currentFetish;
  const built = buildSession(fetish);

  document.getElementById('assignmentCard').style.display = 'none';
  document.getElementById('sessionCard').style.display = 'block';
  document.getElementById('sessionTitle').textContent = fetish.name;
  document.getElementById('sessionIntro').textContent = built.intro;

  const container = document.getElementById('sessionSteps');
  container.innerHTML = '';
  built.steps.forEach((step, i) => {
    const div = document.createElement('div');
    div.className = 'step';
    div.id = 'step_' + i;
    div.innerHTML = `<div class="step-header"><span class="step-num">${String(i+1).padStart(2,'0')}</span><span class="step-title">${step.title}</span></div><div class="step-body">${step.body.replace(/\n/g,'<br>')}</div><div class="step-check"><label><input type="checkbox" onchange="markStepDone(${i})"> Step complete</label></div>`;
    container.appendChild(div);
  });

  state.sessionStart = Date.now();
  document.getElementById('completeBtn').style.display = 'none';
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerInterval = setInterval(updateTimer, 1000);
  updateTimer();
}

function updateTimer() {
  const elapsed = Math.floor((Date.now() - state.sessionStart) / 1000);
  const m = String(Math.floor(elapsed / 60)).padStart(2, '0');
  const s = String(elapsed % 60).padStart(2, '0');
  document.getElementById('timer').textContent = `${m}:${s}`;
  if (elapsed >= (settings.length - 5) * 60) {
    document.getElementById('completeBtn').style.display = 'block';
  }
}

function markStepDone(i) {
  const el = document.getElementById('step_' + i);
  el.classList.toggle('done', el.querySelector('input').checked);
}

function completeSession() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  const f = state.currentFetish;
  if (!state.locked.includes(f.id)) state.locked.push(f.id);
  state.daysCompleted += 1;
  state.streak += 1;
  state.history.unshift({ name: f.name, intensity: f.intensity, date: new Date().toLocaleDateString() });
  state.currentFetish = null;
  saveState();
  updateStats();
  renderHistory();
  document.getElementById('sessionCard').style.display = 'none';
  document.getElementById('customizeCard').style.display = 'block';
  alert("Session locked. The fetish is now part of your conditioned set.");
}

function abortSession() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  document.getElementById('sessionCard').style.display = 'none';
  showSkipOptions();
}

function showSkipOptions() {
  document.getElementById('skipCard').style.display = 'block';
  document.getElementById('assignmentCard').style.display = 'none';
  document.getElementById('sessionCard').style.display = 'none';
}

function closeSkip() {
  document.getElementById('skipCard').style.display = 'none';
  document.getElementById('assignmentCard').style.display = 'block';
}

function applySkip(type) {
  const f = state.currentFetish;
  let pool = (PUNISHMENTS[type][f.id] || PUNISHMENTS[type].default);
  let text = pool[Math.floor(Math.random() * pool.length)].replace('[FETISH]', f.name);

  if (type === 'remove') state.locked.push(f.id);
  state.currentFetish = null;
  state.streak = 0;
  saveState();
  updateStats();

  document.getElementById('skipCard').style.display = 'none';
  document.getElementById('punishmentCard').style.display = 'block';
  document.getElementById('punishmentContent').innerHTML = `<p><strong>${type === 'postpone' ? 'Postponed' : 'Permanently removed'}.</strong></p><p>${text}</p><p class="small-muted" style="margin-top:1rem;">Streak reset. Complete the consequence before generating a new fetish.</p>`;
}

function acceptPunishment() {
  document.getElementById('punishmentCard').style.display = 'none';
  document.getElementById('customizeCard').style.display = 'block';
}

function renderHistory() {
  const el = document.getElementById('historyList');
  if (!state.history.length) {
    el.innerHTML = '<p class="muted">No sessions completed yet.</p>';
    return;
  }
  el.innerHTML = state.history.slice(0, 12).map(h => `<div class="history-item"><span class="name">${h.name}</span><span class="date">${h.date} · ${h.intensity}</span></div>`).join('');
}

initPills();
loadState();
