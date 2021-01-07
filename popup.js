let openNewTab = document.getElementById("openNewTab");
let practiceSites = [
  "https://www.leetcode.com",
  "https://www.codewars.com",
  "https://www.freecodecamp.org/",
  "https://www.codecademy.com/",
  "https://www.edx.org/course/subject/computer-science",
  "https://www.khanacademy.org/computing/computer-programming",
  "https://www.theodinproject.com/",
  "https://hackr.io/",
  "https://www.hackerrank.com/",
  "https://codeasy.net/",
];
let randomNum = Math.floor(practiceSites.length * Math.random());

// open a random coding practice site in a new tab
openNewTab.onclick = function () {
  chrome.tabs.create({ url: practiceSites[randomNum] });
};
