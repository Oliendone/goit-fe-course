const boxTealRef = document.querySelector('.js-box-teal');
const boxRedRef = document.querySelector('.js-box-red');
const boxBlueRef = document.querySelector('.js-box-blue');
const boxesRef = document.querySelector('.boxes');

// ===============throttle and dedounce=============

function mouseEnter(event) {
  console.log(event.target);
}

boxTealRef.addEventListener('mouseenter', _.throttle(mouseEnter, 1000));
boxRedRef.addEventListener('mouseenter', _.debounce(mouseEnter, 3000));

// =============== IntersectionObserver API =================
const options = {
  //   rootMargin: '50px',
  // threshold: [0, 0.5, 1],
};
console.log(boxesRef);
const onEntry = entries => {
  entries.forEach(entry => console.log(entry.target));
};

const io = new IntersectionObserver(onEntry, options);
boxesRef.forEach(box => io.observe(box));
