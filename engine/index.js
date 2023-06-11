let settings = {
    brush: '.',
    xInstance: 20,
    yInstance: 50,
}

const loaded = (e) => {
    let ctx = document.getElementById('canvas').getContext('2d');
    ctx.font = "60px serif";
    ctx.fillText(settings.brush, settings.xInstance, settings.yInstance);
}

const detectKey = (e) => {
    switch (e.key) {
        case "ArrowLeft":
            settings.xInstance = settings.xInstance - 1;
            console.log('left pressed');
            loaded();
            break;
        case "ArrowRight":
            settings.xInstance = settings.xInstance + 1;
            console.log('right pressed')
            loaded();
            break;
        case "ArrowUp":
            settings.yInstance = settings.yInstance - 1;
            console.log('down pressed')
            loaded();
            break;
        case "ArrowDown":
            settings.yInstance = settings.yInstance + 1;
            console.log('down pressed')
            loaded();
            break;
    }

}

document.onkeydown = detectKey;

const toolBoxInitialize = () => {
    if (!brushesBox) {
        console.log('Please connect brushes.js file')
    } else {
        brushesBox.map(({ brush }, i) => {
            console.log('Brushes loaded', i)
            document.querySelector(".tools__box").innerHTML += `
            <button 
            onclick="changeBrush(${`'${brush}'`})"
            class="toolbox__brush"
            >${brush}
            </button>
        `
        })
    }
}

toolBoxInitialize();

const changeBrush = (brushType) => {
    if (settings.brush === brushType) {
        console.log('YOu already selected that brush')
    }
    return settings.brush = brushType;
}