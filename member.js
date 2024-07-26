function skillsMember() {
  const member = document.querySelector('.member');
  const memberText = document.querySelector('.member-text');

  if (member) {
    const memberHeight = member.offsetHeight;
    const memberTextHeight = memberText.offsetHeight;

    if (memberHeight > memberTextHeight) {
      memberText.style.height = `${memberHeight}px`;
    } else {
      member.style.height = `${memberTextHeight}px`;
    }
  }
}