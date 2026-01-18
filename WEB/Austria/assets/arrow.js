document.addEventListener("DOMContentLoaded", function () {
  const progressPath = document.querySelector(".progress-wrap path");
  const pathLength = progressPath.getTotalLength();

  progressPath.style.transition = progressPath.style.WebkitTransition = "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";

  const updateProgress = () => {
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;

    const scrollProgress = document.getElementById("scrollProgress");
    if (scroll > 100) {
      scrollProgress.classList.add("active-progress");
    } else {
      scrollProgress.classList.remove("active-progress");
    }
  };

  document.getElementById("scrollProgress").addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", updateProgress);
});
