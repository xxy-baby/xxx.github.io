const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// 动画函数，接收一个元素
function animateAlice(element) {
  const animation = element.animate(aliceTumbling, aliceTiming);
  // 监听动画结束事件
  animation.onfinish = () => {
    if (element === alice1) {
      // 如果是第一个元素，启动第二个元素的动画
      animateAlice(alice2);
    } else if (element === alice2) {
      // 如果是第二个元素，启动第三个元素的动画
      animateAlice(alice3);
    }
  };
}

// 开始第一个元素的动画
animateAlice(alice1);
