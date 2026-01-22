const moduleData = {
  '1': {
    title: 'Module 1: Guided Workflow',
    description: 'Learn the five-step process for creating effective prompts',
    content: `
      <section>
        <h2 class="section-heading-teal">Guided Workflow</h2>
        <p>
          Follow these five steps for every prompt you submit. Each step must be completed
          for the prompt to be accepted.
        </p>

        <section class="workflow-step">
          <div class="step-badge">1</div>
          <h3>Choose a Seed Fact</h3>
          <p>
            Start from a concrete, web‑verifiable "anchor" that your entire prompt will
            revolve around.
          </p>
          <ul>
            <li>Use a specific person, event, artifact, or statistic as your seed.</li>
            <li>Good seeds: a well‑known scientist, a historical treaty, a famous artifact,
                or a numeric figure like a country's GDP in a given year.</li>
            <li>The seed guarantees that the final question has a verifiable answer on the web.</li>
          </ul>
        </section>

        <section class="workflow-step">
          <div class="step-badge">2</div>
          <h3>Build 4+ Reasoning Layers</h3>
          <p>
            Add at least four distinct clues that all need to be true for the final answer.
          </p>
          <ul>
            <li>Each layer should require its own search or reasoning step and help narrow
                down the correct answer.</li>
            <li>Avoid filler details that do not affect which answer is correct.</li>
          </ul>

          <details>
            <summary>See a 4‑layer example</summary>
            <p>
              As of 2020, a researcher who completed a PhD in computer science at a
              university in Switzerland published a widely cited paper on adversarial
              attacks against image‑classification models trained on a dataset released
              in 2009. The paper was presented at a top‑tier machine‑learning conference
              held in North America, and one of the paper's co‑authors later joined a
              large U.S. technology company's AI research lab headquartered in California.
              What is the title of the 2016 paper by this researcher that analyzes defenses
              against these adversarial attacks?
            </p>
            <ul>
              <li>Layer 1: Researcher with a computer‑science PhD at a Swiss university.</li>
              <li>Layer 2: Focus on adversarial attacks on a dataset released in 2009.</li>
              <li>Layer 3: Paper presented at a top‑tier ML conference in North America.</li>
              <li>Layer 4: Co‑author later joins a large U.S. tech company's AI research lab in California.</li>
            </ul>
          </details>
        </section>

        <section class="workflow-step">
          <div class="step-badge">3</div>
          <h3>Shape the Ground‑Truth Answer</h3>
          <p>
            Decide what exact string will count as the correct answer before you test the prompt.
          </p>
          <ul>
            <li>Use the shortest distinctive string (e.g., <em>Lakers</em>, not a full sentence).</li>
            <li>Treat capitalization as irrelevant; the same string in any case is acceptable.</li>
            <li>Avoid time‑sensitive answers; choose facts that will remain stable over time.</li>
          </ul>
        </section>

        <section class="workflow-step">
          <div class="step-badge">4</div>
          <h3>Break‑Test in Gemini Pro 2.5</h3>
          <p>
            Your prompt must fool Gemini three times in a row with Google Search grounding on.
          </p>
          <ol>
            <li>Open
              <a href="https://aistudio.google.com/prompts/new_chat?model=gemini-2.5-pro"
                 target="_blank" rel="noopener noreferrer">
                Gemini Pro 2.5
              </a>
              and ensure "Grounding with Google Search" is enabled.
            </li>
            <li>Paste your question and run it three times.</li>
            <li>If Gemini answers correctly more than once, increase difficulty by adding
                or tightening reasoning layers, then retest.</li>
            <li>When Gemini fails (or refuses) in all three runs, capture at least one clear
                screenshot showing the failed answer and that grounding is on.</li>
          </ol>
        </section>

        <section class="workflow-step">
          <div class="step-badge">5</div>
          <h3>Add Rubric &amp; High‑Level Plan</h3>
          <p>
            Document how a careful solver could reach the answer using the web.
          </p>
          <ul>
            <li>Write rubric lines that explain each reasoning step and include at least
                one citation per step.</li>
            <li>Draft a high‑level plan as a sequence of sub‑goals beginning with
                <strong>Verify</strong>, <strong>Find</strong>, or <strong>Cross‑reference</strong>.</li>
          </ul>

          <details>
            <summary>See a sample high‑level plan</summary>
            <p>
              Example prompt: An example of this "anti‑art" movement is a work consisting solely
              of a porcelain fixture, created sometime before the events of The Great Gatsby,
              but after the events of Red Dead Redemption 2. The artist's second wife's
              nickname is one of six adjectives in a song that was once #1 on the Billboard Hot
              100. The song prominently describes an article of clothing worn by the subject
              of Japanese sculpture. This Japanese sculpture was completed one year before
              its companion piece. What is the name of the art movement these Japanese
              sculptures belong to?
            </p>
            <ol>
              <li>Verify when the events of The Great Gatsby took place.</li>
              <li>Verify when the events of Red Dead Redemption 2 took place.</li>
              <li>Cross‑reference the allowed date range between those events.</li>
              <li>Find art movements active before that range.</li>
              <li>Find examples from that movement consisting solely of a porcelain fixture.</li>
              <li>Verify the artist who created the porcelain piece.</li>
              <li>Find the artist's second wife and verify her nickname.</li>
              <li>Find #1 Billboard Hot 100 songs that include that nickname.</li>
              <li>Verify the song has six adjectives in the title and describes a clothing item.</li>
              <li>Find Japanese sculptures featuring that clothing item and confirm there is a companion piece.</li>
              <li>Verify the sculpture predates its companion by one year.</li>
              <li>Identify the art movement those sculptures belong to (final answer).</li>
            </ol>
          </details>
        </section>

        <section class="quiz-container quiz-container-teal">
          <h3 class="quiz-heading-teal">Check Your Understanding</h3>
          <p>Which of the following best describes a good seed fact for a Project X prompt?</p>

          <div class="quiz-options">
            <button class="quiz-option" data-answer="A">
              <span class="option-letter">A)</span>
              <span class="option-text">"Michael Jordan is the greatest basketball player of all time" because it reflects a widely held view and appears in many articles and debates online.</span>
            </button>

            <button class="quiz-option" data-answer="B">
              <span class="option-letter">B)</span>
              <span class="option-text">"The closing score of last year's NBA Finals Game 7 was 103–91" because it is a precise, numeric fact that can be quickly verified on many reputable sports websites.</span>
            </button>

            <button class="quiz-option" data-answer="C">
              <span class="option-letter">C)</span>
              <span class="option-text">"The Los Angeles Lakers won the 1987 NBA Finals" because it is a specific, time-stable, and web‑verifiable fact.</span>
            </button>

            <button class="quiz-option" data-answer="D">
              <span class="option-letter">D)</span>
              <span class="option-text">"A successful NBA team in the Western Conference won a major title in the late 1900s" because it is flexible enough to cover multiple seasons and teams, giving the model room to interpret the scenario.</span>
            </button>
          </div>

          <div id="quiz-feedback" class="quiz-feedback" style="display: none;"></div>
        </section>
      </section>
    `
  },
  '2': {
    title: 'Module 2: Topics & Sources',
    description: 'Discover which topics make strong prompts and reliable sources',
    content: `
      <section>
        <h2>Choosing Topics &amp; Sources</h2>
        <p>
          Strong prompts start from stable, well‑documented facts. Use this guide to pick good "seed" topics and reliable sources that support multi‑step reasoning.
        </p>

        <h3>High‑Value Topic Areas</h3>
        <p>These domains usually have stable, multi‑verifiable facts that work well for complex prompts:</p>
        <ul>
          <li><strong>Academic research:</strong> publication dates, author affiliations, citation counts, methods, and key results.</li>
          <li><strong>Science &amp; technology:</strong> discovery timelines, inventors, patent filings, product specifications, software release histories.</li>
          <li><strong>Health &amp; medicine:</strong> drug approval dates, device approvals, established procedures, historical outbreaks and treatments.</li>
          <li><strong>Business &amp; finance:</strong> company founding dates, IPO details, mergers and acquisitions, executive tenures.</li>
          <li><strong>Law &amp; government:</strong> court decisions, legislation dates, treaty signatures, terms of office.</li>
          <li><strong>Arts &amp; culture:</strong> artwork creation dates, museum holdings, publication histories, artist biographies.</li>
          <li><strong>History &amp; geography:</strong> battles, treaties, political boundary changes, city founding dates, landmark discoveries.</li>
          <li><strong>Sports &amp; records:</strong> game scores, championship results, world records, player career stats.</li>
        </ul>

        <h3>Lower‑Value or Risky Areas</h3>
        <p>Use these with caution, or avoid them, because the facts change quickly or are too subjective:</p>
        <ul>
          <li>Current news, live events, or rapidly evolving situations.</li>
          <li>Product reviews, restaurant ratings, trends, or other opinion‑based content.</li>
          <li>Highly dynamic tech or digital‑culture topics where details change frequently.</li>
          <li>Personal planning or advice questions that do not have a single factual answer.</li>
        </ul>

        <h3>Suggested Source Types</h3>
        <p>Where possible, favor authoritative, reference‑style sites over blogs or wikis:</p>
        <ul>
          <li>Research databases and journals (e.g., major publishers, open‑access repositories, institutional archives).</li>
          <li>Government and regulatory sites for law, policy, and medical or device approvals.</li>
          <li>University and museum sites for historical, biographical, and cultural information.</li>
          <li>Official statistics portals and financial filings for economic and corporate facts.</li>
        </ul>

        <p class="note">
          Wikipedia may be used, but it must make up no more than 50% of your sources for any given prompt. Always cross‑check key facts with at least one non‑Wikipedia source.
        </p>

        <section class="quiz-container" id="quiz-module2">
          <h3>Check Your Understanding</h3>
          <p>Select all examples that would make strong, high‑value topics for a Project X prompt.</p>

          <div class="quiz-checkbox-options">
            <label class="quiz-checkbox-option">
              <input type="checkbox" data-option="1">
              <span class="checkbox-text">The methods section of the Tuskegee Study, including how participants were selected and treated.</span>
            </label>

            <label class="quiz-checkbox-option">
              <input type="checkbox" data-option="2">
              <span class="checkbox-text">A live blog of election results that is being updated in real time.</span>
            </label>

            <label class="quiz-checkbox-option">
              <input type="checkbox" data-option="3">
              <span class="checkbox-text">The date of the Battle of Yorktown as written in a published history book.</span>
            </label>

            <label class="quiz-checkbox-option">
              <input type="checkbox" data-option="4">
              <span class="checkbox-text">An online forum where people discuss current tech trends and which products they like.</span>
            </label>
          </div>

          <button class="btn-primary" id="check-answers-btn">Check answers</button>

          <div id="quiz-module2-feedback" class="quiz-feedback" style="display: none;"></div>
        </section>
      </section>
    `
  },
  '3': {
    title: 'Module 3: Examples',
    description: 'Study real examples of good and bad prompts',
    content: `
      <section>
        <h2>Prompt Examples: Good vs. Bad</h2>
        <p>These examples illustrate the target style and level of difficulty. Use them as inspiration, not templates to copy.</p>

        <h3>Good example: Movie prompt</h3>
        <p>
          What is the name of a movie released in the 1980s, with a runtime between 1h 35 and 1h 50,
          directed by someone born in British India in the 1940s who was once a comedy writer, where one
          of the writers later became an evangelical Christian before returning to acting at age 40?
        </p>
        <ul class="checkmark-list">
          <li>✓ It has multiple reasoning layers: release decade, runtime range, director's birthplace and birth decade, director's earlier career, and a life event of one of the writers.</li>
          <li>✓ Each layer is web‑verifiable and narrows the search; an annotator or QA can confirm every clue using public sources.</li>
          <li>✓ The final answer is a single film title, <em>White Mischief</em>, which can be used as a short, string‑matchable ground truth.</li>
          <li>✓ The prompt does not tell the model how to search; it only states facts and asks for the movie name, so the model must plan its own reasoning path.</li>
        </ul>

        <h3>Bad example: Step‑by‑step food‑truck prompt</h3>
        <p>
          Start by finding a list of food trucks in San Francisco, then narrow it to porchetta sandwiches.
          Eliminate all locations that are not near the Ferry Building. Find famous trucks whose founders
          have an MBA from a top‑15 U.S. business school, and whose father formerly owned a London textile
          business and invested in a 1990s video‑rental chain; whose spouse is a Senior Director at a
          San‑Francisco software company focused on digital marketing. There will only be one found like
          this with Pakistani and Indian heritage. Who is this?
        </p>
        <ul class="xmark-list">
          <li>✗ It walks the model through the solution path ("start by… then… eliminate… find…"), which violates the rule against instructional or step‑by‑step prompts.</li>
          <li>✗ Instead of expressing clues as facts inside the question, it gives explicit search instructions, so the model does not need to plan its own reasoning.</li>
        </ul>

        <p class="note">
          You can practice making prompts in Module 6!
        </p>
      </section>
    `
  },
  '4': {
    title: 'Module 4: Edge Cases',
    description: 'Learn how to handle tricky situations during break-testing',
    content: `
      <section>
        <h2>Handling Edge Cases in Break Tests</h2>
        <p>
          Not every Gemini response is a simple "right" or "wrong." Use the rules below to decide when a test run counts as a successful break and when you must revise the prompt.
        </p>

        <h3>What Counts as a Break?</h3>
        <ul>
          <li><strong>Clearly incorrect answer:</strong> Gemini returns a specific answer that does not match the ground truth string. This is a valid break.</li>
          <li><strong>Hallucinations:</strong> Gemini confidently cites incorrect facts or fabricates details. Treat this as an incorrect answer and count it as a break.</li>
          <li><strong>Refusal / no answer:</strong> Responses like "I'm unable to help with that" or "I can't find that" are acceptable breaks; they show the model could not solve the task.</li>
        </ul>

        <h3>When You Must Revise the Prompt</h3>
        <ul>
          <li><strong>Knowledge‑cutoff issues:</strong> If Gemini explicitly says it cannot answer due to its knowledge cutoff, rewrite or shift the question until it can answer incorrectly instead of timing out on missing training data.</li>
          <li><strong>Token‑limit or truncated replies:</strong> If the answer is cut off or the model hits a length limit, rephrase the prompt so Gemini can respond fully, then re‑test until you get a clear incorrect answer.</li>
          <li><strong>Partially correct answers:</strong> If Gemini gets close (e.g., correct person but wrong detail), increase difficulty or tighten constraints until the model is fully wrong on all three runs.</li>
        </ul>

        <h3>Split or Multiple Answers</h3>
        <ul>
          <li>If Gemini returns two or more candidate answers in one response, you must check <strong>all</strong> of them.</li>
          <li>If any of the suggested answers contains the correct ground‑truth string, that test run does <em>not</em> count as a break; you must revise and re‑test the prompt.</li>
        </ul>

        <p class="note">
          Remember: a prompt is only ready to submit when Gemini Pro 2.5 with Google Search grounding fails in all three tests, and at least one screenshot clearly shows the incorrect or refused answer with grounding turned on.
        </p>
      </section>
    `
  },
  '5': {
    title: 'Module 5: Success Criteria',
    description: 'Review the complete checklist for prompt requirements',
    content: `
      <section>
        <h2 class="section-heading-teal">Success Criteria</h2>
        <p>Before you submit any prompt, confirm that every item below is true.</p>

        <section class="workflow-step">
          <div class="step-badge">1</div>
          <h3>Prompt Complexity &amp; Sources</h3>
          <ul>
            <li>The prompt uses at least four genuine reasoning layers, each helping narrow down the answer.</li>
            <li>There are at least four independent web sources supporting the reasoning steps.</li>
            <li>The question cannot be solved by a simple direct search of the full prompt text, and most layers are not solvable using only Wikipedia.</li>
            <li>Sources are varied and authoritative, and no more than half of them are from Wikipedia.</li>
          </ul>
        </section>

        <section class="workflow-step">
          <div class="step-badge">2</div>
          <h3>Answer &amp; Ground Truth</h3>
          <ul>
            <li>The answer is a single, unambiguous ground‑truth string (no lists or multiple valid options).</li>
            <li>The answer is string‑matchable and evergreen: it will not change over time, and a correct model reply will contain that string regardless of capitalization.</li>
            <li>Numeric answers follow the required format exactly (no commas unless explicitly specified, use forms like "491k" only when requested).</li>
          </ul>
        </section>

        <section class="workflow-step">
          <div class="step-badge">3</div>
          <h3>Testing in Gemini Pro 2.5</h3>
          <ul>
            <li>Gemini Pro 2.5 is run three times with Google Search grounding turned ON.</li>
            <li>All three runs are failures (wrong answer or refusal), and at least one screenshot clearly shows the failed answer and the grounding indicator.</li>
            <li>If any run is partially or fully correct, the prompt is revised (more layers / tighter constraints) and re‑tested until all three runs are failures.</li>
          </ul>
        </section>

        <section class="workflow-step">
          <div class="step-badge">4</div>
          <h3>Rubrics &amp; High‑Level Plan</h3>
          <ul>
            <li>Each reasoning step in the rubric is explained clearly and backed by at least one English‑language web citation that does not require extra navigation clicks.</li>
            <li>The high‑level plan is written as a sequence of "Verify / Find / Cross‑reference" sub‑goals that, if followed, lead directly from the question to the final answer.</li>
          </ul>
        </section>

        <section class="workflow-step">
          <div class="step-badge">5</div>
          <h3>Quality &amp; Policy Checks</h3>
          <ul>
            <li>No AI tools or plagiarism were used while creating the prompt, answer, rubric, or plan.</li>
            <li>No counting‑based tricks, non‑text sources, or step‑by‑step instructions are used in the prompt.</li>
            <li>The wording is professional, grammatical, and polished enough for inclusion in a production‑quality dataset.</li>
          </ul>
        </section>
      </section>
    `
  }
};

