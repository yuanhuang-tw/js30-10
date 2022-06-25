const checkboxes = document.querySelectorAll('[type="checkbox"]');
const checkboxesArr = Array.from(checkboxes);

// checkboxIndexArr[0] 前一次點擊 checkbox 的 index
// checkboxIndexArr[1] 本次點擊 checkbox 的 index
// 先給預設值 [0]
const checkboxIndexArr = [0];

checkboxes.forEach((checkbox) => checkbox.addEventListener('click', handleCheck));

function handleCheck(e) {
  if (checkboxIndexArr.length > 1) {
    checkboxIndexArr.shift();
  }

  checkboxIndexArr.push(checkboxesArr.indexOf(e.target));

  if (e.shiftKey && e.target.checked) {
    const orderedArr = [...checkboxIndexArr].sort((a, b) => a - b);

    for (let i = orderedArr[0]; i < orderedArr[1]; i++) {
      checkboxes[i].checked = true;
    }
  }
}