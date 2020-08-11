const controller = new ScrollMagic.Controller()

const containers = document.querySelectorAll('.container')
containers.forEach((container) => {
	const scene = new ScrollMagic.Scene({
		triggerElement: container,
	}).setClassToggle(container, 'fade-in').addTo(controller)
})


const hero = document.querySelector('.hero')

const heroScene = new ScrollMagic.Scene({
	triggerElement: hero,
	duration: 3000,
	triggerHook: 0,
})
.setPin(hero)
.addTo(controller)

heroScene.on('update', e => {
	scrollPos = e.scrollPos / 1000
	const frame = toFrameNumber(scrollPos, 3, animation.totalFrames)
	animation.goToAndStop(frame, true)
})
heroScene.on('enter', e => {
	scrollPos = e.scrollPos / 1000
	const frame = toFrameNumber(scrollPos, 3, animation.totalFrames)
	animation.goToAndStop(frame, true)
})

const toFrameNumber = (num, maxNum, maxFrame) => {
	let new_value = maxFrame - 1
	if (num < 3) {
		new_value = ( (num - 0) / (3 - 0) ) * (maxFrame - 0) + 0
	}
	return new_value
}

var animation = bodymovin.loadAnimation({
  container: document.getElementById('anim'),
  renderer: 'canvas',
  path: '/assets/videos/data.json',
  autoplay: false,
  rendererSettings: {
  	preserveAspectRatio: 'xMidYMid slice'
  },
})

const featured = document.querySelector('.featured')
const centerImg = featured.querySelector('.center')

const disperseScene = new ScrollMagic.Scene({
	triggerElement: featured,
	duration: 'auto',
	triggerHook: 0.25
})
.setClassToggle(featured, 'disperse')
.addTo(controller)