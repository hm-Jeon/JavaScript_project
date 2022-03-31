import * as root from "./root.js";

let focus;
export const focusElement = [
  root.focusDiv,
  root.focusForm,
  root.focusH3,
  root.focusInput,
];
const focusListElement = [
  root.focusListDiv,
  root.focusList,
  root.focusListH3,
  root.focusListSpan,
];

const savedFocus = localStorage.getItem(root.FOCUS_KEY);
export function paintSavedFocus() {
  if (savedFocus !== null) {
    const parsedFocus = JSON.parse(savedFocus);
    focus = parsedFocus;
    paintFocus();
  }
}

function saveFocus() {
  localStorage.setItem(root.FOCUS_KEY, JSON.stringify(focus));
}

function handleFocusSubmit(event) {
  event.preventDefault();
  focus = {
    text: root.focusInput.value,
    checked: root.FALSE_KEY,
  };
  root.focusInput.value = "";
  saveFocus();
  paintFocus();
}

function deleteFocus() {
  const li = this.parentElement;
  li.remove();
  localStorage.removeItem(root.FOCUS_KEY);
  focusElement.forEach((element) =>
    element.classList.remove(root.HIDDEN_CLASSNAME)
  );
  focusListElement.forEach((element) =>
    element.classList.add(root.HIDDEN_CLASSNAME)
  );
}

function paintFocus() {
  // create li
  const li = document.createElement("li");
  // create div
  const div = document.createElement("div");
  // create checkbox
  const chkBox = document.createElement("input");
  chkBox.type = "checkbox";
  if (focus.checked === root.TRUE_KEY) {
    chkBox.checked = true;
  }
  // add checkbox eventListner
  chkBox.addEventListener("change", function () {
    const span = this.parentNode.childNodes[1];
    if (this.checked) {
      span.classList.add(root.DONE_KEY);
      root.focusListSpan.classList.add(root.DONE_KEY);
      focus.checked = root.TRUE_KEY;
    } else {
      span.classList.remove(root.DONE_KEY);
      root.focusListSpan.classList.remove(root.DONE_KEY);
      focus.checked = root.FALSE_KEY;
    }
    saveFocus();
  });
  // create span
  const span = document.createElement("span");
  span.innerText = focus.text;
  if (focus.checked === root.TRUE_KEY) {
    span.classList.add(root.DONE_KEY);
  }
  // append checkbox & span in div
  div.appendChild(chkBox);
  div.appendChild(span);
  // create button
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteFocus);
  // append div & button in li
  li.appendChild(div);
  li.appendChild(button);
  root.focusList.appendChild(li);

  focusElement.forEach((element) =>
    element.classList.add(root.HIDDEN_CLASSNAME)
  );
  focusListElement.forEach((element) =>
    element.classList.remove(root.HIDDEN_CLASSNAME)
  );
}

root.focusForm.addEventListener("submit", handleFocusSubmit);
