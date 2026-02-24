let interviewList = [];
let rejectedList = [];
let currentStatus = "all";

let totalCount = document.getElementById("total-dp");
let interviewCount = document.getElementById("interview-dp");
let rejectedCount = document.getElementById("rejected-dp");
let allJobQuantity = document.getElementById("jbqnty");

const allFilterBtn = document.getElementById("showbtn");
const interviewFilterBtn = document.getElementById("interview-btn");
const rejectedFilterBtn = document.getElementById("rejected-btn");

const allCardSection = document.getElementById("All-job");
const mainContainer = document.querySelector("main");
const filteredSection = document.getElementById("filtered-container");
const noJobSection = document.getElementById("no-job-dp");

function calculateCount() {
  totalCount.innerText = allCardSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}

calculateCount();

function currentJobQuantity() {
  if (currentStatus == "showbtn") {
    allJobQuantity.innerText = totalCount.innerText;
  } else if (currentStatus == "rejected-btn") {
    allJobQuantity.innerText = rejectedList.length;
  } else if (currentStatus == "interview-btn") {
    allJobQuantity.innerText = interviewList.length;
  }
}

function toggleStyle(id) {
  allFilterBtn.style.background = "none";
  allFilterBtn.style.color = "black";

  interviewFilterBtn.style.background = "none";
  interviewFilterBtn.style.color = "black";

  rejectedFilterBtn.style.background = "none";
  rejectedFilterBtn.style.color = "black";

  const selected = document.getElementById(id);
  currentStatus = id;

  selected.style.color = "#fff";
  selected.style.backgroundColor = "#3b82f6";

  if (id == "interview-btn") {
    allCardSection.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    renderInterview();
  } else if (id == "showbtn") {
    allCardSection.classList.remove("hidden");
    noJobSection.classList.add("hidden");
    filteredSection.classList.add("hidden");

    calculateCount();
    if (totalCount.innerHTML == 0) {
      noJobSection.classList.remove("hidden");
    }
  } else if (id == "rejected-btn") {
    allCardSection.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    renderRejected();
  }
}

function noJobBadge() {
  if (currentStatus !== "showbtn") {
    if (filteredSection.children.length === 0) {
      noJobSection.classList.remove("hidden");
    } else {
      noJobSection.classList.add("hidden");
    }
  } else {
    noJobSection.classList.add("hidden");
  }
}

mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("interview-btn")) {
    const parentNode = event.target.parentNode.parentNode;

    parentNode.querySelector(".status").innerText = event.target.innerText;

    const jobName = parentNode.querySelector(".name").innerText;
    const jobRole = parentNode.querySelector(".role").innerText;
    const jobLocation = parentNode.querySelector(".location").innerText;
    const jobStatus = parentNode.querySelector(".status").innerText;
    const jobDetail = parentNode.querySelector(".job-details").innerText;

    const cardInfo = {
      jobName,
      jobRole,
      jobLocation,
      jobStatus,
      jobDetail,
    };

    const jobExist = interviewList.find(
      (item) => item.jobName == cardInfo.jobName
    );

    if (!jobExist) {
      interviewList.push(cardInfo);
    }

    rejectedList = rejectedList.filter(
      (item) => item.jobName != cardInfo.jobName
    );

    calculateCount();

    if (currentStatus == "rejected-btn") {
      renderRejected();
    }
  } 
  else if (event.target.classList.contains("rejected-btn")) {
    const parentNode = event.target.parentNode.parentNode;

    parentNode.querySelector(".status").innerText = event.target.innerText;

    const jobName = parentNode.querySelector(".name").innerText;
    const jobRole = parentNode.querySelector(".role").innerText;
    const jobLocation = parentNode.querySelector(".location").innerText;
    const jobStatus = parentNode.querySelector(".status").innerText;
    const jobDetail = parentNode.querySelector(".job-details").innerText;

    const cardInfo = {
      jobName,
      jobRole,
      jobLocation,
      jobStatus,
      jobDetail,
    };

    const jobExist = rejectedList.find(
      (item) => item.jobName == cardInfo.jobName
    );

    if (!jobExist) {
      rejectedList.push(cardInfo);
    }

    interviewList = interviewList.filter(
      (item) => item.jobName != cardInfo.jobName
    );

    if (currentStatus == "interview-btn") {
      renderInterview();
    }

    calculateCount();
  }

  if (event.target.classList.contains("fa-trash-can")) {
    event.target.parentNode.parentNode.remove();
    calculateCount();
    if (totalCount.innerHTML == 0) {
      noJobSection.classList.remove("hidden");
    }
  }

  currentJobQuantity();
});