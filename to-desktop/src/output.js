const navDialog = document.getElementById("nav-dialog");

const handleMenu = () => {
  console.log("menu");
  navDialog.classList.toggle("hidden");
};

const initialTransLateLTR = -48 * 4;
const initialTransLateRTL = 36 * 4;

function setupIntersectionObserver(element, isLTR, speed) {
  const interSectionObserverCallback = (entries) => {
    const isInterSecting = entries[0].isIntersecting;
    // console.log(element, isInterSecting);
    if (isInterSecting) {
      document.addEventListener("scroll", scrollHandler);
    } else {
      document.removeEventListener("scroll", scrollHandler);
    }
  };
  const interSectionObserver = new IntersectionObserver(
    interSectionObserverCallback
  );
  interSectionObserver.observe(element);

  const scrollHandler = () => {
    const translateX =
      (window.innerHeight - element.getBoundingClientRect().top) * speed;
    let totalTranslate = 0;
    if (isLTR) {
      totalTranslate = initialTransLateLTR + translateX;
    } else {
      totalTranslate = initialTransLateRTL - translateX;
    }

    element.style.transform = `translateX(${totalTranslate}px)`;
  };
}

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