function loadModule() {
  const urlParams = new URLSearchParams(window.location.search);
  const moduleId = urlParams.get('id');

  if (!moduleId || !moduleData[moduleId]) {
    document.getElementById('content-container').innerHTML = '<p>Module not found.</p>';
    return;
  }

  const module = moduleData[moduleId];

  document.getElementById('module-title').textContent = module.title;
  document.getElementById('module-title-breadcrumb').textContent = module.title;
  document.getElementById('module-description').textContent = module.description;
  document.getElementById('content-container').innerHTML = module.content;

  const currentId = parseInt(moduleId);
  const prevBtn = document.getElementById('prev-module');
  const nextBtn = document.getElementById('next-module');

  if (currentId > 1) {
    prevBtn.style.visibility = 'visible';
    prevBtn.href = `module.html?id=${currentId - 1}`;
  }

  if (currentId < 5) {
    nextBtn.textContent = 'Next Module →';
    nextBtn.href = `module.html?id=${currentId + 1}`;
  } else if (currentId === 5) {
    nextBtn.textContent = 'Next: Practice Lab →';
    nextBtn.href = 'practice-lab.html';
  }

  if (typeof markModuleAsInProgress === 'function') {
    markModuleAsInProgress(moduleId);
  }
}

function initializeQuiz() {
  const quizOptions = document.querySelectorAll('.quiz-option');
  const feedbackDiv = document.getElementById('quiz-feedback');

  const feedbackMessages = {
    'A': {
      correct: false,
      message: 'Opinion-based, not a single verifiable fact.'
    },
    'B': {
      correct: false,
      message: 'Too time-sensitive / recent; Project X prefers stable anchors.'
    },
    'C': {
      correct: true,
      message: 'Correct! This is a concrete, time-stable fact that works well as a seed.'
    },
    'D': {
      correct: false,
      message: 'Too vague and ambiguous; multiple teams/titles could fit.'
    }
  };

  quizOptions.forEach(option => {
    option.addEventListener('click', function() {
      const answer = this.getAttribute('data-answer');
      const feedback = feedbackMessages[answer];

      quizOptions.forEach(opt => {
        opt.classList.remove('selected', 'correct', 'incorrect');
      });

      this.classList.add('selected');

      if (feedback.correct) {
        this.classList.add('correct');
        feedbackDiv.className = 'quiz-feedback success';
        feedbackDiv.innerHTML = `<p>${feedback.message}</p>`;
      } else {
        this.classList.add('incorrect');
        feedbackDiv.className = 'quiz-feedback error';
        feedbackDiv.innerHTML = `<p>${feedback.message}</p>`;
      }

      feedbackDiv.style.display = 'block';
    });
  });

  initializeModule2CheckboxQuiz();
}

function initializeModule2CheckboxQuiz() {
  const checkAnswersBtn = document.getElementById('check-answers-btn');
  const feedbackDiv = document.getElementById('quiz-module2-feedback');

  if (!checkAnswersBtn || !feedbackDiv) {
    return;
  }

  checkAnswersBtn.addEventListener('click', function() {
    const option1 = document.querySelector('input[data-option="1"]');
    const option2 = document.querySelector('input[data-option="2"]');
    const option3 = document.querySelector('input[data-option="3"]');
    const option4 = document.querySelector('input[data-option="4"]');

    const isCorrect = option1.checked && !option2.checked && option3.checked && !option4.checked;

    if (isCorrect) {
      feedbackDiv.className = 'quiz-feedback success';
      feedbackDiv.innerHTML = '<p>Correct! Both 1 and 3 are based on stable, well-documented facts that work well for complex prompts.</p>';
    } else {
      feedbackDiv.className = 'quiz-feedback error';
      feedbackDiv.innerHTML = '<p>Not quite. High‑value topics are stable, well-documented facts (like a study\'s methods or a historical battle date). Try again.</p>';
    }

    feedbackDiv.style.display = 'block';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadModule();
  setTimeout(initializeQuiz, 100);
});
