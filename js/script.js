const body = document.querySelector('body')
const bars = document.querySelector('.nav__bars')
const menu = document.querySelector('.nav__menu')
const logo = document.querySelector('.nav__logo')
const allNavItems = document.querySelectorAll('.nav__items')

const padlockBody = () => {
	if (body.getAttribute('data-padlock') === 'unlocked') {
		body.setAttribute('data-padlock', 'blocked')
	} else {
		body.setAttribute('data-padlock', 'unlocked')
	}
}

const handleMenu = () => {
	bars.classList.toggle('nav__bars--active')
	menu.classList.toggle('nav__menu--active')

	allNavItems.forEach(item => {
		item.addEventListener('click', items => {
			bars.classList.remove('nav__bars--active')
			menu.classList.remove('nav__menu--active')
			body.setAttribute('data-padlock', 'unlocked')
		})
	})
}

const logoCloseMenu = () => {
	bars.classList.remove('nav__bars--active')
	menu.classList.remove('nav__menu--active')
	body.setAttribute('data-padlock', 'unlocked')
}

bars.addEventListener('click', handleMenu)
bars.addEventListener('click', padlockBody)
logo.addEventListener('click', logoCloseMenu)
