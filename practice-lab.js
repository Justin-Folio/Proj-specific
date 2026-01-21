const timeSensitiveKeywords = [
  'last year', 'this year', 'recently', 'current', 'latest',
  'now', 'today', 'yesterday', 'tomorrow', 'next year',
  'last month', 'this month', 'next month', 'currently'
];

function validateQuestion(question) {
  const feedback = {
    clarity: { status: 'good', message: 'Your question has good length and detail.' },
    timeSensitive: { status: 'good', message: 'Question appears time-stable.' },
    issues: []
  };

  if (!question || question.trim().length < 50) {
    feedback.clarity.status = 'warning';
    feedback.clarity.message = 'Your question might be too brief. Try adding more context and reasoning layers.';
    feedback.issues.push('Question is very short or looks incomplete.');
  }

  const lowerQuestion = question.toLowerCase();
  const foundKeywords = timeSensitiveKeywords.filter(keyword =>
    lowerQuestion.includes(keyword)
  );

  if (foundKeywords.length > 0) {
    feedback.timeSensitive.status = 'warning';
    feedback.timeSensitive.message = `This might be time-sensitive. Found keywords: "${foundKeywords.join('", "')}". Project X tasks should have stable answers over time.`;
    feedback.issues.push('Detected time-sensitive keywords.');
  }

  return feedback;
}

function validateAnswer(answer) {
  const feedback = {
    singleAnswer: { status: 'good', message: 'Answer format looks good.' },
    issues: []
  };

  if (!answer || answer.trim().length === 0) {
    feedback.singleAnswer.status = 'error';
    feedback.singleAnswer.message = 'Answer field is empty. Please provide a precise answer.';
    feedback.issues.push('No answer provided.');
    return feedback;
  }

  if (answer.trim().length > 150) {
    feedback.singleAnswer.status = 'warning';
    feedback.singleAnswer.message = 'Your answer might be too long. Try to give a single, short answer (like "Paris" instead of a full sentence).';
    feedback.issues.push('Answer looks like a paragraph rather than a short string.');
  }

  const sentenceCount = answer.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
  if (sentenceCount > 2) {
    feedback.singleAnswer.status = 'warning';
    feedback.singleAnswer.message = 'Answer contains multiple sentences. Try to provide just the key fact or name.';
    feedback.issues.push('Answer has multiple sentences.');
  }

  return feedback;
}

function displayFeedback(questionFeedback, answerFeedback) {
  const container = document.getElementById('feedback-container');
  container.innerHTML = '';

  const feedbackItems = [
    {
      label: 'Clarity',
      status: questionFeedback.clarity.status,
      message: questionFeedback.clarity.message
    },
    {
      label: 'Time-stable',
      status: questionFeedback.timeSensitive.status,
      message: questionFeedback.timeSensitive.message
    },
    {
      label: 'Single answer',
      status: answerFeedback.singleAnswer.status,
      message: answerFeedback.singleAnswer.message
    }
  ];

  feedbackItems.forEach(item => {
    const feedbackItem = document.createElement('div');
    feedbackItem.className = `feedback-item feedback-${item.status}`;

    const statusIcon = item.status === 'good' ? '✓' :
                       item.status === 'warning' ? '⚠' : '✗';

    feedbackItem.innerHTML = `
      <div class="feedback-header">
        <span class="feedback-icon">${statusIcon}</span>
        <strong>${item.label}:</strong>
        <span class="feedback-status">${item.status === 'good' ? 'Looks good' :
                                         item.status === 'warning' ? 'Needs attention' :
                                         'Issue found'}</span>
      </div>
      <p class="feedback-message">${item.message}</p>
    `;

    container.appendChild(feedbackItem);
  });

  const allIssues = [...questionFeedback.issues, ...answerFeedback.issues];

  if (allIssues.length > 0) {
    const tipsSection = document.createElement('div');
    tipsSection.className = 'feedback-tips';
    tipsSection.innerHTML = '<h4>Tips for Improvement:</h4>';

    const tipsList = document.createElement('ul');
    allIssues.forEach(issue => {
      const li = document.createElement('li');
      li.textContent = issue;
      tipsList.appendChild(li);
    });

    tipsSection.appendChild(tipsList);
    container.appendChild(tipsSection);
  } else {
    const successMsg = document.createElement('div');
    successMsg.className = 'feedback-success';
    successMsg.innerHTML = '<p><strong>Great job!</strong> Your practice task looks well-structured. Keep refining and testing your prompts!</p>';
    container.appendChild(successMsg);
  }
}

document.getElementById('practice-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const topic = document.getElementById('topic').value.trim();
  const question = document.getElementById('question').value.trim();
  const answer = document.getElementById('answer').value.trim();

  if (!topic || !question || !answer) {
    alert('Please fill in all fields before checking your task.');
    return;
  }

  const questionFeedback = validateQuestion(question);
  const answerFeedback = validateAnswer(answer);

  displayFeedback(questionFeedback, answerFeedback);

  document.getElementById('feedback-section').style.display = 'block';
  document.getElementById('feedback-section').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

document.getElementById('try-again').addEventListener('click', function() {
  document.getElementById('practice-form').reset();
  document.getElementById('feedback-section').style.display = 'none';
  document.getElementById('topic').focus();
});

document.querySelector('.btn-assessment').addEventListener('click', function() {
  alert('Assessment feature coming soon! For now, continue practicing and reviewing the modules.');
});

if (typeof markModuleAsInProgress === 'function') {
  markModuleAsInProgress('6');
}
