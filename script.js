let timerInterval; // 计时器的间隔
let seconds = 0; // 计时的秒数
const music = document.getElementById('backgroundMusic'); // 获取音乐元素

// 开始计时的函数
function startTimer() {
    clearInterval(timerInterval); // 清除任何现有的计时器
    music.play(); // 播放音乐
    timerInterval = setInterval(() => {
        seconds++; // 每秒增加1
        document.getElementById('timer').textContent = formatTime(seconds); // 更新显示
    }, 1000);
}

// 格式化时间的函数
function formatTime(seconds) {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0'); // 计算小时
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0'); // 计算分钟
    const secs = String(seconds % 60).padStart(2, '0'); // 计算秒数
    return `${hours}:${minutes}:${secs}`; // 返回格式化的时间字符串
}

// 暂停计时的函数
function pauseTimer() {
    clearInterval(timerInterval); // 清除计时器
    music.pause(); // 暂停音乐
}

// 清零计时的函数
function resetTimer() {
    clearInterval(timerInterval); // 清除计时器
    seconds = 0; // 重置秒数
    document.getElementById('timer').textContent = formatTime(seconds); // 更新显示
    music.currentTime = 0; // 重置音乐到起始位置
    music.play(); // 重新播放音乐
}

// 增加音量的函数
function increaseVolume() {
    if (music.volume < 1) { // 最大音量为1
        music.volume = Math.min(music.volume + 0.1, 1); // 增加音量，确保不超过最大值
    }
}

// 减小音量的函数
function decreaseVolume() {
    if (music.volume > 0) { // 最小音量为0
        music.volume = Math.max(music.volume - 0.1, 0); // 降低音量，确保不低于最小值
    }
}

// 事件监听器
document.getElementById('startButton').addEventListener('click', startTimer); // 开始计时
document.getElementById('pauseButton').addEventListener('click', pauseTimer); // 暂停计时
document.getElementById('resetButton').addEventListener('click', resetTimer); // 清零计时
document.getElementById('increaseVolume').addEventListener('click', increaseVolume); // 增加音量
document.getElementById('decreaseVolume').addEventListener('click', decreaseVolume); // 减小音量