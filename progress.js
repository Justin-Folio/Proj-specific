const STORAGE_KEY = 'projectx_module_progress';

function getProgress() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  return {
    '1': 'not_started',
    '2': 'not_started',
    '3': 'not_started',
    '4': 'not_started',
    '5': 'not_started',
    '6': 'not_started'
  };
}

function setModuleStatus(moduleId, status) {
  const progress = getProgress();
  progress[moduleId] = status;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  updateProgressDisplay();
}

function getModuleStatus(moduleId) {
  const progress = getProgress();
  return progress[moduleId] || 'not_started';
}

function updateProgressDisplay() {
  const badges = document.querySelectorAll('.status-badge');
  badges.forEach(badge => {
    const moduleCard = badge.closest('[data-module-id]');
    if (moduleCard) {
      const moduleId = moduleCard.getAttribute('data-module-id');
      const status = getModuleStatus(moduleId);
      badge.setAttribute('data-status', status);
      badge.textContent = status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
    }
  });
}

function markModuleAsInProgress(moduleId) {
  const currentStatus = getModuleStatus(moduleId);
  if (currentStatus === 'not_started') {
    setModuleStatus(moduleId, 'in_progress');
  }
}

function markModuleAsComplete(moduleId) {
  setModuleStatus(moduleId, 'completed');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', updateProgressDisplay);
} else {
  updateProgressDisplay();
}

const markCompleteBtn = document.getElementById('mark-complete');
if (markCompleteBtn) {
  markCompleteBtn.addEventListener('click', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const moduleId = urlParams.get('id') || '6';
    markModuleAsComplete(moduleId);

    this.textContent = 'Completed!';
    this.classList.add('completed');
    this.disabled = true;

    setTimeout(() => {
      const nextModuleId = parseInt(moduleId) + 1;
      if (nextModuleId <= 6) {
        if (nextModuleId === 6) {
          window.location.href = 'practice-lab.html';
        } else {
          window.location.href = `module.html?id=${nextModuleId}`;
        }
      } else {
        window.location.href = 'learning-path.html';
      }
    }, 800);
  });
}
