const maxSelection = 10;
const maxSelection2 = 5;

const words = document.querySelectorAll(".basic-table-text");
const nextButton1 = document.querySelector(".next-button1");
const block2 = document.querySelector(".block-2");
const nextButton2 = document.querySelector(".next-button2");
const block3 = document.querySelector(".block-3");

let selectedWords = JSON.parse(localStorage.getItem("selectedWords")) || [];

// Перевірка та стиль для вибраних слів
words.forEach((word) => {
  if (selectedWords.includes(word.innerText)) {
    word.style.color = "#ae1412";
    word.style.fontWeight = "bold";
  }
});

if (selectedWords.length === maxSelection) {
  nextButton1.style.display = "block";
} else {
  nextButton1.style.display = "none";
  block2.style.display = "none";
}

// Обробник кліку для кожного слова з першої групи
words.forEach((word) => {
  word.addEventListener("click", () => {
    if (selectedWords.includes(word.innerText)) {
      word.style.color = "#4a4a4a";
      word.style.fontWeight = "400";
      selectedWords = selectedWords.filter((w) => w !== word.innerText);

      // Видаляємо слово з другого списку, якщо воно там є
      let selectedWords2 =
        JSON.parse(localStorage.getItem("selectedWords2")) || [];
      selectedWords2 = selectedWords2.filter((w) => w !== word.innerText);
      localStorage.setItem("selectedWords2", JSON.stringify(selectedWords2));
    } else {
      if (selectedWords.length < maxSelection) {
        word.style.color = "#ae1412";
        word.style.fontWeight = "bold";
        selectedWords.push(word.innerText);
      }
    }
    localStorage.setItem("selectedWords", JSON.stringify(selectedWords));
    if (selectedWords.length === maxSelection) {
      nextButton1.style.display = "block";
    } else {
      nextButton1.style.display = "none";
      block2.style.display = "none";
      block3.style.display = "none";
    }
  });
});

const selectedWordsContainer = document.querySelector(
  ".selected-words-container"
);
function updateSelectedWordsDisplay() {
  selectedWordsContainer.innerHTML = "";
  if (selectedWords.length > 0) {
    const ul = document.createElement("ul");
    selectedWords.forEach((word) => {
      const li = document.createElement("li");
      li.textContent = word;
      li.classList.add("basic-table-text-2");
      ul.appendChild(li);
    });
    selectedWordsContainer.appendChild(ul);
  }

  const words2 = document.querySelectorAll(".basic-table-text-2");

  // Додано другий набір вибраних слів
  let selectedWords2 = JSON.parse(localStorage.getItem("selectedWords2")) || [];

  // Перевірка та стиль для вибраних слів
  words2.forEach((word2) => {
    if (selectedWords2.includes(word2.innerText)) {
      word2.style.color = "#ae1412";
      word2.style.fontWeight = "bold";
    }
  });

  if (selectedWords2.length === maxSelection2) {
    nextButton2.style.display = "block";
  } else {
    nextButton2.style.display = "none";
    block3.style.display = "none";
  }

  words2.forEach((word2) => {
    word2.addEventListener("click", () => {
      if (selectedWords2.includes(word2.innerText)) {
        word2.style.color = "#4a4a4a";
        word2.style.fontWeight = "400";
        selectedWords2 = selectedWords2.filter((w) => w !== word2.innerText);
      } else {
        if (selectedWords2.length < maxSelection2) {
          word2.style.color = "#ae1412";
          word2.style.fontWeight = "bold";
          selectedWords2.push(word2.innerText);
        }
      }
      localStorage.setItem("selectedWords2", JSON.stringify(selectedWords2));
      if (selectedWords2.length === maxSelection2) {
        nextButton2.style.display = "block";
      } else {
        nextButton2.style.display = "none";
        block3.style.display = "none";
      }
    });
  });
}

nextButton1.addEventListener("click", () => {
  updateSelectedWordsDisplay();
  if (block2.style.display === "flex") {
    block2.style.display = "none";
  } else {
    block2.style.display = "flex";
  }
});

nextButton2.addEventListener("click", () => {
  if (block3.style.display === "flex") {
    block3.style.display = "none";
  } else {
    block3.style.display = "flex";
  }
});
